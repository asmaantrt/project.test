$(document).ready(function (){
//show Color Option Div When Click On The Gear
    $(".gear-check").click(function ()
    {
        $(".color-option").toggle();
    })

    //Change Theme Color On Click
    $(".color-option ul li")
    .eq(0).css("backgroundColor","#B51B23").end()
    .eq(1).css("backgroundColor","#ffdd59").end()
    .eq(2).css("backgroundColor","#05c46b").end()
    .eq(3).css("backgroundColor","#3742fa").end()
    .eq(4).css("backgroundColor","#f8a5c2");

})


$('#myCarousel').on('slide.bs.carousel', function () {
    // do something...
    
$('.carousel').carousel({
    interval:1000
  })
})
  





