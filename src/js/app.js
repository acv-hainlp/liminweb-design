// $('.carousel-item').addClass('animated fadeIn');

// $('.js--wp-service').waypoint(function(direction){
//     $('.js--wp-service').addClass('animated fadeInUp')
// }, {
//     offset: '50%'
// });

// $('.js--wp-gallery').waypoint(function(direction){
//     $('.js--wp-gallery').addClass('animated fadeIn')
// }, {
//     offset: '50%'
// });

$("img").one("load", function() {
    $(this).addClass('animated fadeIn');
})