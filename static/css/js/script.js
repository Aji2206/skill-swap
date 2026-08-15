document.addEventListener("DOMContentLoaded", function () {

    console.log("Skill Swap Loaded Successfully");

    // Button animation
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(btn){

        btn.addEventListener("mouseenter", function(){
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", function(){
            btn.style.transform = "scale(1)";
        });

    });

    // Card animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        card.addEventListener("mouseenter", function(){
            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", function(){
            card.style.transform = "translateY(0)";
        });

    });

});