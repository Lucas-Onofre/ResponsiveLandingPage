let show = true

const menuSection = document.querySelector(".menu-section")
const navMenu = document.querySelector(".menu-content")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    navMenu.classList.toggle("on", show)
    show = !show;
})