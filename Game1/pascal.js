var bool =true;
document.getElementById("valider").addEventListener("click", function(){
    if(bool==true){ //si on rentre ici on a appuyer sur valider au moins une 
        var taille = document.getElementById("infos").value;
    afficherTriangle(TrianglePascal(taille));
    bool=false;
    }
   
});

document.getElementById("valider-1").addEventListener("click", function(){
    if(bool==true){
        var numero = document.getElementById("stern").value;
    afficherStern(Stern(numero));
        bool=false;
    }
    
});

document.getElementById("retry").addEventListener("click", function(){
   //reset la page
    document.location.reload(true); 
});

document.getElementById("retry-1").addEventListener("click", function(){
   //reset la page
    document.location.reload(true); 
});

function TrianglePascal(taille){
    var tab = new Array(); //tab = [];
    for (var n=0;n<taille;n++){//parcourt le nombre de lignes 
        tab[n] = new Array();
        for (var p=0;p<n+1;p++){
            if(p==0 || p==n){
                tab[n][p] = 1;
            }else{
                tab[n][p] = tab[n-1][p] + tab[n-1][p-1];
            }
        }
    }
    return tab;
}



function afficherTriangle(tab){
    for (var i=0;i<tab.length;i++){
        for (var j=0;j<tab[i].length;j++){
            document.getElementById("res").innerHTML += tab[i][j] + " ";
        }
        document.getElementById("res").innerHTML += "<br>";
    }
}

function Stern(numero){
    var tab1 = TrianglePascal(numero+100);
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    //tab2 = [1,1,2,1]
    for (var i=4;i<numero;i++){
        var sum = 0;
        var newval = Math.trunc(i/2); //renvoi la valeur entiere
        for (var j=0;j<newval +1;j++){
            sum+= tab1[i-j][j]%2;
        }
        tab2.push(sum);
    }
    return tab2;
}

function afficherStern(tab){
    for (var i=0;i<tab.length;i++){
        var u = i+1;
        document.getElementById("stern-res").innerHTML += "s" +u+ "=" + " "+ tab[i] + " ";
    }
    
}

























