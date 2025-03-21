var lang = 'en';
$(function () {
    if(window.localStorage.hasOwnProperty('lang')){
        lang = window.localStorage.getItem('lang');
    }

    $('body').removeClass('en').removeClass('zh').removeClass('cn').addClass(lang);
    $('.btn-lang').removeClass('actived');
    $('.btn-lang-'+lang).addClass('actived');
    // console.log('lang='+lang);
});

var changeLang = (l) => {
    $('body').removeClass('en').removeClass('zh').removeClass('cn').addClass(l);
    $('.btn-lang').removeClass('actived');
    $('.btn-lang-'+l).addClass('actived');

    lang = l;
    window.localStorage.setItem('lang', lang);
};