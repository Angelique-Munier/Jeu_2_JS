var i =0 ;
var tableau = [];
document.getElementById("envoyer-1").addEventListener("click", function(){
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click", function(){
        //test si le i est bien inferieur a la taille du tableau on recupere le chiffre et le met dans le tableau
        if(i<taille){
            var chiffre = document.getElementById("tab").value;
            tableau.push(chiffre);
            i++;
        }else{
            //on bien parcouru tout notre tableau et maintenant on affiche la moyenne car on aura acces a tout notre tableau
            console.log(tableau);
            document.getElementById("envoyer-2").value = "Generate!";
            document.getElementById("envoyer-2").addEventListener("mouseover", function(){
                                                document.getElementById("moyenne").textContent = moyenne(tableau);
                                                document.getElementById("variance").textContent = variance(tableau);
                                                document.getElementById("ecart-type").textContent = ecarType(tableau);
            });
        }
    });
});

document.getElementById("reset-1").addEventListener("click", function(){
   //reset la page
    document.location.reload(true); 
});
document.getElementById("reset-2").addEventListener("click", function(){
   document.location.reload;
    document.location.reload(true); 
    
});

function moyenne(tableau){
    var sum =0;
    var calcul =0;
    for (var i=0;i<tableau.length;i++){
        //converti string en int
        sum+=parseInt(tableau[i]);
        
    }
    // sum sera converti en int
    calcul = sum / tableau.length;
    return calcul;
}

function variance(tableau){
    var moy = moyenne(tableau);
    var sum =0;
    varia =0;
    for (var i=0;i<tableau.length;i++){
        sum += (parseInt(tableau[i]) - moy) * (parseInt(tableau[i]) - moy);
    }
    varia = sum / tableau.length;
    return varia;
}

function ecarType(tableau){
    var a = variance(tableau);
    //racine de la variance
    return Math.sqrt(a);
}