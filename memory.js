//https://www.youtube.com/watch?v=QxnVao2qTwI
var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=917e53ab462e15208d6f96b2cbacfb10&tags=cat&format=json&nojsoncallback=1&api_sig=e233fc4a0cfad30b2f3302a1c9fbb3e0";
const divGame = document.querySelector("#game");
const divResultat = document.querySelector("#resultat");
var oldSelection = [];
var nbAffiche=0;
var ready = true;
var nbPaire;
var nbPLigne;
var nbPColonne;

//On recupere les parametres entrés lors du choix
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const tag = urlParams.get('tag');
const choixTaille = parseInt(urlParams.get('taille'),10);


var links = new Map();


//var choixTaille=3;
var tabJeu=jeuBonneTaille(choixTaille);
setLinks(tag);



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
                txt += "<button class='btn btn-primary m-2' style='width:130px;height:100px' onClick='verif(\""+i+"-"+j+"\")' >Afficher</button>";

            }
            else
            {
                txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:130px;height:100px' class='m-2'>";
            }

        }
        txt += "</div>";
    } 
    divGame.innerHTML=txt;
}

function setLinks(tag)
{
    $(document).ready(function(){

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: tag,
        tagmode: "any",
        format: "json"
    },
    function(data) {           

        for (let i = 0; i < data.items.length; i++)
        {
            var image_src = data.items[i]['media']['m'].replace("_m", "_b");
            links.set(i,image_src);
    
        }

    });

});

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

            else
            {
                txt += "<div> <h2> Compteur de coups:  "+compteurDeCoups+" : </h2> </div>";
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
            case 3: var nbImagePosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                break;
            default: var nbImagePosition=[0,0,0,0,0,0,0,0];

        }


        for(var i=0 ; i<nbPColonne ; i++)
        {
            var ligne = [];

            for (var j=0 ;  j <  nbPLigne   ; j++)
            {
                var fin = false;
                while (!fin)
                {                
                var randomImage = getRndInteger(0,20);
               

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
          for(var i=0 ; i < nbPColonne ; i++)
        {
            for (var j=0 ;  j < nbPLigne ; j++)
            {
                if (tabJeu[i][j]==0)
                { onGoing=true;
                     break;}
            }
        }
        console.log("ongoing est "+onGoing);
        return onGoing;

      }
      function jeuBonneTaille(taille){
    
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
            nbPaire=8;
            nbPLigne=4;
            nbPColonne=4;
            
            
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
            nbPaire=15;
            nbPLigne=6;
            nbPColonne=5;
            break;
        case 3:
                    //42 cartes, 21 dessins différents
        
            var tabJeu = [
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                
            ];
            nbPaire=20;
            nbPLigne=8;
            nbPColonne=5;
            break;
        default: 
        var tabJeu = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ];
        nbPaire=8;
        nbPLigne=4;
        nbPColonne=4;
        }
        return tabJeu;
        }


/*function setLinks(tag)
{
    for (let i = 1; i < 20; i++)
    {
        links.set(i,getPictureUrl(tag,i));

    }
    links.set(1,"https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg");
    links.set(2,"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg");
    links.set(3,"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg");
    links.set(4,"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg");
    links.set(5,"https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true");
    links.set(6,"https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg");
    links.set(7,"https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=");
    links.set(8,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyotXaBF8Nf5YH5jB4ilXNcn2yN0-6iGfOw&usqp=CAU");



    
}*/