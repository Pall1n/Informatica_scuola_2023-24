const mobileMenu = document.getElementById("mobile-menu");

menu.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
    }
});