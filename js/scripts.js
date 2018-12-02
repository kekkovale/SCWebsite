
function plusDivs(n) {
    if (n > 0) {
        scrollRight()
    } else {
        scrollLeft()
    }
}

function scrollRight() {
    var image1 = document.getElementById("position1");
    var image2 = document.getElementById("position2");
    var image3 = document.getElementById("position3");
    
    //temporary variables
    var image1ClassNameTemp = image1.className
    var image2ClassNameTemp = image2.className
    
    //swap positions
    image1.className = image3.className    
    image2.className = image1ClassNameTemp
    image3.className = image2ClassNameTemp
}

function scrollLeft() {
    var image1 = document.getElementById("position1");
    var image2 = document.getElementById("position2");
    var image3 = document.getElementById("position3");
    
    //temporary variables
    var image1ClassNameTemp = image1.className

    //swap positions
    image1.className = image2.className
    image2.className = image3.className
    image3.className = image1ClassNameTemp
}