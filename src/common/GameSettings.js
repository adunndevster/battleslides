export const GAME_MODE_BATTLE = 'GAME_MODE_BATTLE';
export const GAME_MODE_PARTY = 'GAME_MODE_PARTY';
export let GameMode = GAME_MODE_BATTLE;
export default function setGameMode(mode) {
    GameMode = mode;
}

export const GameSettings = {
    Presentation: 1,
    Team1Turn: true,
    Team1Name: '',
    Team2Name: '',
    Team1NameLeft: '',
    Team2NameLeft: '',
    Team1NameRight: '',
    Team2NameRight: '',
    Images: [],
    ImageSpot: 0,
    SlideData: {
        "TitleActions":["Getting Started with ","Growing Your Business with ",", Listening and Learning","... Isn't It About Time?","Getting Down and Dirty With ","What Happens When you Try To Eat "," are for N00BS!",", Seeing is Believing",", let's DIVE IN!","... a 500 Foot View!","What My Parents Can Learn From "," Are as Overated as High Heels or Tupes",", and Getting Over Your Ex.","... Let's Get Effin Rich!",", or \"What the Chinese Do.\"",", Nobody Loves 'Em More Than Me. - Donald Trump","Engaging in Dangerous Acts with ",", Get the Heck Out of My Vagina!",", Am I Right!?","How to Get More Out of Your ","... Don't They Have Puncahble Faces?","Stop All Be Crawlin' on Your Bellies, ",", You Got Played!"," and Other Iffy Choices","Unconventional Methods of Childcare Using ","The Unexpected Benefits of ",": What Up With That?","You Can't Blame Me for Hating ","Why I Can't Get Enough of ","The Controversy Surrounding ",": Both Sides of the Story","My Mother Coerced Me into Telling You About ","I Am the Expert on ","Just "],
        "TitleSubjects":["Airlines","Airplanes","Automobiles","Ballerinas","Basketball players","Casinos","Cats","Computers","Cupcakes","Dogs","Fathers","Friends","Giraffes","Hotels","Mothers","Robots","Rock Bands","Sports","Tacos","Warrior princesses","Weddings","Elves","Bankers","Religions","Dolphins","Bakers","Hipsters","Fitness Instructors","Gamers","Hedgehogs and plumbers","Children","Bush and Obama","Hemorrhoids","Pencil necks"],
        "SlideStatements":["Now is the time for --- to ___.","If only --- would ___, we wouldn't be in this situation.","I think --- should ___.","Who agrees that --- should ___?","All the kids want --- to ___.","Can --- ___?","Women like --- when they ___.","My daddy wants --- to ___","Based on legal precendence, --- must now ___.","This is my way of asking you to ___.","If --- can ___, so can you.","Note that --- are known for their tendency to ___.","They all said I couldn't ___ with ---, and they were wrong.","They all said I couldn't ___ with ---, and they were right.","Fun fact: --- ___.","If you ___, you'll learn to love ---.","Take it from me: I love ---, and I ___ all the time.","I ___ every day, so naturally I can't get enough of ---.","If you're like me, --- makes you want to ___.","Thinking about --- makes me want to ___.","Don't assume --- will ___.","When I ___, I hope --- will be nearby.","When you are ready to ___, the --- will support you.","Men secretly want --- to ___.","How could --- ever ___ again after what happened?","You all need --- to ___.","You, too, can ___ with ---. Stay tuned.","The President needs --- to ___.","Don't believe what you've read: --- will ___.","Someday --- will finally ___.","Who can tell me why --- shouldn't ___?","When should --- ___?","I'm sensing some of you don't believe --- should ___.",""],
        "StatementActions":["jump up and down until all the marbles fall out","dance, dance, dance, and never stop","put their money where their mouth is","flip the script","be more careful with dad's bank account","wave their hands in the air like the just don't care","hurry and rush to the bathroom","just please go get a job","get off my lawn","pair up, and really make some thing special","jump in a blender and make a soup","throw a bag of puppies in the river","call grandma a liar","swoop in and get them eggs","turn the tables","spank my little bum-bum","snort some rails","comfort a stranger","wash hands without soap","complain to customer service","get featured in a Broadway musical","make me a sandwich","have dinner with my parents","explore the abandoned mine shaft on the edge of town","make a mixtape","travel the world","ride in a hot air balloon","DJ at weddings","sing karaoke","kiss a horse on the lips","play baseball with your dad","get something going","throw a fancy party",""],
        "ChartTypes":["line-up.svg","line-down.svg","pie.svg","pie2.svg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "ChartMeasures":["My Angst","Happiness","Cholesterol","Freed Refugees","Morning Woods","Mucus","Old Ladies Helped","Whales Slaughtered","My Waistline","Jobs for Millenials","My Relevance","Time","Years","Minutes","Softness","Saturation","Mental State","Horse Corpses (or, \"Horpses\")","Vacation Days Taken","Kidnappings","Sweet Satisfaction","Balls","Deaths","Racism","Bullies","Unique Odors","Douchebags","Locusts","Unpaid Internships","Police Academy Sequels","Spider-Man Reboots","Sensitive Information Leaked","Sin",""],
        "Pros":["Cost effective","Aid in digestion","Can be sexy","Aphrodesiac","Appetite suppressant","Earns trust","Attracts friends","Good flame retardent","Cuter than a kitten","Can help you be an instagram influencer","Gotten me out of more than one tight spot","Libido alert!","Lead to spiritual epiphanies","Can give you street cred","Valid form of birth control","Biodegradable","Just feels good, man","Lead to grocery discounts","Newsletter option available","Matching T-shirt available","No dongle required","Improves luck","You learn something new every day","Size increasese with time","Sauce!","Thick and juicy","Can't stop thinking about Cher","True love comes a-knockin'","I get a 15% cut of all proceeds","No one will ever find out what I've really done","Your worst secrets are safe","Painless after the first 5 seconds of intense pain","I finally know what love is",""],
        "Cons":["Lead to addiction","Cause weight gain","Expensive","Lower your social standing","Can cause bloating","May lead to instant fame","Can test positive for diahrea","May cause the Lord to smite you","Crips are not cool with them, yo","Bloods are not cool with them, yo","Millenials are allergic to them","Instant babby!","Make the Mormons show up","Causes rash","Anal leakage","Death","Phone calls from the neighbors","Not Biodegradable","Loud","Snakes","Last time, someone died","Nausea","Requires annual upgrades","Involes dark magic","Uh oh, the boss is mad!","Won't ship on weekends","E.D.","Mouth sores","Locusts","Halitosis","We all die alone","I'm still lonely","Can't stop thinking about Cher",""],
        "PointHeaders":["Some reasons to think about ___","I'll tell you what I think about ___","I happen to have a lot in common with ___","We need to address the problem of ___","Why you should invest in ___","Anyone here single? Why it might be good to date ___...","Things mom said about ___","Why ___ will be the next big thing","Why my mother prefers ___","The story of how ___ changed my life","Why ___ make great pets","Reasons to avoid ___","Here's why ___ will benefit society","Extra! Extra! Read all about ___!","Sip these hot cups of ___:","True or false? When dealing with ___...","","","","","","","","","","","","","","","","","",""],
        "Points":["I once found them in my bathroom","I like to present them to my grandma","They make for delicious appetizers","We should organize a trip to take some to the zoo!","It would be fun to get matching tattoos","Don't get me STARTED","Imagine being stuck in a closet with them and Tom Cruise","They are my guilty pleasure","Throw in the crockpot, add a dash of salt and... muah!","Kim Jong Un is a huge fan, too","I think they are planning a coup d'état","There goes the neighborhood","The farmers get unhappy","Affects the global economy","The shorter, the better","So thick and juicy","May cause muscle spasms","I just want to play with them","Currently being adapted into a major motion picture","Good for the environment","Bad for large sea mammals","Go ahead and guess what (wink)","I talk to them all the time","My mom is a huge fan","Featured in popular songs","Lots of buzz from Hollywood about this","Two whole chapters of my autobiography","Bulbous","","","","","",""],
        "DemonstrationsLeft":["Now let that sink in. I'm hopping on one leg","I'm going to try some giraffe calls now","I'll lead us in a moment of silence","Time to feign incontinence","Lemme tell you how my grandpop got me interested in this","Here's the traumatic event that lead me to talk about this","Look at me! I'm dancing","Allow me to imitate a baseball player","Break time! Everyone dance","Now I will sing a song about this","Here's me walking on hot coals","Let me cavort across the room like a distinguished gentleman","Volunteer please! I'm going to show you all a karate move","Now is the time for me to compliment each person in the room","Time for high fives","I must look at the ground for 5 seconds","I gotta just lay down for a few seconds","Time to shimmy","Here's my sexy walk","I have to give each of your tummies a pat","","","","","","","","","","","","","",""],
        "DemonstrationsRight":[", and have a serious face.",", while power queefing.",", and closing my eyes really tight.",", while I look on the ground for my keys.",", while doing squats.",", while I make intense eye contact.","! Why don't you join me?",", while faking an injury.",", while chest/fist bumping everyone!",", while someone physically tries to stop me!",", while shreiking like a donkey.",", while holding this sh#$-faced grin.",", while doing my best at the jump splits.",", while I scrunch up my face like this",", you can't resist watching.",", I know this is what you want.",", and will someone please hold my hand?",", I'll explain how this is related.",", I'll tell you how this relates to my topic.","","","","","","","","","","","","","","",""],
        "Conclusions":["So, are you all on board or what!?","Who's with me!!!?","And that's what I think about ___.","I hope you all have a better understanding of ___.","Now who's going to give me all their money?","And that's why ___ are going to lead us to the promised land.","And that's why we should enlist ___ to help us stop the next genocide.","But don't take my word for it, try ___ for yourself.","Please consider donating to the ___ foundation.","In conclusion, here's the biggest takeaway on ___.","If you can only remember one thing about ___, it should be this.","Have I convinced you to change your mind about ___?","On your way out, please fill out the ___ survey. Thank you.","Don't let the ___ hit you on backside on your way out.","The End. Now who can give me a ride to the airport?","We'll conclude with a hand gesture I created to represent ___.","Don't clap for me, clap for ___. Thank you.","I'll end with this quote from my favorite author about ___. Here it is.","I'll conclude with this quote from my father from when he taught me about ___. It went like this.","","","","","","","","","","","","","","",""],
        "Lists":["Here's a list of ___ things you need when dealing with ---.","The top ___ essentials for --- are...","Let me rattle off the ___ reasons for why you should support ---.","Here are the ___ D's of ---.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Acronyms":["Remember this handy acronym: ___.","___ Is an acronym that means...","Keep this acronym handy when introducing your loved ones to ---: ___","___: A helpful acronym for ---.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "MusicStyles":["rap","country song","rock ballad","heavy metal song","blues classic","poem","Gregorian chant","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "MusicThings":["Here's a little ___ about ---.","You all know this ___ about ---, but let me just refresh your memories:","I was up all night writing this ___ about ---, here it is.","I spent six years composing this ___ about ---, I hope you enjoy it.","And now for my ___ about ---.","If you like ---, then you'll love this ___.","Here's a little ___, titled \"Stuck in prison, thinkin' about my ---\"","Let's sing that chantey we all know, \"I went out to see to find my ___\"","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "LogosLeft":["Mystery","Musical","Sweaty","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "LogosRight":["Chili Pepper","Lion","Froggy","Pachydermal","Sheep","Shark","Magic","Tortoise","Bovine","Church","Eagle","Poor Bastard","Business Systemzzz","Sassy Lady","Handshakes","","","","","","","","","","","","","","","","","","",""],
        "LogosServices":["Computers","Speech Co.","Corporate Training","Inc.","Burgers","Plumbing","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
     },
     CleanSlideData: () => {
        for (var key in GameSettings.SlideData) {
            if (GameSettings.SlideData.hasOwnProperty(key)) {
              GameSettings.SlideData[key] = GameSettings.SlideData[key].filter((item) => {
                return item !== "" && item.indexOf('*') === -1;
              })
            }
          }
     },
    RandomizeTeamNames: () => {
        GameSettings.Team1NameLeft = GameSettings.SlideData.LogosLeft[Math.floor(Math.random() * GameSettings.SlideData.LogosLeft.length)];
        GameSettings.Team1NameRight = GameSettings.SlideData.LogosRight[Math.floor(Math.random() * GameSettings.SlideData.LogosRight.length)];
        GameSettings.RemoveSlideDataItem(GameSettings.Team1NameLeft, "LogosLeft");
        GameSettings.RemoveSlideDataItem(GameSettings.Team1NameRight, "LogosRight");
        GameSettings.Team2NameLeft = GameSettings.SlideData.LogosLeft[Math.floor(Math.random() * GameSettings.SlideData.LogosLeft.length)];
        GameSettings.Team2NameRight = GameSettings.SlideData.LogosRight[Math.floor(Math.random() * GameSettings.SlideData.LogosRight.length)];
        const team1Service = GameSettings.SlideData.LogosServices[Math.floor(Math.random() * GameSettings.SlideData.LogosServices.length)];
        const team2Service = GameSettings.SlideData.LogosServices[Math.floor(Math.random() * GameSettings.SlideData.LogosServices.length)];
        GameSettings.Team1Name = `${GameSettings.Team1NameLeft} ${GameSettings.Team1NameRight} ${team1Service}`;
        GameSettings.Team2Name = `${GameSettings.Team2NameLeft} ${GameSettings.Team2NameRight} ${team2Service}`;
    },
    SetupGame: () => {
        GameSettings.Team1Turn = true;
        GameSettings.RandomizeTeamNames();
        GameSettings.Presentation = 1;
    },
    SetupBattleModeGame: () => {
        GameSettings.SetupGame();
        setGameMode(GAME_MODE_BATTLE);
    },
    SetupPartyModeGame: () => {
        GameSettings.SetupGame();
        setGameMode(GAME_MODE_PARTY);
    },
    NextPresentation: () => {
        GameSettings.Team1Turn = !GameSettings.Team1Turn;
        GameSettings.Presentation++;
    },
    GetRound: () => {
        return Math.ceil(GameSettings.Presentation / 2);
    },
    RemoveSlideDataItem: (item, obj) => {
        if(Array.isArray(item)) {
            GameSettings.SlideData[obj] = GameSettings.SlideData[obj].filter((value) => {
                return !item.includes(value);
            })
        } else {
            GameSettings.SlideData[obj] = GameSettings.SlideData[obj].filter((value) => {
                return value !== item;
            })
        }
        
    },
};
