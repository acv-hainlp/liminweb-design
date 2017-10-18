$('.carousel-item').addClass('animated fadeIn');

$('.js--wp-service').waypoint(function(direction){
    $('.js--wp-service').addClass('animated fadeIn')
}, {
    offset: '50%'
});

$('.js--wp-gallery').waypoint(function(direction){
    $('.js--wp-gallery').addClass('animated fadeIn')
}, {
    offset: '50%'
});

// $("#gallery-section .img-fluid").each(function(index) {
//     $(this).delay(100*index).fadeIn(300);
// });