setTimeout(function(){
    $('.wrap').fadeToggle();
}, 1000);

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".heading").offset().top},
        'slow');
});

console.log('index.jsloaded');