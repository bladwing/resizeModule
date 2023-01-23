var modal = document.getElementById('myModal');


        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        }

        modal.onclick = function () {
            img01.className += " out";
            setTimeout(function () {
                modal.style.display = "none";
                img01.className = "modal-content";
            }, 400);

        }