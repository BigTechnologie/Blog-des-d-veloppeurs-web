$(function () {
    // Début environnement jQuery
    var reussite = "<p>Test réussi, bravo c'est exercice est super...</p>";

    // TP20 Manipulations sur texte  - Zone jQuery
    $("#demo1").text("Hello World !").css({
        "font-size": "40px",
        "color": "red"
    }).append("***").after(reussite);

    $("#demo1+p").attr("title", "Un pargraphe généré avec jQuery");



    // Modifications sur texte
    $("#modif").click(function () {

        $(".intro").css({
            "font-size": "40px",
            "font-weight": "bold",
            "color": "red"
        });

        $("#pleine-page h1").css("color", "red");

        // modifications sur le bouton lui-même 
        $(this).text("Modification réussie !").css("background-color", "red");

    });


    // Afficher-masquer 2 boutons 
    $(".boite").hide();

    $(".afficher").click(function () {
        $(".boite").show(500); //ou fadeIn
    });

    $(".masquer").click(function () {
        $(".boite").hide(500); //ou fadeOut
    });


    // Afficher-masquer 1 bouton
    $(".afficher2").click(function () {
        $(".boite2").toggle(200);
    });
    

    // Variable titre clonée et placée
    var monTitre = $(".logo").clone();
    $(".boite").prepend(monTitre);
    
    
    

    // Colorer la page en rouge
    $(".bg-rouge").click(function () {
        $("#pleine-page").addClass("rouge");
    });
    
    $(".reset").click(function () {
        $("#pleine-page").removeClass("rouge");
    });

    
    // Changer class (1 bouton)
    var textBtn =  $(".border-btn").text();
    
    $(".border-btn").click(function () {
        $("#pleine-page").toggleClass("border");
        
        if($("#pleine-page").hasClass("border"))
            $(".border-btn").text("Enlever la bordure");
           
        else
            $(".border-btn").text(textBtn);
    });







    // Menu responsive
    $("#menu-mobile ul").hide();
    $("#menu-mobile i").click(function () {

        $("#menu-mobile ul").slideToggle(300);
       

    });









    // Fin environnement jQuery
});
