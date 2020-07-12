$(document).ready(function () {
    $('.local').click(function() {
        const id = $(this).attr('href');
        event.preventDefault();
        $('html, body').animate({
            'scrollTop': $(id).offset().top
        }, 500);
    })
    // let page_url = window.location.href;
    
    // let page_id = page_url.substring(page_url.lastIndexOf("#")+1);
    // $("html, body").animate({
    //     scrollTop: $("#latest-" + page_id).offset().top
    // }, 1000);
});