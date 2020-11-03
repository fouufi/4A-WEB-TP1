var http = require('http'); //http contient ttes les fonctions et objets exportés par le module
var url = require('url'); //ajout du module url
var querystring = require('querystring'); //ajout du module querystring
var fs = require('fs');

var serveur = http.createServer(function(req, res) //Callback
{
    console.log(req.url); //Affichage de la requete
    var requete = url.parse(req.url); //Requete
    var chemin = requete.pathname; //Récupération du chemin de la requete
    var params = querystring.parse(requete.query); //Récupération des arguments de la requete
    res.writeHead(200, {"Content-type": "text/plain"});

    //TODO: Ignorer les parametres
    if(req.url == "/Fichiers/fichier1.txt")
    {        
        //Lecture du fichier
        fs.readFile(__dirname+"/"+chemin, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.end("Une erreur s'est produite. Veuillez vérifier votre requête !")
                return;
            }
            else
                res.end(data);
        })
    }
    else if(req.url == "/Fichiers/fichier2.txt")
    {
        //Lecture du fichier
        fs.readFile(__dirname+"/"+chemin, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            else
                res.end(data);
        })
    }
    else if(req.url == "/Fichiers/fichier3.txt")
    {
        //Lecture du fichier
        fs.readFile(__dirname+"/"+chemin, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            else
                res.end(data);
        })
    }
    else 
    {
        //Le fichier n'existe pas
        console.log("La page est introuvable");
        res.end("La page est introuvable");
    }
});

serveur.listen(8080);
console.log("Serveur en écoute sur le port 8080");