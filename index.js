const images = document.querySelectorAll (`.item`);

images.forEach (function (i) {
    
i.addEventListener (`mouseover`, ()=> {
    removeFocus ();
    i.classList.add (`selected`);
});







function removeFocus() {
    images.forEach (function(i) {
        i.classList.remove (`selected`);
    })


}

});
