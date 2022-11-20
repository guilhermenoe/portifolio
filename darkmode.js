const divMenu = document.querySelector("#menu");
const divBody = document.querySelector("#body");
const divSplash = document.querySelector("#splash");
const divAbout = document.querySelector("#about");
const divPortfolio = document.querySelector("#portfolio");
const divContact = document.querySelector("#contact");
const footer = document.querySelector(".footer")
const btndark = document.querySelector("#colorMode");

btndark.addEventListener('click', function(){
    divMenu.classList.toggle('darkmode')
    divAbout.classList.toggle('darkmode')
    divPortfolio.classList.toggle('darkmode')
    divContact.classList.toggle('darkmode')
    divSplash.classList.toggle('darkmode')
    footer.classList.toggle('darkmode')
    btndark.classList.toggle('darkmode')
    divBody.classList.toggle('darkmode')

})
