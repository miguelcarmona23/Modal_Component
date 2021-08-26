const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const h1 = document.querySelector("h1");
const overlay = document.getElementById("overlay");

openModalOnClick();
closeModalOnClick();

    function openModalOnClick() {
        openBtn.addEventListener("click", (e) => {
            overlay.style.display = "block";
            openBtn.style = "display:none";
            h1.style = "display:none";
        });
    }

    function closeModalOnClick() {
        closeBtn.addEventListener("click", (e) => {
            overlay.style.display="none";
            openBtn.style = "display:inline-block";
            h1.style = "display:block";
        })
    }
