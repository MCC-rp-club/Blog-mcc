
var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
}

// Handle going to to the next slide
var nextSlide = function() {
    for (var i = 0; i < this.images.length; i++) {
        this.images[i].style.display = "none";
    }
    this.images[this.curImage].style.display = "block";
    this.curImage++;
    if (this.curImage >= this.images.length) {
        this.curImage = 0;
    }
    window.setTimeout(nextSlide.bind(this), 3000);
};

nextSlide.call(this);
};

slideShow(document.getElementById("slideshow"));

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
} else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "35px";
}
}
