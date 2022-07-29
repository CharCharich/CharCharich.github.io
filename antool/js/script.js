let nodes=[]

for (let index = 1; index < 11; index++) {
   nodes.push($("#like" + index))
   $("#like" + index).bind('click', function() {
    if ($("#like" + index).hasClass("active")){
     $("#like" + index).removeClass("active")
     localStorage.setItem("like" + index,"false")
    }
    else {
        $("#like" + index).addClass("active")
        localStorage.setItem("like" + index,"true")
    }
   
  })
   if(localStorage.getItem("like"+index)=="true"){
    $("#like" + index).addClass("active")
}
}
var slider = Peppermint(document.getElementById('peppermint'))

    rightArr = document.getElementById('right-arr')
    leftArr = document.getElementById('left-arr')
    slides1 = document.getElementById('slides1')
    slides2 = document.getElementById('slides2')
    slides3 = document.getElementById('slides3')
    slider.recalcWidth()

rightArr.addEventListener('click', slider.next, false);
leftArr.addEventListener('click', slider.prev, false);
slides1.addEventListener('click', function() { slider.slideTo(0) }, false);
slides2.addEventListener('click', function() { slider.slideTo(1) }, false);
slides3.addEventListener('click', function() { slider.slideTo(2) }, false);