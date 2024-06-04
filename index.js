$(document).ready(function(){
    $('.hero__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.media__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.196613 13L12.6966 0.5L15.6133 3.41667L6.02995 13L15.6133 22.5833L12.6966 25.5L0.196613 13Z" fill="#272727" fill-opacity="0.2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2604 13L3.76042 25.5L0.84375 22.5833L10.4271 13L0.84375 3.41667L3.76042 0.5L16.2604 13Z" fill="#272727" fill-opacity="0.8"/></svg></button>'
    });

    $('.magazin__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
  });