function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cfyVAhP86b":
        Script1();
        break;
      case "5XNTTqRqWaT":
        Script2();
        break;
      case "5W2jD1NOxEu":
        Script3();
        break;
      case "67p2H1ze9ck":
        Script4();
        break;
      case "5yrIvCzQ1oy":
        Script5();
        break;
      case "6rYzoCHGBgB":
        Script6();
        break;
      case "5drP3fCABb3":
        Script7();
        break;
      case "5leVs5W56JC":
        Script8();
        break;
      case "6cvI8xc58Ir":
        Script9();
        break;
      case "657FVLEoSDk":
        Script10();
        break;
      case "6VbySMaA0Sq":
        Script11();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongLevel');
audio.pause();

var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSongLevel');
audio.pause();

var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSongLevel');
audio.pause();

var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSongLevel');
audio.pause();

var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audio.play();
}

function Script5()
{
  var audio = document.getElementById('bgSongLevel');
audio.pause();

var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audio.play();
}

function Script6()
{
  //load the scripts dynamically into the head of the document

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSongLevel" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSongLevel')==null){
	add_line();
var audiolevel = document.getElementById('bgSongLevel');
audiolevel.volume = 0.5;
}

}

function Script7()
{
  var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/African_fun_long.mp3";
audiolevel.load();
audiolevel.play();
}

function Script8()
{
  var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/Sakura-Girl-Motivation-chosic.com_.mp3";
audiolevel.load();
audiolevel.play();
}

function Script9()
{
  var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/Loyalty_Freak_Music_-_01_-_Go_to_the_Picnicchosic.com_(chosic.com).mp3";
audiolevel.load();
audiolevel.play();
}

function Script10()
{
  var audiolevel = document.getElementById('bgSongLevel');
audiolevel.src="story_content/external_files/game-music-loop-7-145285.mp3";
audiolevel.load();
audiolevel.play();
}

function Script11()
{
  var audiolevel = document.getElementById('bgSongLevel');
audiolevel.load();
audiolevel.pause();
}

