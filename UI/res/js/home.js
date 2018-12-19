$(document).ready(function () {

    $(".rep-item").each(function () {
        letter = $(this).find(".rep-name").html().slice(0, 1);
        $(this).find(".rep-ava").html(letter);
    })

    $(".tab").click(function(){
        id = $(this).attr("id").replace("-tab","");
        $(".tab").removeClass("tab-in");
        $(".tab").addClass("tab-out");
        $(this).addClass("tab-in");
        $(this).removeClass("tab-out");
        $(".tab-content").hide();
        $("#" + id).show();
    })

})