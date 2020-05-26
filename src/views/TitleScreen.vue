<template>
  <div class="main">
    <!-- <transition name="fade">
      <div v-if="ShowOverlay" class="white-overlay"></div>
    </transition> -->
   
    <video id="vidIntro" src="@/assets/animations/presentation_room.mp4" preload="true" autoplay loop />

    <transition name="slide">
      <div id="menu-container">
        <div id="menu" class="menu" v-if="ShowMenu">
      <div class="bs-title"><img src="@/assets/ui/logo_black_solid.svg" /></div>
    
      <div class="columns game-options">
        <div class="column">
          <div @click="startBattleMode" class="game-option">
            <h4>PLAY</h4>
            <p>A three-round match between two witty teams for one unholy prize.</p>
          </div>
          <!-- <div @click="startPartyMode" class="game-option">
            <h4>PARTY MODE</h4>
            <p>A never-ending series of BattleSlides.</p>
          </div> -->
        </div>

        <div class="column">
          <div class="files">
          <h4>ADD CUSTOM CONTENT</h4>
          <p>Simply go to cutt.ly/battleslides and join with the code: {{RoomNum}}</p>
          <br>
          <p>WARNING: Any content you add* will probably be seen by all the jokers playing this game with you :)</p>
          
          <div class="columns files-status">
            <div class="column">
              <div>Audience: {{AudienceCount}}</div>
            </div>
            <div class="column">
              <div>Items Received: {{FilesReceived}}</div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      
    </div> 
      </div>
    </transition>

  </div>
</template>

<script>
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings";
import router from '../router';
import {FileSelector} from "../common/FileSelector";
import * as io from 'socket.io-client';
window.io = io;

export default {
  name: "title-screen",
  data: () => {
    return {
      RoomNum: "AAAAA",
      FilesReceived: 0,
      AudienceCount: 0,
      ShowOverlay: true,
      ShowMenu: true
    }
  },
  mounted() {
    this.$emit('toggleScreenFade');
    window.getExternalIceServers = true;
    const vue = this;
    this.ShowOverlay = false;

    this.createRoom();

    GameSettings.CleanSlideData();

    window.onresize = this.onWindowResize;
    this.onWindowResize();

    window.onerror = console.error = function() {
        var error = JSON.stringify(arguments);
        if(error.indexOf('Blocked a frame with origin') !== -1) {
            return;
        }
        alert('Error:\n' + error);
    };
        function setupFileTransfer() {
          alert(vue.RoomNum);
          joinARoom(`battleslides-${vue.RoomNum}`);
        }
        
        var connection;
        function joinARoom(roomId) {
          var lastSelectedFile;
          var room_id = '';
          // 60k -- assuming receiving client is chrome
          var chunk_size = 60 * 1000;
          function setupWebRTCConnection() {
              if (connection) {
                  return;
              }
              const RTCMultiConnection = require('rtcmulticonnection');
              const fbr = require("fbr");
  
              connection = new RTCMultiConnection();
              // to make sure, "connection-reconnect" doesn't sends files again
              connection.fileReceived = {};
              // by default, socket.io server is assumed to be deployed on your own URL
              //connection.socketURL = '/';
              // comment-out below line if you do not have your own socket.io server
              connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
              connection.socketMessageEvent = 'file-sharing-demo';
              connection.chunkSize = chunk_size;
              connection.sdpConstraints.mandatory = {
                  OfferToReceiveAudio: false,
                  OfferToReceiveVideo: false
              };
              connection.enableFileSharing = true;
              if (room_id && room_id.length) {
                  connection.userid = room_id;
              }
              connection.channel = connection.sessionid = roomId;
              connection.session = {
                  data: true,
                  // oneway: true --- to make it one-to-many
              };
              // https://www.rtcmulticonnection.org/docs/iceServers/
              // use your own TURN-server here!
              connection.iceServers = [{
                  'urls': [
                      'stun:stun.l.google.com:19302',
                      'stun:stun1.l.google.com:19302',
                      'stun:stun2.l.google.com:19302',
                      'stun:stun.l.google.com:19302?transport=udp',
                  ]
              }];
              //connection.filesContainer = logsDiv;
              connection.connectedWith = {};
              connection.onmessage = function(event) {
                  if(event.data.doYouWannaReceiveThisFile) {
                      if(!connection.fileReceived[event.data.fileName]) {
                          connection.send({
                              yesIWannaReceive:true,
                              fileName: event.data.fileName
                          });
                      }
                  }
                  if(event.data.yesIWannaReceive && !!lastSelectedFile) {
                      connection.shareFile(lastSelectedFile, event.userid);
                  }
              };
              connection.onopen = function(e) {
                  try {
                      chrome.power.requestKeepAwake('display');
                  }
                  catch(e) {}
                  if (connection.connectedWith[e.userid]) return;
                  connection.connectedWith[e.userid] = true;
                  var message = '<b>' + e.userid + '</b><br>is connected.';
                  console.log(message);
                  if (!lastSelectedFile) return;
                  // already shared the file
                  var file = lastSelectedFile;
                  setTimeout(function() {
                      console.log('Sharing file<br><b>' + file.name + '</b><br>Size: <b>' + bytesToSize(file.size) + '<b><br>With <b>' + connection.getAllParticipants().length + '</b> users');
                      connection.send({
                          doYouWannaReceiveThisFile: true,
                          fileName: file.size + file.name
                      });
                  }, 500);
              };
              connection.onclose = function(e) {
                  incrementOrDecrementUsers();
                  if (connection.connectedWith[e.userid]) return;
                  console.log('Data connection has been closed between you and <b>' + e.userid + '</b>. Re-Connecting..');
                  connection.join(roomId);
              };
              connection.onerror = function(e) {
                  if (connection.connectedWith[e.userid]) return;
                  console.log('Data connection failed. between you and <b>' + e.userid + '</b>. Retrying..');
              };
              setFileProgressHandlers(connection);
              connection.onUserStatusChanged = function(user) {
                  incrementOrDecrementUsers();
              };
              connection.onleave = function(user) {
                  user.status = 'offline';
                  connection.onUserStatusChanged(user);
                  incrementOrDecrementUsers();
              };
              var message = 'Connecting room:<br><b>' + connection.channel + '</b>';
              console.log(message);
              connection.openOrJoin(connection.channel, function(isRoomExist, roomid) {
                  var message = 'Successfully connected to room: <b>' + roomid + '</b><hr>Other users can join you on iPhone/Android using "' + roomid + '" or desktop (Windows/MacOSX/Ubuntu) users can join using this (secure/private) URL: <a href="./file-sharing.html#' + roomid + '" target="_blank">file-sharing.html#' + roomid + '</a>';
                  // if (isRoomEists) { }
                  console.log(message);
                  connection.getSocket(function(socket) {
                    socket.on('disconnect', function() {
                      console.log('Seems disconnected.');
                    });
                    socket.on('connect', function() {
                      location.reload();
                    });
                    socket.on('error', function() {
                      location.reload();
                    });
                  });
                  window.addEventListener('offline', function() {
                    console.log('Seems disconnected.');
                  }, false);
              });
              window.connection = connection;
          }
          function setFileProgressHandlers(connection) {
              //var progressHelper = {};
              // www.RTCMultiConnection.org/docs/onFileStart/
              connection.onFileStart = function(file) {
                  if (connection.fileReceived[file.size + file.name]) return;
                  let message = '';
                  if (file.userid == connection.userid) {
                      message += 'Sharing with:' + file.remoteUserId;
                  } else {
                      message += 'Receiving from:' + file.userid;
                  }
                  // message += '<br><b>' + file.name + '</b>.';
                  // message += '<br>Size: <b>' + bytesToSize(file.size) + '</b>';
                  // message += '<br><label>0%</label> <progress></progress>';
                  // if(file.userid !== connection.userid) {
                  //     message += '<br><button id="resend">Receive Again?</button>';
                  // }
                  // if (!file.remoteUserId) {
                  //     progressHelper[file.uuid] = {
                  //         div: div,
                  //         progress: div.querySelector('progress'),
                  //         label: div.querySelector('label')
                  //     };
                  //     progressHelper[file.uuid].progress.max = file.maxChunks;
                  //     return;
                  // }
                  // if (!progressHelper[file.uuid]) {
                  //     progressHelper[file.uuid] = {};
                  // }
                  // progressHelper[file.uuid][file.remoteUserId] = {
                  //     div: div,
                  //     progress: div.querySelector('progress'),
                  //     label: div.querySelector('label')
                  // };
                  // progressHelper[file.uuid][file.remoteUserId].progress.max = file.maxChunks;
              };
              // www.RTCMultiConnection.org/docs/onFileProgress/
              connection.onFileProgress = function(chunk) {
                  if (connection.fileReceived[chunk.size + chunk.name]) return;
                  // var helper = progressHelper[chunk.uuid];
                  // if (!helper) {
                  //     return;
                  // }
                  // if (chunk.remoteUserId) {
                  //     helper = progressHelper[chunk.uuid][chunk.remoteUserId];
                  //     if (!helper) {
                  //         return;
                  //     }
                  // }
                  // helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max;
                  // updateLabel(helper.progress, helper.label);
              };
              // www.RTCMultiConnection.org/docs/onFileEnd/
              connection.onFileEnd = function(file) {
                if (connection.fileReceived[file.size + file.name]) return;
                if (file.remoteUserId === connection.userid) {
                    connection.fileReceived[file.size + file.name] = file;
                    var message = 'Successfully received file';
                    message += '<br><b>' + file.name + '</b>.';
                    message += '<br>Size: <b>' + bytesToSize(file.size) + '</b>.';
                    message += '<br><a href="' + file.url + '" target="_blank" download="' + file.name + '">Download</a>';
                    console.log(message);
                    GameSettings.Images.push(file);
                    console.log(JSON.stringify(GameSettings));
                    vue.FilesReceived = GameSettings.Images.length;
                }
              };
          }
          function bytesToSize(bytes) {
              var k = 1000;
              var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
              if (bytes === 0) {
                  return '0 Bytes';
              }
              var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
              return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
          }
          function incrementOrDecrementUsers() {
            vue.AudienceCount = connection ? connection.getAllParticipants().length : 0;
          }
          window.onerror = console.error = function() {
              var error = JSON.stringify(arguments);
              if(error.indexOf('Blocked a frame with origin') !== -1) {
                return;
              }
              console.log('Error:<br>' + error);
          };
          setupWebRTCConnection();
      }
      setupFileTransfer();
  },
  beforeDestroy() {
      window.onresize = null;
  },
  methods: {
    createRoom()
    {
      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      this.RoomNum = makeid(5);
    },
    startBattleMode()
    {
      document.body.requestFullscreen();
      GameSettings.SetupBattleModeGame();
      
      this.ShowMenu = false;
      setTimeout(() => {router.push("intro-screen")}, 1500);
    },
    startPartyMode()
    {
      GameSettings.SetupPartyModeGame();
      router.push("intro-screen");
    },
    setFilesReceived(numFiles)
    {
      this.FilesReceived = numFiles;
    },
    onWindowResize(){
      var scale = Math.min( 
        window.innerWidth / 1920, 
        window.innerHeight / 1200
      );

      var menu = document.getElementById('menu-container');
      menu.style.transform = `scale(${scale})`;

    }
  }
}
</script>



<style>
  body, html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .main {
    margin: 100px;
  }

  .main video
  {
    width: 100vw;
    position: absolute;
    left: 0px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #menu-container
  {
    left: 0;
    top: 0;
    position: absolute;
    width: 1920px;
    height: 1200px;
    transform-origin: left top;
  }

  .menu, .welcome
  {
    position: absolute;
    z-index: 100;
    left: 31%;
    top: 8%;
    width: 55%;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
  }

  .menu h4 {
    font-weight: 600;
  }

  .bs-title {
    position: relative;
    margin: 0 auto;
    width: 60%;
  }


  .game-option
  {
    margin-top: 12%;
    cursor: pointer;
    border: 3px dashed #000000;
    text-align: left;
    padding: 5%;
  }
  .game-option h4 {
    font-size: 40px;
    pointer-events: none;
  }
  .game-option p {
    font-size: 22px;
    pointer-events: none;
  }
  .game-option:hover{
    background-color: rgba(255, 255, 255, 1)
  }

  .files
  {
    padding: 36px;
    max-width: 550px;
    text-align: left;
    font-size: 18px;
    margin-top: 20%;
  }
  .files h4{
    font-size: 40px;
  }
  .files .files-status
  {
    margin-top: 20px;
  }

  .white-overlay{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 9999;
  }


  .slide-enter-active {
    transform: translateX(5%);
    opacity: 0;
    animation: slide-in .5s .6s;
  }
  .slide-leave-active {
    animation: slide-in .5s reverse;
  }
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
/* 
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>