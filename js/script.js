function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
var swiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    watchOverflow: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {

        }
    },
});
var swiper = new Swiper(".bottom-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    watchOverflow: false,
    pagination: {
        el: ".pagination--pos",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
    },
});

let selectTime = document.querySelector('#time');
let selectPeople = document.querySelector('#people');

let BuildingSelectForm = () => {

    for (let i = 0; i < 24; i++) {
        if (i < 10) {
            let createOption = selectTime.innerHTML =
                selectTime.innerHTML + '<option value="time' + i + '"> 0' + i + ':00</option>' +
                '<option value="time' + i + '"> 0' + i + ':30</option>';
        } else {
            let createOption = selectTime.innerHTML =
                selectTime.innerHTML + '<option value="time' + i + '">' + i + ':00</option>' +
                '<option value="time' + i + '">' + i + ':30</option>';
        }

    }

    for (let i = 1; i < 25; i++) {
        let createOptionPeople = selectPeople.innerHTML = selectPeople.innerHTML + '<option value="people' + i + '">' + i + '</option>';
    }
};

BuildingSelectForm();


//tabs

let tabsLink = document.querySelectorAll('.tabs__buttons-link');
let tabsBody = document.querySelectorAll('.tabs__body');

for (let i = 0; i < tabsLink.length; i++) {

    tabsLink[i].addEventListener('click', () => {
        tabsAttr = tabsLink[i].getAttribute('data-category');

        for (let x = 0; x < tabsBody.length; x++) {
            if (tabsAttr === tabsBody[x].getAttribute('data-category')) {

                console.log(tabsBody[x].getAttribute('data-category'));

                for (let j = 0; j < tabsLink.length; j++) {
                    tabsLink[j].classList.remove('tabs__buttons-link--active');
                    tabsBody[j].classList.remove('tabs__body--active');
                }
                tabsLink[i].classList.add('tabs__buttons-link--active');
                tabsBody[x].classList.add('tabs__body--active');
            }
        }

    });

}

//scroll

const mainMenu = document.querySelector('.fixed-menu');
const animItems = document.querySelectorAll('.--anim-item');


window.addEventListener('scroll', scrollMenu);


function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
};

function scrollMenu() {

    if (getBodyScrollTop() > 100) {
        mainMenu.classList.add('active');
        gamMenu.classList.add('show');
    } else {
        mainMenu.classList.remove('active');
        gamMenu.classList.remove('show');
        if (gamMenu.classList.contains('active')) {
            gamMenu.classList.remove('active');
            mainMenu.style.display = "none";
        }
    }

}

//t

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHight / animStart;
            if (animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHight)) {
                animItem.classList.add('--anim-start');
            } else {
                if (animItem.classList.contains('--anim-d-stop')) {
                    animItem.classList.remove('--anim-start');
                }

            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    setTimeout(() => {
        animOnScroll();
    }, 400);
}

const gamMenu = document.querySelector('.gamburger-menu')

gamMenu.addEventListener('click', gamburgerMenu)

function gamburgerMenu() {
    gamMenu.classList.toggle('active');
    if (gamMenu.classList.contains('active')) {
        mainMenu.style.display = "block";
    }
    else {
        mainMenu.style.display = "none";
    }
}