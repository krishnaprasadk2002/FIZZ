
document.addEventListener('DOMContentLoaded', function () {
                                               /*rotating image element*/
    var rotatingImage = document.getElementById('rotatingImage');

                                               /*scroll event listener*/
    window.addEventListener('scroll', function () {
                                                /*scroll position*/
        var scrollPosition = window.scrollY;

                                     /*Adjusting rotation scroll position*/
        rotatingImage.style.transform = 'rotate(' + scrollPosition + 'deg)';
    });
});
