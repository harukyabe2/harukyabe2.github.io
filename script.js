// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('.gallery-image');
    var span = document.getElementsByClassName("close")[0];

    images.forEach((image) => {
        image.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
