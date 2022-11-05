$(function () {
    // Début environnement jQuery

    // Ajouter une icône font-awesome aux liens externes
    $("a[target='_blank']").append(" <i class='fas fa-external-link-alt fa-sm'></i>");

    // Menu responsive
    $("#menu-mobile ul").hide();
    $("#menu-mobile i").click(function () {
        $("#menu-mobile ul").slideToggle(600);
    });


    // Défilement animé haut de page
    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 300; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    //Ajouter classe au scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".top").addClass("affiche");
        } else {
         $(".top").removeClass("affiche");
        }
    });
    
    // Fixe le menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 205) {
            $("#menu").addClass("fixe");
            $("body").css("padding-top", "50px");
            
        } else {
         $("#menu").removeClass("fixe");
         $("body").css("padding-top", "0");
        }
    });
    
    
    // Infobulles stylisées

    $('.tooltip').tooltipster({
   animation: 'grow',
   delay: 200,
   theme: 'tooltipster-shadow'
});

    // Fin environnement jQuery
});
