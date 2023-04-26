$(function () {
  
  //네비게이션
  $('.gnb > li').hover(function () {
    $(this).find('.sub').stop().slideDown()},
    function() {
      $(this).find('.sub').stop().slideUp();}
  )

  //이미지 슬라이드
  var $btn = $('.slides-wrap input');
  var btnCount = $btn.length;
  var speed = 4000;
  var i = 0;

  function check () {
    
    if ( i < btnCount ) {
      i++;
      $btn.eq(i).click();
    } else {
      i = 0;
      $btn.eq(i).click();
    
  }
}
  setInterval( check, speed );

// 추천 상품 click이벤트
$('.rcm > li').first().find('.rcm-sub').show();
$('.rcm > li').first().find('.rcm-ch').css('color', 'red').css('fontWeight',' bold');

// 클릭했을 때 해당요소가 나타나고, 아닌 요소들이 숨어야 하기에 한 함수에 작성.
$('.rcm > li').click(function () {
  $('.rcm>li').not(this).find('.rcm-sub').hide();
  $('.rcm>li').not(this).find('.rcm-ch').css('color','black').css('fontWeight','bold');
  $(this).find('.rcm-sub').show();
  $(this).find('.rcm-ch').first().css('color','red').css('fontWeight','bold');
  
});

// 추천 상품 hover
$('.rcm-sub > li').hover(function() {
 $(this).find('.show','.ch').show();
},
 function () 
 {$(this).find('.show', '.ch').
 hide();
});

// 추천메뉴
 $('.size').click(function() {
  $(this).find('.size-sub').slideToggle();
 });


//COLOR 슬라이드 -전체: 2번째 요소\
var all = document.querySelector('.col2');
var allch = document.querySelectorAll('.col2 > li');
var allIdx = 0;
var allch_Count = allch.length;
var allch_Width = 33;
var allch_Margin = 5;
var allch_prev = document.querySelector('.col2-prev');
var allch_next = document.querySelector('.col2-next');

// 스크립트가 진행되자마자 너비를 잡아야함.
all.style.width = (allch_Width + allch_Margin)*allch_Count + 'px';

function moveSlide(num) {
 all.style.left = -num * 38 + 'px';
 allIdx = num;
}

// next를 누르면 할 일
allch_next.addEventListener('click', function () {
  if(allIdx < allch_Count - 4) {
    moveSlide(allIdx + 1);
  }else{
    moveSlide(0);
};
})

allch_prev.addEventListener('click', function () {
  if(allIdx + 6 > allch_Count) {
    moveSlide(allIdx - 1);
  }else{
    moveSlide(0);
}
});


// coloc- face 3번째
var face = document.querySelector('.col3-1');
var fach3_1 = document.querySelectorAll('.col3-1 > li');
var fach3_1Idx = 0;
var fach3_1Count = fach3_1.length;
var fach3_1Width = 33;
var fach3_1Margin = 5;
var fach3_1prev = document.querySelector('.col3-1-prev');
var fach3_1next = document.querySelector('.col3-1-next');

face.style.width = (fach3_1Width + fach3_1Margin)*fach3_1Count + 'px';

function moveSlide3_1(num) {
 face.style.left = -num * 38 + 'px';
 fach3_1Idx = num;
}

// next를 누르면 할 일
fach3_1next.addEventListener('click', function () {
  if(fach3_1Idx < fach3_1Count - 4) {
    moveSlide3_1(fach3_1Idx + 1);
  }else{
    moveSlide3_1(0);
}
})

fach3_1prev.addEventListener('click', function () {
  if(fach3_1Idx + 8 > fach3_1Count ) {
    moveSlide3_1(fach3_1Idx - 1);
  }else{
    moveSlide3_1(0);
}
})

// coloc- face 4번째
var face4_1 = document.querySelector('.col4-1');
var fach4_1 = document.querySelectorAll('.col4-1 > li');
var fach4_1Idx = 0;
var fach4_1Count = fach4_1.length;
var fach4_1Width = 33;
var fach4_1Margin = 5;
var fach4_1prev = document.querySelector('.col4-1-prev');
var fach4_1next = document.querySelector('.col4-1-next');

face4_1.style.width = (fach4_1Width + fach4_1Margin)*fach4_1Count + 'px';

function moveSlide4_1(num) {
 face4_1.style.left = -num * 38 + 'px';
 fach4_1Idx = num;
}

// next를 누르면 할 일
fach4_1next.addEventListener('click', function () {
  if(fach4_1Idx < fach4_1Count - 4) {
    moveSlide4_1(fach4_1Idx + 1);
  }else{
    moveSlide4_1(0);
}
})

fach4_1prev.addEventListener('click', function () {
  if(fach4_1Idx + 5 > fach4_1Count ) {
    moveSlide4_1(fach4_1Idx - 1);
  }else{
    moveSlide4_1(0);
}
})

// coloc- face 4번째
var face5_1 = document.querySelector('.col5-1');
var fach5_1 = document.querySelectorAll('.col5-1 > li');
var fach5_1Idx = 0;
var fach5_1Count = fach5_1.length;
var fach5_1Width = 33;
var fach5_1Margin = 5;
var fach5_1prev = document.querySelector('.col5-1-prev');
var fach5_1next = document.querySelector('.col5-1-next');

face5_1.style.width = (fach5_1Width + fach5_1Margin)*fach5_1Count + 'px';

function moveSlide5_1(num) {
 face5_1.style.left = -num * 38 + 'px';
 fach5_1Idx = num;
}

// next를 누르면 할 일
fach5_1next.addEventListener('click', function () {
  if(fach5_1Idx < fach5_1Count - 4) {
    moveSlide5_1(fach5_1Idx + 1);
  }else{
    moveSlide5_1(0);
}
})

fach5_1prev.addEventListener('click', function () {
  if(fach5_1Idx + 5 > fach5_1Count ) {
    moveSlide5_1(fach5_1Idx - 1);
  }else{
    moveSlide5_1(0);
}
})

// color- lip 1번째
var lip1_2 = document.querySelector('.col1-2');
var lich1_2 = document.querySelectorAll('.col1-2 > li');
var lich1_2Idx = 0;
var lich1_2Count = lich1_2.length;
var lich1_2Width = 33;
var lich1_2Margin = 5;
var lich1_2prev = document.querySelector('.col1-2-prev');
var lich1_2next = document.querySelector('.col1-2-next');

lip1_2.style.width = (lich1_2Width + lich1_2Margin)*lich1_2Count + 'px';

function moveSlide1_2(num) {
 lip1_2.style.left = -num * 38 + 'px';
 lich1_2Idx = num;
}

// next를 누르면 할 일
lich1_2next.addEventListener('click', function () {
  if(lich1_2Idx < lich1_2Count - 4) {
    moveSlide1_2(lich1_2Idx + 1)
  }else{
    moveSlide1_2(0);
}
})

lich1_2prev.addEventListener('click', function () {
  if(lich1_2Idx + 9 > lich1_2Count ) {
    moveSlide1_2(lich1_2Idx - 1);
  }else{
    moveSlide1_2(0);
}
})

})
