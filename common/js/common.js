$(document).ready(function(){
	var winW = $(window).width();
	var winH = $(window).height();
	// 탑버튼
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400){
			$('.btn_top').fadeIn();
		}else{
			$('.btn_top').fadeOut();
		}
	});
	$('.btn_top').click(function() {
		$('html, body').animate({ scrollTop : 0 }, 400);
		return false;
	});

	$(".ellipsis2").dotdotdot();
	$(".ellipsis3").dotdotdot();
	$(window).resize(function(){
		$(".ellipsis2").dotdotdot();
		$(".ellipsis3").dotdotdot();
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0){
			$('.left_area').addClass('min');
		}else{
			$('.left_area').removeClass('min');
		}
	});

	//select
	$('.select').click(function(){
		if($(this).next().is(':hidden')){
			$('.option').slideUp();
			$('.select').removeClass('active');
			$(this).addClass('active');
			$(this).next().slideDown(200);
		}else{
			$(this).removeClass('active');
			$(this).next().slideUp(200);
		}
		return false;
	});
	$('body').on('click', function(){
		if($('.select_wrap .option').is(':visible')){
			$('.select').removeClass('active');
			$('.select_wrap .option').slideUp(200);
		}
	});
	$('.select_wrap .option').find('li').click(function(){
		$('.select').removeClass('active').addClass('input');
		$(this).parent().parent().parent().find('.input').val($(this).text());
	});

	/* 180328 추가 */
	//e-mail 도메인 리스트
	$('.email_select').change(function(){
		$(".email_select option:selected").each(function () { 
			if($(this).val()== '1'){ //직접입력일 경우
				$('.emailDomain').val(''); //값 초기화 
				$('.emailDomain').attr("disabled",false); //활성화 
			}else{ //직접입력이 아닐경우 
				$('.emailDomain').val($(this).val()); //선택값 입력 
				$('.emailDomain').attr("disabled",true); //비활성화 
			} 
		}); 
	});
});

// 개인정보보호정책 링크이동
function gotoAnchor(obj){
	var id = $(obj).attr("href");
	var offset = 60;
	var target = $(id).offset().top-offset;
	$('html, body').animate({scrollTop:target}, 800, 'easeOutQuart');
	event.preventDefault();
}


