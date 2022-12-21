
/* document.addEventListener('DOMContentLoaded',function(){
  tag가 다 준비되면 안의 내용 실행
}); */

// 문서의 요소(tag)가 다 준비 되면 실행
// $(값) <= jquery 객체 <= jquery함수 실행
$(
  function(){
    $(".full_menu, .nav li").mouseover(function () {
      $(".full_menu").stop().slideDown(600);
    });
    $(".full_menu, .nav li").mouseleave(function () {
      $(".full_menu").stop().slideUp(600);
    });
  
    $(".full_cover>ul>li").mouseover(function(){
      var i=$(this).index(); // 원뎁스 li 중 마우스 올라간 요소의 번호를 i에 할당 
      /* .eq(n) n번째 요소 취득 */
      /* 투뎁스 i번째에 마우스 오버시 원뎁스 i번째 find()하위탐색*/
      $(".nav li").eq(i).find(".line").css("width","100%");
    });
    $(".full_cover>ul>li").mouseleave(function(){
      var i=$(this).index(); 
      $(".nav li").eq(i).find(".line").css("width","0%");
    });
    $(".nav li").mouseover(function(){
      $(this).find(".line").css("width","100%");
    });
    $(".nav li").mouseleave(function(){
      $(this).find(".line").css("width","0%");
    });
  }
); //jQuery