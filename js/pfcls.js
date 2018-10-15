/* La pierre brise les ciseaux ! */

var button1 = document.getElementsByTagName('p')[1];
var image1 = document.getElementsByTagName('img')[3];
var image2 = document.getElementsByTagName('img')[4];
var text1 = document.getElementsByTagName('h5')[0];

window.afficher1 = function(){
image1.style.display = (image1.style.display == "block") ? "none" : "block";
image2.style.display = (image2.style.display == "block") ? "none" : "block";
text1.style.display = (text1.style.display == "block") ? "none" : "block";
}

button1.onclick = afficher1;

/* La feuille recouvre la pierre ! */

var button2 = document.getElementsByTagName('p')[2];
var image3 = document.getElementsByTagName('img')[5];
var image4 = document.getElementsByTagName('img')[6];
var text2 = document.getElementsByTagName('h5')[1];

window.afficher2 = function(){
image3.style.display = (image3.style.display == "block") ? "none" : "block";
image4.style.display = (image4.style.display == "block") ? "none" : "block";
text2.style.display = (text2.style.display == "block") ? "none" : "block";
}

button2.onclick = afficher2;

/* Les ciseaux coupent le lézard ! */

var button3 = document.getElementsByTagName('p')[3];
var image5 = document.getElementsByTagName('img')[7];
var image6 = document.getElementsByTagName('img')[8];
var text3 = document.getElementsByTagName('h5')[2];

window.afficher3 = function(){
image5.style.display = (image5.style.display == "block") ? "none" : "block";
image6.style.display = (image6.style.display == "block") ? "none" : "block";
text3.style.display = (text3.style.display == "block") ? "none" : "block";
}

button3.onclick = afficher3;

/* Spock vaporise la pierre ! */

var button4 = document.getElementsByTagName('p')[4];
var image7 = document.getElementsByTagName('img')[9];
var image8 = document.getElementsByTagName('img')[10];
var text4 = document.getElementsByTagName('h5')[3];

window.afficher4 = function(){
image7.style.display = (image7.style.display == "block") ? "none" : "block";
image8.style.display = (image8.style.display == "block") ? "none" : "block";
text4.style.display = (text4.style.display == "block") ? "none" : "block";
}

button4.onclick = afficher4;

/* Le lézard mange la feuille ! */

var button5 = document.getElementsByTagName('p')[5];
var image9 = document.getElementsByTagName('img')[11];
var image10 = document.getElementsByTagName('img')[12];
var text5 = document.getElementsByTagName('h5')[4];

window.afficher5 = function(){
image9.style.display = (image9.style.display == "block") ? "none" : "block";
image10.style.display = (image10.style.display == "block") ? "none" : "block";
text5.style.display = (text5.style.display == "block") ? "none" : "block";
}

button5.onclick = afficher5;

/* Spock désintègre les ciseaux ! */

var button6 = document.getElementsByTagName('p')[6];
var image11 = document.getElementsByTagName('img')[13];
var image12 = document.getElementsByTagName('img')[14];
var text6 = document.getElementsByTagName('h5')[5];

window.afficher6 = function(){
image11.style.display = (image11.style.display == "block") ? "none" : "block";
image12.style.display = (image12.style.display == "block") ? "none" : "block";
text6.style.display = (text6.style.display == "block") ? "none" : "block";
}

button6.onclick = afficher6;

/* La pierre écrase le lézard ! */

var button7 = document.getElementsByTagName('p')[7];
var image13 = document.getElementsByTagName('img')[15];
var image14 = document.getElementsByTagName('img')[16];
var text7 = document.getElementsByTagName('h5')[6];

window.afficher7 = function(){
image13.style.display = (image13.style.display == "block") ? "none" : "block";
image14.style.display = (image14.style.display == "block") ? "none" : "block";
text7.style.display = (text7.style.display == "block") ? "none" : "block";
}

button7.onclick = afficher7;

/* La feuille réfute Spock ! */

var button8 = document.getElementsByTagName('p')[8];
var image15 = document.getElementsByTagName('img')[17];
var image16 = document.getElementsByTagName('img')[18];
var text8 = document.getElementsByTagName('h5')[7];

window.afficher8 = function(){
image15.style.display = (image15.style.display == "block") ? "none" : "block";
image16.style.display = (image16.style.display == "block") ? "none" : "block";
text8.style.display = (text8.style.display == "block") ? "none" : "block";
}

button8.onclick = afficher8;

/* Les ciseaux coupent la feuille ! */

var button9 = document.getElementsByTagName('p')[9];
var image17 = document.getElementsByTagName('img')[19];
var image18 = document.getElementsByTagName('img')[20];
var text9 = document.getElementsByTagName('h5')[8];

window.afficher9 = function(){
image17.style.display = (image17.style.display == "block") ? "none" : "block";
image18.style.display = (image18.style.display == "block") ? "none" : "block";
text9.style.display = (text9.style.display == "block") ? "none" : "block";
}

button9.onclick = afficher9;

/* Le lézard empoisone Spock ! */

var button10 = document.getElementsByTagName('p')[10];
var image19 = document.getElementsByTagName('img')[21];
var image20 = document.getElementsByTagName('img')[22];
var text10 = document.getElementsByTagName('h5')[9];

window.afficher10 = function(){
image19.style.display = (image19.style.display == "block") ? "none" : "block";
image20.style.display = (image20.style.display == "block") ? "none" : "block";
text10.style.display = (text10.style.display == "block") ? "none" : "block";
}

button10.onclick = afficher10;

/* En cas d’égalité... */

var button11 = document.getElementsByTagName('p')[11];
var image21 = document.getElementsByTagName('img')[23];
var image22 = document.getElementsByTagName('img')[24];
var text11 = document.getElementsByTagName('h5')[10];

window.afficher11 = function(){
image21.style.display = (image21.style.display == "block") ? "none" : "block";
image22.style.display = (image22.style.display == "block") ? "none" : "block";
text11.style.display = (text11.style.display == "block") ? "none" : "block";
}

button11.onclick = afficher11;
