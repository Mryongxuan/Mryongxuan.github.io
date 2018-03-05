$(function() {
    $("#dowebok").fullpage({
        sectionsColor: [
            "",
            "#4BBFC3",
            "#7BAABE",
            "#f90",
            "#f56"
        ],
        afterLoad: function(anchorLink, index) {
            // 第一面
            if (index == 1) {
                $(".section1")
                    .find(".belief")
                    .delay(200)
                    .animate({
                            left: "0"
                        },
                        1500,
                        "easeOutExpo"
                    );
                $(".section1")
                    .find("p")
                    .delay(200)
                    .animate({
                            right: "0"
                        },
                        1500,
                        "easeOutExpo"
                    );
                $(".section1")
                    .find(".contact")
                    .delay(200)
                    .animate({
                            right: "10%"
                        },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第二面
            if (index == 2) {
                $(".section2")
                    .find(".contact")
                    .delay(200)
                    .animate({
                            right: "10%"
                        },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".pic_box")
                    .delay(200)
                    .animate({ left: "0%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".post_box")
                    .delay(200)
                    .animate({ top: "-54px" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".recommend")
                    .delay(200)
                    .animate({ right: "0%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".bar")
                    .delay(500)
                    .animate({ bottom: "0px" },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第三面
            if (index == 3) {
                $(".section3")
                    .find(".contact")
                    .delay(200)
                    .animate({ right: "10%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section3")
                    .find(".basic")
                    .delay(200)
                    .animate({ top: "0%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section3")
                    .find(".know")
                    .delay(200)
                    .animate({ bottom: "0%" },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第四面
            if (index == 4) {
                $(".section4")
                    .find(".contact")
                    .delay(200)
                    .animate({ right: "10%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section4")
                    .find(".works")
                    .delay(200)
                    .animate({ left: "0%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".top")
                    .delay(200)
                    .animate({ right: "0%" }, 1500, "easeOutExpo");
                $(".section4")
                    .find(".fp-slides")
                    .delay(200)
                    .animate({ bottom: "0%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".fp-prev")
                    .delay(200)
                    .animate({ left: "21%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".fp-next")
                    .delay(200)
                    .animate({ right: "21%" }, 1500, "easeOutExpo");

            }
            // 第五
            if (index == 5) {
                $(".section5")
                    .find(".contact")
                    .delay(200)
                    .animate({ right: "10%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section5")
                    .find(".item-list")
                    .delay(200)
                    .animate({ bottom: "0%" }, 1500, "easeOutExpo");
                $(".section5")
                    .find(".works")
                    .delay(200)
                    .animate({ top: "0%" }, 1500, "easeOutExpo");
            }
        },
        onLeave: function(index, direction) {
            // 第一面
            if (index == "1") {
                $(".section1")
                    .find(".belief")
                    .delay(500)
                    .animate({ left: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section1")
                    .find("p")
                    .delay(500)
                    .animate({ right: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section1")
                    .find(".contact")
                    .delay(500)
                    .animate({ right: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第二面
            if (index == "2") {
                $(".section2")
                    .find(".contact")
                    .delay(500)
                    .animate({ right: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".pic_box")
                    .delay(500)
                    .animate({ left: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".post_box")
                    .delay(500)
                    .animate({ top: "-1000px" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".recommend")
                    .delay(500)
                    .animate({ right: "-150%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section2")
                    .find(".bar")
                    .delay(500)
                    .animate({ bottom: "-500px" },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第三
            if (index == "3") {
                $(".section3")
                    .find(".contact")
                    .delay(500)
                    .animate({ right: "-120%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section3")
                    .find(".basic")
                    .delay(500)
                    .animate({ top: "-100%" },
                        1500,
                        "easeOutExpo"
                    );
                $(".section3")
                    .find(".know")
                    .delay(500)
                    .animate({ bottom: "-100%" },
                        1500,
                        "easeOutExpo"
                    );
            }
            // 第四
            if (index == "4") {
                $(".section4")
                    .find(".contact")
                    .delay(500)
                    .animate({ right: "-120%" },
                        1500,
                        "easeOutExpo"
                    );

                $(".section4")
                    .find(".works")
                    .delay(500)
                    .animate({ left: "-100%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".top")
                    .delay(500)
                    .animate({ right: "-100%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".fp-slides")
                    .delay(500)
                    .animate({ bottom: "-100%" }, 1500, "easeOutExpo");

                $(".section4")
                    .find(".fp-prev")
                    .delay(500)
                    .animate({ left: "-10%" }, 1500, "easeOutExpo");
                $(".section4")
                    .find(".fp-next")
                    .delay(500)
                    .animate({ right: "-10%" }, 1500, "easeOutExpo");
            }
            // 第五
            if (index == "5") {
                $(".section5")
                    .find(".works")
                    .delay(500)
                    .animate({ top: "0%" }, 1500, "easeOutExpo");
                $(".section5")
                    .find(".item-list")
                    .delay(200)
                    .animate({ bottom: "-300%" }, 1500, "easeOutExpo");
                $(".section5")
                    .find(".works")
                    .delay(200)
                    .animate({ top: "-100%" }, 1500, "easeOutExpo");
            }
        }
    });

    $(".contact ul li").hover(function() {
        $(this)
            .find("div")
            .stop()
            .show();
    }, function() {
        $(this)
            .find("div")
            .stop()
            .hide();
    });

    //	第五屏：跟随
    (function() {
        var $im_lt_ul = $("#im_lt_ul"),
            $one = $(".one"),
            $i_ul_li = $(".i_ul_li");
        var otop = 0,
            oleft = 0;

        $im_lt_ul.hover(function() {
            $one.css({ display: "block" });
        }, function() {
            $one.css({ display: "none" });
        });

        $i_ul_li.mouseenter(function() {
            otop = $(this).position().top;
            oleft = $(this).position().left;

            $one.css({ top: otop });
            $one.css({ left: oleft });
        });
    })();


});