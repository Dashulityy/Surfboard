const hamButton = document.getElementById("hamburger");
hamButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");
    openMenu.style.display = "block";
    closeMenu.addEventListener("click", (e) =>{
        e.preventDefault();
        openMenu.style.display = "none";
    })
})