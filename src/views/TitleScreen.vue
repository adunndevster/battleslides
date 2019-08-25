<template>
  <div class="main">
    
    <div class="bs-title"><img src="@/assets/ui/logo_black.svg" /></div>
    
    <div class="columns game-options">
      <div @click="startBattleMode" class="column game-option">
        <h4>Battle Mode</h4>
        <p>A three-round match between two witty teams for one unholy prize.</p>
      </div>
      <div @click="startPartyMode" class="column game-option">
        <h4>Party Mode</h4>
        <p>A never-ending orgasm of BattleSlides.</p>
      </div>
    </div>
    
    <div class="files">
      <p>While you wait... Add your own photos and videos! They may just pop up in one of these presentations... Go to https://adunndevster.github.io/battleslides-image</p>
      
      <div class="columns files-status">
        <div class="column">
          <div>Audience: {{AudienceCount}}</div>
        </div>
        <div class="column">
          <div>Files Received: {{FilesReceived}}</div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings";
import router from '../router';
import {FileSelector} from "../common/FileSelector";

export default {
  name: "title-screen",
  data: () => {
    return {
      FilesReceived: 0,
      AudienceCount: 0
    }
  },
  mounted() {
    window.getExternalIceServers = true;
    const vue = this;

    window.onerror = console.error = function() {
            var error = JSON.stringify(arguments);
            if(error.indexOf('Blocked a frame with origin') !== -1) {
                return;
            }
            alert('Error:\n' + error);
        };
        function setupFileTransfer() {
          joinARoom("battleslides-1234");
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
  methods: {
    startBattleMode()
    {
      GameSettings.SetupBattleModeGame();
      router.push("intro-screen");
    },
    startPartyMode()
    {
      GameSettings.SetupPartyModeGame();
      router.push("intro-screen");
    },
    setFilesReceived(numFiles)
    {
      this.FilesReceived = numFiles;
    }
  }
}
</script>



<style>
  body, html {
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(243,243,243,1) 62%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 62%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 62%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=0 ); /* IE6-9 */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .main {
    margin: 100px;
  }

  .bs-title {
    margin-top: 200px;
  }

  .game-options
  {
    padding-left: 100px;
    padding-right: 100px;
  }
  .game-options :hover
  {
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 2px;
  }

  .game-option
  {
    margin-top: 120px;
    padding-right: 100px;
    padding-left: 100px;
    cursor: pointer;
  }
  .game-option h4 {
    font-size: 48px;
    pointer-events: none;
  }
  .game-option p {
    font-size: 26px;
    pointer-events: none;
  }

  .files
  {
    position: absolute;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 2px;
    padding: 36px;
    max-width: 550px;
    right: 100px;
    bottom: 100px;
    text-align: left;
    font-size: 18px;
  }
  .files .files-status
  {
    margin-top: 20px;
  }

</style>