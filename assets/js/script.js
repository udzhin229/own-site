//Отзывы
$(document).ready(function(){
    $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
        nav:true,
        loop:true,
        dots:false,
        items:1,
        margin:10, 
        center:true,
        navContainer:('.n'),
        navText: ["<img src='assets/images/ar-l.svg'>", "<img src='assets/images/ar-r.svg'>"] 
    });
});

//Аккордеон
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//Анимация текста в начале
/*var text = "oidutS noxeN";
var delay = 80; // cкорость
var elem = document.getElementById("result");
 
var print_text = function(text, elem, delay) {
    if(text.length > 0) {
        // elem.innerHTML += text[0];
        elem.insertAdjacentHTML("afterbegin", text[0]);
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay); 
            }, delay
        );
    }
}
print_text(text, elem, delay);
*/


//Размер экрана
if( window.screen.width < 834 ){
      document.getElementsByClassName("intro__text it0 element-animation")[0].innerHTML = "Создаем продающие сайты и логотипы для бизнеса";
 }

 //Появление анимации при скролле
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

//Анимация хэдера
$(function() {
    $("#header__burger").on("click", function(event){
        event.preventDefault();
        $("#header2").toggleClass("active");
        $("#header__burger").toggleClass("active");
    });
});

//Смена ссылок в проектах
let ex = document.getElementsByClassName('examples-text');
$(function() {
    $(ex).on("click", function(event){
        event.preventDefault();
        var $this = $(this);
        $(ex).removeClass("active");
        $this.addClass("active");
        if ($this[0] == ex[0]) {
            document.getElementsByClassName("suptexts__text element-animation")[0].innerHTML = "Лендинг для онлайн-академии криптоинвестирования. Целевая аудитория — люди, которые хотят заняться криптовалютой. рекламный трафик";
            document.getElementById("examples__img-text").href = 'https://cryptoinvestor.com.ua/';
            document.getElementById("img_ex").src = 'assets/images/crypto.webp';
            document.getElementsByClassName("examples__img-text")[0].style.color = "#FFFFFF";
            document.getElementsByClassName("ar")[0].style.filter = "invert(0)";
            
        }
        if ($this[0] == ex[1]) {
            document.getElementsByClassName("suptexts__text element-animation")[0].innerHTML = "Создаем продающие сайты и логотипы для бизнеса";
            document.getElementById("examples__img-text").href = 'https://qn9wecrdqcmik6vi56ua8q.on.drv.tw/www.travel-sites.com/ex.html';
            document.getElementById("img_ex").src = 'assets/images/travel.webp';
            document.getElementsByClassName("examples__img-text")[0].style.color = "#FFFFFF";
            document.getElementsByClassName("ar")[0].style.filter = "invert(0)";
        }
        if ($this[0] == ex[2]) {
            document.getElementsByClassName("suptexts__text element-animation")[0].innerHTML = "Лендинг идельно подходящий для продажи своих услуг";
            document.getElementById("examples__img-text").href = 'https://qn9wecrdqcmik6vi56ua8q.on.drv.tw/www.work-site.com/code.html';
            document.getElementById("img_ex").src = 'assets/images/serv.webp';
            document.getElementsByClassName("examples__img-text")[0].style.color = "#121212";
            document.getElementsByClassName("ar")[0].style.filter = "invert(1)";
        }
        if ($this[0] == ex[3]) {
            document.getElementsByClassName("suptexts__text element-animation")[0].innerHTML = "Создаем продающие сайты и логотипы для бизнеса";
            document.getElementById("examples__img-text").href = 'https://qn9wecrdqcmik6vi56ua8q.on.drv.tw/www.ps5-sites.com/forme.html';
            document.getElementById("img_ex").src = 'assets/images/ps5.webp';
            document.getElementsByClassName("examples__img-text")[0].style.color = "#FFFFFF";
            document.getElementsByClassName("ar")[0].style.filter = "invert(0)";
        }
    });
});


//Скролл до якорей
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 1000);
});


// $("header__burger").on("click", function(event){
//     event.preventDefault();
//     $("#header2").toggleClass("active");
// });

// $('.pri').click(() => {
//     $('html, body').animate({
//         scrollTop: $('.section7').offset().top
//     }, 1000);
// });