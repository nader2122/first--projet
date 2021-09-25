var prixUni= document.querySelector('.prix-uni');
var btPlus=document.querySelector('.plus');
var btMoins= document.querySelector('.moins');
var nb = document.querySelector('.nb-article');
var total=document.querySelector('.somme');
var listAchat = document.querySelector('.list-achat');



//element table

var nbArt=document.querySelector('.nb-art');
var nbSomme=document.querySelector('.somme-art');

var facture=document.querySelector('.facture');



 cpt=parseInt(nb.innerText);
 
 prix= parseInt(prixUni.innerText);

btPlus.addEventListener('click',function() {
    
    cpt=cpt+1;

    nb.innerHTML=cpt;
    total.innerHTML=prix * cpt;


    nbArt.innerHTML=cpt;
    nbSomme.innerHTML=prix * cpt;
facture.innerHTML= prix*cpt + prixe*compt
    
    
});

btMoins.addEventListener('click',function() {
    
    if (cpt > 0) {
        cpt=cpt-1;
        nb.innerHTML=cpt;
        nbArt.innerHTML=cpt;
    }else{
        nb.innerHTML=0;
        nbArt.innerHTML=0;
    }

    total.innerHTML=prix * cpt;

    nbSomme.innerHTML=prix * cpt;
  
    facture.innerHTML= prix*cpt + prixe*compt

}); 



// deuxsieme card:

var prixUnie= document.querySelector('.prix-unie');
var btPluse=document.querySelector('.pluse');
var btMoinse= document.querySelector('.moinse');
var nbe = document.querySelector('.nb-articlee');
var totale=document.querySelector('.sommee');


// element table
var nbeArt=document.querySelector('.nbe-art');
var sommeeArt=document.querySelector('.sommee-art');


 compt= parseInt(nbe.innerText);
 prixe=parseFloat(prixUnie.innerText);
 
 
 btPluse.addEventListener('click',function () {
     
    compt=compt+1;
    nbe.innerHTML = compt;
    nbeArt.innerHTML=compt;
    totale.innerHTML=prixe*compt;
    sommeeArt.innerHTML=prixe*compt;
    facture.innerHTML= prix*cpt + prixe*compt;
 });

 btMoinse.addEventListener('click',function () {
    if (compt > 0) {
        compt=compt-1;
        nbe.innerHTML=compt;
        nbeArt.innerHTML=compt;
    }else{
        nb.innerHTML=0;
        nbArt.innerHTML=0;
    }
    totale.innerHTML=prixe*compt;
    sommeeArt.innerHTML=prixe*compt;
    facture.innerHTML= prix*cpt + prixe*compt;
 })

 var printe=document.getElementById("print");
var navs=document.getElementById('navs');
var foot=document.getElementById('foot');

printe.addEventListener("click",function (e) {
    
navs.style.visibility='collapse';
foot.style.visibility='collapse';

    window.print();
navs.style.visibility='visible';
foot.style.visibility='visible';
    
    
})
 
var lik =document.getElementById('lik');
var des=document.getElementById('des');
function likes() {
    if (lik.classList.contains('far')&&(des.classList.contains('far'))) {
        lik.classList.remove('far','fa-flash');
        des.classList.add('fas')
        lik.classList.add('fas')
        des.classList.remove('fas','fa-flash')
        
    }else{
        lik.classList.remove('fas','fa-flash');
        des.classList.add('far')
        lik.classList.add('far')
        des.classList.add('fas')
    }
}
var like =document.getElementById('like');
var dese=document.getElementById('dese');
function likez() {
    if (like.classList.contains('far')&&(dese.classList.contains('far'))) {
        like.classList.remove('far','fa-flash');
        dese.classList.add('fas')
        like.classList.add('fas')
        dese.classList.remove('fas','fa-flash')
    }else{
        like.classList.remove('fas','fa-flash');
        dese.classList.add('far')
        like.classList.add('far')
        dese.classList.add('fas')
    }
}