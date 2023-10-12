let menu = document.querySelector(".menu");
let menuUl = document.querySelector("header ul")

menu.onclick = function () {
    document.querySelector(".overLay").style.display = "block"
    menuUl.classList.add("active")
    menu.style.display = "none"
    document.querySelector(".close").style.display = "block"
};

document.querySelector(".close").onclick = function () {
    document.querySelector(".overLay").style.display = "none"
    menuUl.classList.remove("active")
    menu.style.display = "block"
    document.querySelector(".close").style.display = "none"
}