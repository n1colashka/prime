// Get the modal
var modal = document.getElementById("popup");

var modal2 = document.getElementById("popup__form");


var popupContent = document.getElementById("popup__nav");
var popupFooter = document.getElementById("popup__footer");

// Get the button that opens the modal
var btn = document.getElementById("popup-link");
var btnFooter = document.getElementById("popup__footer-link");
var btn2 = document.getElementById("popup-link2");
var btn3 = document.getElementById("popup-link3");
var btn4 = document.getElementById("popup-link4");
var btn5 = document.getElementById("popup-link5");
var btn6 = document.getElementById("popup-link6");
var btn7 = document.getElementById("popup-link7");
var btnVideoClose = document.querySelector(".form-btn-close");

if (btnVideoClose) {
    btnVideoClose.addEventListener('click', function() {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        html.classList.remove('overflow-hidden');
    })
}


if (btn) {
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.opacity = "1";
        popupContent.style.display = "block";
        popupContent.style.transition = "all 0.2s ease 0s";
        popupFooter.style.display = "none";
        modal2.style.display = "none";
        html.classList.add('overflow-hidden');
    }
}

btnFooter.onclick = function(e) {
    e.preventDefault();
    console.log('click');
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.display = "none";
    popupFooter.style.opacity = "1";
    popupFooter.style.display = "block";
    popupFooter.style.transition = "all 0.2s ease 0s";
    modal2.style.display = "none";
    html.classList.add('overflow-hidden');
}

if (btn2) {
    btn2.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
}

if (btn3) {
    btn3.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
    
}

if (btn7) {
    btn7.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
    
}

if (btn4) {
    btn4.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
}

if (btn5) {
    btn5.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
}

if (btn6) {
    btn6.onclick = function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        popupContent.style.display = "none";
        popupFooter.style.display = "none";
        modal2.style.display = "block";
        html.classList.add('overflow-hidden');
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        html.classList.remove('overflow-hidden');
    }
}

var burger = document.querySelectorAll('.checkbox-toggle');
var linksInMenu = document.querySelector('#menu .outer-menu');
var linksInMenu2 = document.querySelector('#menu2 .outer-menu');
linksInMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        linksInMenu.querySelector('.checkbox-toggle').checked = false;
        html.classList.remove('overflow-hidden');
    })
})
linksInMenu2.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        linksInMenu2.querySelector('.checkbox-toggle').checked = false;
        html.classList.remove('overflow-hidden');
    })
})
var html = document.querySelector('html');

burger.forEach(item => {
    item.addEventListener('click', function() {
        html.classList.toggle('overflow-hidden');
    })
})


// Превращаем блоки в слайдеры на мобильных
if (window.innerWidth <= 993) {
    initServicesSlider();
    initThirdSlider();
}

if (window.innerWidth <= 768) {
    initImportantSlider();
    initProblemsSlider();
}

readMore();

preventDefaultLinks(); // Убрать если в Third будут рабочие ссылки, при клике на Подробнее






function initVideos() {
    
	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
}


initVideos();


function readMore() {
    var readMoreBtn = document.querySelector('.why__btn');
    
    if (readMoreBtn) {
        var textBox = document.querySelector('.why__text-box');

        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            textBox.classList.add('open');
        })
    }
}


function initImportantSlider() {
    var slider = document.querySelector('.important__slider');
    

    if (slider) {
        var sliderWrapper = slider.querySelector('.important__slider-wrapper');
        var sliderItems = slider.querySelectorAll('.important__item');  

        slider.classList.add('swiper-container');
        sliderWrapper.classList.add('swiper-wrapper');
        sliderItems.forEach(item => {
            item.classList.add('swiper-slide');
        })

        var swiper = new Swiper('.important__slider', {
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
    }
}

function initProblemsSlider() {
    var slider = document.querySelector('.problems__slider');

    if (slider) {
        var sliderWrapper = slider.querySelector('.row');
        var sliderItems = slider.querySelectorAll('.problems__item');

        slider.classList.add('swiper-container');
        sliderWrapper.classList.add('swiper-wrapper');
        sliderWrapper.classList.remove('row');
        sliderItems.forEach(item => {
            item.classList.add('swiper-slide');
        })
    
        var swiper = new Swiper('.problems__slider', {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
}

function initServicesSlider() {
    var slider = document.querySelector('.services');

    if (slider) {
        var sliderWrapper = slider.querySelector('.row');
        var sliderItems = slider.querySelectorAll('.services__item');

        slider.classList.add('swiper-container');
        sliderWrapper.classList.add('swiper-wrapper');
        sliderWrapper.classList.remove('row');
        sliderItems.forEach(item => {
            item.classList.add('swiper-slide');
        })
    
        var swiper = new Swiper('.services', {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }

   
}

function initThirdSlider() {
    var slider = document.querySelector('.third__container');
    

    if (slider) {
        var sliderWrapper = slider.querySelector('.row');
        var sliderItems = slider.querySelectorAll('.third__slider-item');

        slider.classList.add('swiper-container');
        sliderWrapper.classList.add('swiper-wrapper');
        sliderWrapper.classList.remove('row');
        sliderItems.forEach(item => {
            item.classList.add('swiper-slide');
        })

        var swiper = new Swiper('.third__container', {
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
    }
}


function preventDefaultLinks() {
    var thirdLinks = document.querySelectorAll('.third__mobile-btn');
    thirdLinks.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
        })
    })
}