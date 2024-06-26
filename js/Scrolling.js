const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('aein-move-show');
        } else {
            entry.target.classList.remove('aein-move-show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.aein-move-hidden');




let navigationItems = document.querySelectorAll("header .links-cont .links ul li a");
let skillsSection = document.querySelector("#Skills");
let skillItems = document.querySelectorAll("#Skills .tech-container .skills-container .skill .img-cont");



window.onscroll = function () {
    // Navigation Animations 
    navigationItems.forEach(Item => {
        let hrefValue = Item.getAttribute("href");
        let thisSection = document.querySelector(`${hrefValue}`);
        if (thisSection.offsetTop - 200 <= window.scrollY && window.scrollY <= thisSection.nextElementSibling.offsetTop -200) {
            Item.parentElement.classList.add("active");
        } else {
            Item.parentElement.classList.remove("active");
        }
    });
    // Skills Animate Width
    if (window.scrollY >= skillsSection.offsetTop - 500) {
        skillItems.forEach((skill , i) => {
        skill.style.setProperty("--transform-delay", `${(i> 2)? (i+1)*100 : (i+1)*500 }ms`);    
    });
    }
    else {
        skillItems.forEach((skill) => {
        skill.style.setProperty("--transform-delay", '250ms');
        });
    }
};

hiddenElements.forEach((el)=> observer.observe(el));
