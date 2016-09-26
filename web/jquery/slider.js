$(document).ready(function () {
    /* Ẩn tất cả các ảnh nằm đằng sau ảnh chính */
    for (var i = 1; i < 9; i++) {            
        $("#image0" + i).fadeOut();
    }
    var currentNumberImage = 9;      
    /* Hiệu ứng tự động chuyển ảnh sau 1 giây = 1000 mili giây */
    var time = setInterval(function() {
        if (currentNumberImage == 1) {
                $("#image0" + currentNumberImage).fadeOut();     
                currentNumberImage = 9;
                $("#image0" + currentNumberImage).fadeIn();       
            }
            else {
                $("#image0" + currentNumberImage).fadeOut();     
                currentNumberImage--;
                $("#image0" + currentNumberImage).fadeIn(); 
            }
    },2000);        
    /* Hiệu ứng chuyển ảnh ở slider khi nhấn vào list hình bên trái */    
    $(".slider-image").click(function () {      
        /* Lấy id của ảnh nhấn vào */
        var id = $(this).attr("id");    
        /* Ẩn ảnh hiện tại */
        $("#image0" + currentNumberImage).fadeOut();
        /* Hiện ảnh mới */
        $("#image0" + id).fadeIn();
        /* Truyền số thứ tự ảnh hiện tại bằng ảnh mới */
        currentNumberImage = id;
    });
});
$(".sliderMainImage").changeSlide()