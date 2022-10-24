let bodyTag = document.querySelector("body");
let menuBtn = document.querySelector(".menu-icon");
let boxLinks = document.querySelector("header .links-cont");
let allLinksItems = Array.from(document.querySelectorAll("header .links-cont .links ul li"));
let showMoreAboutBtn = document.querySelector(".show-more-arrow");
let showMoreAboutBtnTitle = document.querySelector(".show-more-arrow h2");

menuBtn.addEventListener("click", showMenu);

showMoreAboutBtn.addEventListener("click", function () {
  let divHistory = document.querySelector("#History");
  if (divHistory.className == "open") {
    divHistory.classList.remove("open");
    showMoreAboutBtnTitle.innerHTML = "Show More";
    showMoreAboutBtn.style.setProperty("--transform-value", "rotateZ(180deg)");
    showMoreAboutBtn.style.setProperty("--transform-bottom", "-50px");
    showMoreAboutBtn.style.setProperty("--margin-value", "60px 0 0");
  } else {
    divHistory.classList.add("open");
    showMoreAboutBtnTitle.innerHTML = "Show Less";
    showMoreAboutBtn.style.setProperty("--transform-value", "rotateZ(0deg)");
    showMoreAboutBtn.style.setProperty("--transform-bottom", "-80px");
    showMoreAboutBtn.style.setProperty("--margin-value", "0 0 60px");
  }
});

allLinksItems.forEach((Item) => {
  let menuBtnStyle = getComputedStyle(menuBtn);
  Item.addEventListener("click", function hideMenu() {
    if (menuBtnStyle.display !== "none") {
      showMenu();
    }
  });
});

function showMenu() {
  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove("active");
    boxLinks.classList.remove("open");
  } else {
    boxLinks.classList.add("open");
    menuBtn.classList.add("active");
  }
}

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    showMenu();
  }
};

// <================= Start Contact =================> //

// catch all elements
let contactSectionLink = document.querySelector('#Contact') ;
let nameInput = document.querySelector('#name') ;
let emailInput = document.querySelector('#email') ;
let msgInput = document.querySelector('#msg') ;
let contactForm = document.querySelector('.form-cont form') ;

let allInputs = Array.from(document.querySelectorAll('.form-cont form input'))
    allInputs.push(msgInput);

let nameError = true;
let emailError = true;
let msgError = true;

allInputs.forEach(input => {
    input.addEventListener("blur", 
    function () {
        let condition = true;
        if (input === nameInput ) {
            condition = (input.value.length < 4);
            inputValidation(input , condition , nameError);
        }
        else if (input === emailInput ) {
            condition = (input.value === '');
            inputValidation(input , condition , emailError);
        }
        else if (input === msgInput ) {
            condition = (input.value.length < 10 );
            inputValidation(input , condition , msgError);
        }
    });
});

function inputValidation(inputItem , condition , error ) {
    if (condition) {
        inputItem.style.border = "1px solid #F00";
        inputItem.parentElement.lastChild.previousElementSibling.style.display = 'block';
        inputItem.parentElement.querySelector('.asterisks').style.display = 'block';
        if (error === nameError) {
            nameError = true;
        } else if ((error === emailError)) {
            emailError = true;
        }else if ((error === msgError)) {
            msgError = true;
        }
    }
    else {
        inputItem.style.border = "1px solid #080";
        inputItem.parentElement.lastChild.previousElementSibling.style.display = 'none';
        inputItem.parentElement.querySelector('.asterisks').style.display = 'none';
        if (error === nameError) {
            nameError = false;
        } else if ((error === emailError)) {
            emailError = false;
        }else if ((error === msgError)) {
            msgError = false;
        }
    }
}

// submit form validation 
contactForm.addEventListener("submit", function(e){
    if (nameError === true  || emailError === true  || msgError === true ) {
            e.preventDefault()
            nameInput.blur();
            emailInput.blur();
            msgInput.blur();
    } else {
      nameInput.value = "";
      emailInput.value = "";
      msgInput.value = "";
    }
});