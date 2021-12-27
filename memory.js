//https://www.youtube.com/watch?v=QxnVao2qTwI

const divGame = document.querySelector("#game");
const divResultat = document.querySelector("#resultat");
var oldSelection = [];
var nbAffiche=0;
var ready = true;

var links = new Map();
setLinks();

var choixTaille=1;
switch (choixTaille)
{
case 1:
    //16 cartes, 8 dessins différents
    var tabJeu = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    break;
case 2:
        //30 cartes, 15 dessins différents
    var tabJeu = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];
    break;
case 3:
            //42 cartes, 21 dessins différents

    var tabJeu = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        
    ];
    break;
default: 
var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];
}


/*var tabResultat = [
    [2,1,1,2],
    [4,4,5,7],
    [5,3,6,8],
    [6,8,7,3],
];*/
var compteurDeCoups=0;


var tabResultat = genereTableauAleatoire(choixTaille);

afficherTableau();

function afficherTableau(){
    var txt="";
    for(var i=0; i < tabJeu.length ; i++)
    {
        txt += "<div>";

        for (var j=0; j < tabJeu[i].length ; j++)

        {

            if (tabJeu[i][j] === 0)
            {
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verif(\""+i+"-"+j+"\")' >Afficher</button>";

            }
            else
            {
                txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>";
            }

        }
        txt += "</div>";
    } 
    divGame.innerHTML=txt;
}

 function getImage(valeur)
{
    var imgTxt  ="";
    imgTxt+=links.get(valeur);
    
    return imgTxt;
}
    function verif(bouton)
    {
        var txt="";
        if (ready)
        {
        nbAffiche++;
        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2,1);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();

        if (nbAffiche>1)
        {
            ready = false;
            setTimeout(() => 
            {

                if(tabJeu[ligne][colonne] != tabResultat[oldSelection[0]][oldSelection[1]])
                {
                    tabJeu[ligne][colonne]=0; 
                    tabJeu[oldSelection[0]][oldSelection[1]]=0; 
                }
                else
                {}
                afficherTableau();
                ready=true;
                nbAffiche=0;

            },1000);

            compteurDeCoups++;
            if (ifOnGoing()==false)
            {
                txt += "<div> <h2> Bravo vous avez réussi en "+compteurDeCoups+" coups! </h2> </div>";
                divResultat.innerHTML=txt;
            }

        }
        else
        {oldSelection=[ligne,colonne];}
        }      
    }

    function genereTableauAleatoire(choixTaille)
    {
        var tab = [];
        switch (choixTaille)
        {
            case 1: var nbImagePosition=[0,0,0,0,0,0,0,0];

                break;
            case 2: var nbImagePosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                break;
            case 3: var nbImagePosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                break;
            default: var nbImagePosition=[0,0,0,0,0,0,0,0];

        }


        for(var i=0 ; i<4 ; i++)
        {
            var ligne = [];

            for (var j=0 ;  j < 4 ; j++)
            {
                var fin = false;
                while (!fin)
                {                
                var randomImage = getRndInteger(0,9);
               

                if (nbImagePosition[randomImage] < 2 )
                {
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin=true;
                }
                }               
            }
            tab.push(ligne);
        }
        return tab;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

      function ifOnGoing()

      {
          var onGoing=false;
          for(var i=0 ; i < 4 ; i++)
        {
            for (var j=0 ;  j < 4 ; j++)
            {
                if (tabJeu[i][j]==0)
                { onGoing=true;
                     break;}
            }
        }
        console.log("ongoing est "+onGoing);
        return onGoing;

      }

function setLinks()
{
    links.set(1,"https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg");
    links.set(2,"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg");
    links.set(3,"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg");
    links.set(4,"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg");
    links.set(5,"https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true");
    links.set(6,"https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg");
    links.set(7,"https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=");
    links.set(8,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyotXaBF8Nf5YH5jB4ilXNcn2yN0-6iGfOw&usqp=CAU");



            /*case 1 : imgTxt += "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg";
        break;
        case 2 :imgTxt += "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
        break;
        case 3 :imgTxt += "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";
        break;
        case 4 :imgTxt += "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg";
        break;
        case 5 :imgTxt += "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg";
        break;
        case 6 :imgTxt += "https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg";
        break;
        case 7 :imgTxt += "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true";
        break;
        case 8 :imgTxt += "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyotXaBF8Nf5YH5jB4ilXNcn2yN0-6iGfOw&usqp=CAU";
        break;
        default : console.log("cas non pris en compte");*/
    
}