console.log("I'm 'The BOcT' v1.2.3, created by @The-UCS-Variable");
window.onload = setTimeout(stopLoading, 2713);
/*------------------------------------------------------------------------------*/
function stopLoading() {
  document.getElementById("loader").style.display="none";
}

//scroll to bottom after a new message
function scroll_update() {
  const chat_scroll = document.getElementById("chatspace");
  chat_scroll.scrollTop = chat_scroll.scrollHeight;
}


var click_count = 0;
const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);

function BOcT_open() {
  document.getElementById("content-div-bot").style.margin="10px auto 20px";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}

function talk_div_boct(talkContent) {
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(talkContent);
  attr.value = "boct_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
}



talk_div_boct("Hoi, What's your name? \nDon't type nothing");


const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);

function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  const chat_content = chat_boxx.value;
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(chat_content);
  attr.value = "human_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);

  scroll_update();
  chat_boxx.value = "";
  var chat_contenta = chat_content.trim().toLowerCase();
  setTimeout(proto_boct_study_chat, 800, chat_contenta);
}
//proto above


function BOcT_annoy_clicks() {
   click_count += 1;
   if (click_count === 10) {
     click_count = 0;
     talk_div_boct("Stop annoying me!");
   }
}

/* PROTOTYPING or TESTING ARENA -------------------------*/
const readage = {
  words: ['age','how long','what is your age'],
  reply: function() {
    var birthdate = new Date(2020, 4, 5, 17, 43, 0, 0);
    var Difference_In_Time = Date.now() - birthdate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    talk_div_boct(`I was created approx ${Difference_In_Days} days ago`);
  }
}
const readempty = {
  words: [''],
  reply: function() {
    talk_div_boct('Oh! Come on. Reply Something Sensible');
  }
}
const readannoy = {
  words: ['annoy me','idiot'],
  reply: function() {
    for (let i = 0; i < 10; i++) {
      talk_div_boct("You're a IDIOT"); }
  }
}

const readables = [readage , readempty , readannoy];

function proto_boct_study_chat(studycontent) {
  for(let i = 0; i < readables.length; i++) {
    for (let j = 0; j < readables[i].words.length; j++) {
      if(studycontent === readables[i].words[j]){
        readables[i].reply();
      }
    }
  }
}





/*


function boct_study_chat(studycontent) {
  if (studycontent === "annoy me") {
    for (var i = 0; i < 20; i++) {
      talk_div_boct("You're a IDIOT");
    }
  }
  if(studycontent != null) {var letters = studycontent.length; }
  let notnum = isNaN(studycontent);


   else if (studycontent === 'no') { talk_div_boct('You are basically NOTHING!!!'); }
   else if (letters < 4) { talk_div_boct(`I dont believe your name is ${studycontent}`); }
   else if (studycontent.indexOf('name') !== -1 ) { talk_div_boct('My name is BOcT'); }
   else if (notnum === true) { talk_div_boct(`So ${studycontent}, You will have a Bright Future`); }
}


if (notnum === false) { talk_div_boct('Type a name, YOU FOOL'); }

else if (studycontent === "age") {
  var birthdate = new Date("05/06/2020");
  var Difference_In_Time = Date.now() - birthdate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  talk_div_boct("Approx, " + Difference_In_Days + " days");
}



const read_google = {
  words: ['google '],
  reply: function() {

  }
}


*/