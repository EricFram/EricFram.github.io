$(".note p img").each(function(i, img) {
    $(img).css({
        position: "relative",
        left: ($(".note").width() - $(img).width()) / 2
    });
});
