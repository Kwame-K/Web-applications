$(document).ready(function(){


});




$(document).ready(function(){
var a =2;
  var myjam;
  /*
  var inputE = document.getElementById("inputEmail").value;
  var inputP = document.getElementById("inputPassword").value;
data={"email":""+inputE,"password":""+inputP};

$("#sign_up_btn").post('https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/user',data,function(data,status,xhr),dataType)

*/




/*
$.ajax({
       //L'URL de la requête
       url: 'https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/addUser',
       header:{
         "Content-Type": "application/json"
       },
       //La méthode d'envoi (type de requête)
       method: "POST",
       data :  {"email":"grgrgrg","password":"trhrth"},
       //Le format de réponse attendu
       dataType : "json",
   })


*/

$('p').click(function(){
$("laConnection").text("Deconnexion");
$("#budget").text(""+500000+ " F CFA");
$("#somme_r").text(""+156 +"F CFA");
$("#a1").text("SANDROPE");
$("#a2").text("Pedro");
$("#a3").text("93157684");
$("#a4").text("pedorsandrope@gmail.com");
$("#a5").text("Culture de Tomate");
$("#a6").text("500000 F CFA");

});











$("#ivestBTN").click(function(){

  var inputi = document.getElementById("montantInvest").value;
  var inputn = document.getElementById("numeroTel").value;
  window.location.href ='https://paygateglobal.com/v1/page?token=db5cdab5-1796-43e1-b17d-861f2c1a3224&amount='+inputi+'&identifier='+inputn+'&phone='+inputn+'&url=https://crowdagri-tg.netlify.app'


});





  $("#btn_signup").click(function(){
    var inputE = document.getElementById("inputEmail_signup").value;
    var inputP = document.getElementById("inputPassword_signup").value;
    var inputP1= document.getElementById("inputPassword_1").value;
    if (inputP==inputP1) {
      var user={
        "email": ""+inputE,
        "password": ""+inputP};
      //var opo = JSON.parse(tada);
      console.log(user);
      var data = JSON.stringify(user);
      var req= new XMLHttpRequest();
      req.open("POST", "https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/addUser", true);
      req.setRequestHeader("Content-type", "application/json");
      req.setRequestHeader("Accept","*/*");
      req.send(data);
      myjam=data;
window.location.href = "index.html";




    }
    else {
      alert("Veulliez ressaisir le mot de passe");
    }

  });


$("#Newagri").click(function(){

  var input1 = document.getElementById("inputFName").value;
  var input2 = document.getElementById("inputLName").value;
  var input3= document.getElementById("inputAdresse").value;
  var input4= document.getElementById("inputNumero").value;
  var agri={

    "nom": ""+input1,
    "prenom": ""+input2,
    "adresse": ""+input3,
    "email": "projetMIDA@gmail.com",
    "tel": ""+input4,
    "user_agri":null
};


var agri1=JSON.stringify(agri);
var req= new XMLHttpRequest();
req.open("POST", "https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/addAgriculteur", true);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader("Accept","*/*");
req.send(agri1);
console.log(agri1);

  window.location.href = "start_project - suite.html";



});


$("#finCamp").click(function(){

  var input1 = document.getElementById("FormIntitule").value;
  var input2 = document.getElementById("FormText").value;
  var input3= document.getElementById("FormTemps").value;
  var input4= document.getElementById("FormSomme").value;

  var camp = {
"agri":null,
"date_publication":null,
"intitule":""+input1,
"investisseur":null,
"photo_camp":"icone.jpg",
"somme_requise":""+input4,
"somme_util_cinq_Ans":124555,
"temps_production": ""+input3

}
var camp1=JSON.stringify(camp);
var req= new XMLHttpRequest();
req.open("POST", "https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/addCampagne", true);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader("Accept","*/*");
req.send(camp1);
console.log(camp1);
  window.location.href = "index.html";

});



















  $("#btn_login").click(function(){
    var input1 = document.getElementById("inputEmail").value;
    var input2 = document.getElementById("inputPassword").value;

    if (input1=="admin@admin") {
 window.location.href = "b2.html";
    }






  });









for (var i = 0; i < a; i++) {
  /*====Parent DIV (mainpost)========*/
  var div=document.createElement("DIV");
  div.className="mainpost";

  /* -------- adding div at the top ---------*/
  var parent=document.getElementsByClassName("allpost");
  parent[0].insertBefore(div, parent[0].childNodes[0]);
  console.log(""+parent);
   var hr=document.createElement("hr");
   parent[0].insertBefore(hr, parent[0].childNodes[1]);

  /*============ DIV card ===============*/
  var div1=document.createElement("DIV");
  div1.className="card";
  var img=document.createElement("img");
  img.src="https://www.touteleurope.eu/fileadmin/_TLEv3/agriculture/FEADER-680.jpg";
  div1.appendChild(img);
  div.appendChild(div1);

  /*============ DIV container ===============*/
  var div2=document.createElement("DIV");
  div2.className="container";
  var titre=document.createElement("h4");
  titre.className="my-2";
  var tt=document.createTextNode("Titre : ");
  var auteur=document.createElement("h5");
  var tt1=document.createTextNode("By ");
  titre.appendChild(tt);
  auteur.appendChild(tt1);
  div2.appendChild(titre);
  div2.appendChild(auteur);
  div1.appendChild(div2);


  /*---------- button Details ---------------*/
  var button=document.createElement("button");
  button.className="btn btn-default btn-block";
  var text=document.createTextNode("Details");
  button.appendChild(text);
  div1.appendChild(button);

}

a++;


// load view image to be posted
 var loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

});
