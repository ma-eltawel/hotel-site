let menu = document.querySelector('#menu-but'), nav = document.querySelector('header nav'), questions = 
    document.querySelectorAll('#faq .box');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    }
});

var swiper = new Swiper(".room-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
    pagination: {
        el : '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".gallery-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        }
    }
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
    pagination: {
        el : '.swiper-pagination',
        clickable: true
    }
});

questions.forEach(el => {
    el.onclick = () => {
        questions.forEach(sub => {
            sub.classList.remove('active');
        })
        el.classList.add('active');
    }
})