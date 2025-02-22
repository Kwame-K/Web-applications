$(document).ready(function(){



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

      $("#laConnection").text("Deconnection");
    //  window.location.href = "index.html";


    }
    else {
      alert("Veulliez ressaisir le mot de passe");
    }

  $("#laConnection").text("Deconnection");
  });







  $("#btn_login").click(function(){


          var tada={
            "email": "hdhdhd.com",
            "password": "dede"
    };
          console.log(tada);
          //var opo = JSON.parse(tada);
          var loe = JSON.stringify(tada);
          console.log(loe);

            var req= new XMLHttpRequest();
            req.open("POST", "https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/addUser", true);
            req.setRequestHeader("Content-type", "application/json");
            req.setRequestHeader("Accept","*/*");
             req.send(loe);
            req.onload= function(){
              data= req.responseText;
              console.log(data);
              var user = JSON.parse(data);

            };
          // req.send({"email":"grgrgrg","password":"trhrth"});
          console.log("45454");










    var inputE = document.getElementById("inputEmail").value;
    var inputP = document.getElementById("inputPassword").value;
    var req= new XMLHttpRequest();
    req.open('GET','https://cors-anywhere.herokuapp.com/https://api-crowdagri.herokuapp.com/user');
    req.onload= function(){
      data= req.responseText;
      console.log(data);
      var user = JSON.parse(data);

    for (var i = 0; i < user.length; i++) {
      console.log((user[i].email).equals(inputE));


      if ((user[i].email).equals(inputE) && (user[i].password).equals(inputP)) {
        alert("Connected");
      }
    }
    };
   req.send();
    console.log(inputP+" "+inputE);
  });

























































































for (var i = 0; i < 1; i++) {
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




// load view image to be posted
 var loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

});
