// Je déclare que ma fonction start et initialize doivent être appelés après le chargement du DOM.
document.addEventListener("DOMContentLoaded", () => {
  initialize();
  start();
});

// Ici j'attache des fonctions à mes liens de changement de langue.
function initialize() {
  let links = document.querySelectorAll('.langues a');
  for (let link of links) {
    link.addEventListener("click", function(){
      let langue = link.innerText;
      console.log('le lien %s a été cliqué', langue);
      setLanguage(langue);
    });
  }
}

/// Ma fonction start appelée au chargement de la page, et rappelée lors du changement de langue.
function start() {
  load('personnages');
}

/// Ici on charge les données json, puis on appelle la fonction pour remplacer le contenu.
function load(personage) {
  // j'utilise la fonction fetch plus simple que xmlhttprequest.
  fetch('/' + personage + '.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let contenu = document.getElementById('contenu');
    
    replace(contenu, 'fiche-perso', data);
  })
} 

/// Remplace le contenu d'un élément par le template templateId en utilisant les données data.
function replace(element, templateId, data) {
  
  // le template
  let template = getTemplate(templateId);
  console.assert(template, 'template %s introuvable', templateId);
  
  // la langue est inscrite dans les données pour Mustache.
  for (let perso in data) {
    data[perso].name = data[perso].name[langue]
    data[perso].titre = data[perso].titre[langue]
    data[perso].titre2 = data[perso].titre2[langue]
    data[perso].info1 = data[perso].info1[langue]
    data[perso].info2 = data[perso].info2[langue]
    data[perso].audio = data[perso].audio[langue]
    data[perso].image = data[perso].image[langue]
    data[perso].chemin = data[perso].chemin[langue]
    data[perso].carte = data[perso].carte[langue]
    data[perso].icone = data[perso].icone[langue]
    data[perso].date = data[perso].date[langue]
    data[perso].intitulelecteur = data[perso].intitulelecteur[langue]
    data[perso].bouton = data[perso].bouton[langue]
    data[perso].img1 = data[perso].img1[langue]
    data[perso].imgicone1 = data[perso].imgicone1[langue]
    data[perso].img2 = data[perso].img2[langue]
    data[perso].imgicone2 = data[perso].imgicone2[langue]
    data[perso].img3 = data[perso].img3[langue]
    data[perso].imgicone3 = data[perso].imgicone3[langue]
    data[perso].img4 = data[perso].img4[langue]
    data[perso].imgicone4 = data[perso].imgicone4[langue]
    data[perso].description = data[perso].description[langue]
  }

  // Je demande à mustache de faire du html à partir du template et des données.
  let rendered = Mustache.render(template, data);
  
  // Hop je met le html de mustache dans l'élément.
  element.innerHTML = rendered;
}

/// Le contenu du gabarit par id.
function getTemplate(id) {
  return document.getElementById(id).innerText;
}

/// la langue par défaut
var langue = 'fr'; 

/// la fonction pour changer la langue.
function setLanguage(lang) {
  langue = lang;
  start();
}

// lecteur d'images
var bauto = 0;
var a = 0;
var numero = 1;

function objet() {
  this.length = objet.arguments.length
  for (var i = 0; i < this.length; i++) {
    this[i+1] = objet.arguments[i];
  }
}
var nom = new objet ();

function suivante() {
  document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG04b_ILL01b.png";
  document.image.width = "200";
  document.image.height = "400";
}
function suivante2() {
  document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG05b_ILL02b_FR.png";
  document.image.width = "250";
  document.image.height = "400";
}
function suivante3() {
  document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG06b_ILL03b_FR.png";
  document.image.width = "250";
  document.image.height = "400";
}
function suivante4() {
  document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG07b_ILL04b_FR.png";
  document.image.width = "300";
  document.image.height = "130";            
}

// pop-up pour agrandir la carte
function PopupImage(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=310, height=310');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='"+img+"' width='300' height='300'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}

