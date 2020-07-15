$(function(){
    $("div").slice(0, 10).show(); // 최초 10개 선택
    $("#load").click(function(e){ // Load More를 위한 클릭 이벤트e
            e.preventDefault();
            $("div:hidden").slice(0, 5).show(); // 숨김 설정된 다음 10개를 선택하여 표시
            if($("div:hidden").length == 0){ // 숨겨진 DIV가 있는지 체크
            alert("더 이상 항목이 없습니다"); // 더 이상 로드할 항목이 없는 경우 경고
        }
    });
});