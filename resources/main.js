!function(){var n=function(n,t){var i="resources/"+n,c=new Image;c.src=i,c.complete?t&&t():c.onload=function(){t&&t(),c.onload=null}},t=function(t,i){n("gif/"+t+".gif?v=01031601",i),$(".sec-wrap.gif_"+t+" img").attr("src","resources/gif/"+t+".gif?v=01031601")},i=function(n,t){var i=$(".sec-wrap.gif_"+n);i.show(),a.hide(),t&&t(i)},c=function(n,t){var i=$(".sec-wrap.gif_"+n);i.css("z-index","1").hide(),t&&setTimeout(function(){i.find("img").removeAttr("src").attr("src","resources/gif/"+n+".gif?v=01031601")})},e=function(){var n=$(window).width(),t=$(window).height(),i=t/n,c=$("#gif_style");if(417/235>i){c.html(".sec-wrap img {width: 100%;}")}else{c.html(".sec-wrap img {width: "+t/(417/235)+"px;}")}},f=function(){t("1",function(){s(),document.querySelector(".process").style.display="none",n("image/icon_dot.png"),n("image/icon_star.png"),t("2",function(){t("3"),t("4"),t("5"),t("4fan"),t("3fan"),t("6",function(){t("7"),t("8"),t("9"),t("8fan"),t("7fan"),t("10",function(){t("11"),t("12"),t("13"),t("12fan"),t("11fan"),t("14",function(){t("15"),t("16"),t("17"),t("16fan"),t("15fan"),t("18",function(){t("19"),t("20"),t("21"),t("20fan"),t("19fan"),t("22",function(){t("23"),t("24"),t("25")})})})})})})})},o=function(n){var t=n.find(".text"),i=n.find(".btn.back");t.css("opacity","0"),i.css("opacity","0"),t.animate({opacity:1},4e3,function(){i.animate({opacity:1},500)})},u=function(n,t){var i=n.find("a.btn.fun");i.hide(),i.css("opacity","0"),setTimeout(function(){i.show().animate({opacity:1},500)},1e3*t)},a=function(){var n,t=-1,i=[{t:15,start:0,end:110,unit:[{name:"千米",fixed:0}]},{t:12,start:0,end:5800,unit:[{name:"万千米",fixed:0}]},{t:12,start:0,end:16e3,unit:[{name:"光年",fixed:0},{name:"万光年",fixed:2}]},{t:12,start:1.6,end:2,unit:[{name:"万光年",fixed:2}]},{t:13,start:0,end:3e4,unit:[{name:"万光年",fixed:0},{name:"亿光年",fixed:2}]},{t:2,start:2,end:60,unit:[{name:"亿光年",fixed:0}]}],c=function(){t++,clearInterval(n);var c=0,o=i[t],u=3*o.t,a=o.start,s=(o.end-a)/u,r=$(".instance-text");n=setInterval(function(){if(c<u){a+=s,c++;var e;e=2===o.unit.length&&a>=1e4?(a/1e4).toFixed(o.unit[1].fixed)+o.unit[1].name:a.toFixed(o.unit[0].fixed)+o.unit[0].name,r.text(e+"左右")}else clearInterval(n),t>=i.length-1&&f()},333.33),e()},e=function(){$(".instance-wrap").show()},f=function(){$(".instance-wrap").hide()};return{increase:c,show:e,hide:f}}(),s=function(){i(1,function(n){n.find(".text").css("opacity","0"),n.find(".text.a").animate({opacity:1},5e3,function(){n.find(".text.b").animate({opacity:1},5e3)})}),setTimeout(function(){c(1),i(2,function(n){u(n,13),a.increase()})},13040)},r=function(){i(3),setTimeout(function(){c(3,!0),i(4),setTimeout(function(){c(4,!0),m()},1040)},1080)},m=function(){i(5,function(n){o(n)})},d=function(){i(7),setTimeout(function(){c(7,!0),i(8),setTimeout(function(){c(8,!0),w()},1080)},1080)},w=function(){i(9,function(n){o(n)})},p=function(){i(11),setTimeout(function(){c(11,!0),i(12),setTimeout(function(){c(12,!0),g()},2070)},1080)},g=function(){i(13,function(n){o(n)})},l=function(){i(15),setTimeout(function(){c(15,!0),i(16),setTimeout(function(){c(16,!0),b()},1e3)},2e3)},b=function(){i(17,function(n){o(n)})},T=function(){i(19),setTimeout(function(){c(19,!0),i(20),setTimeout(function(){c(20,!0),h()},90)},1080)},h=function(){i(21,function(n){o(n)})},k=function(){i(22,function(){a.increase()}),setTimeout(function(){c(22),i(23,function(n){o(n)}),setTimeout(function(){c(23),i(24,function(n){var t=n.find(".text");t.css("opacity","0"),t.animate({opacity:1},1e3)})},11080)},2e3)};$(document).ready(function(){f(),e(),$(window).resize(function(){e()}),$(".sec-wrap.gif_2 .btn.fun.a").click(function(){c(2),r()}),$(".sec-wrap.gif_2 .btn.fun.b").click(function(){c(2),i(6,function(n){u(n,5),a.increase()})}),$(".sec-wrap.gif_5 .btn.back").click(function(){c(5,!0),i("4fan"),setTimeout(function(){c("4fan",!0),i("3fan"),setTimeout(function(){c("3fan",!0),i(2,function(){a.show()})},1080)},1040)}),$(".sec-wrap.gif_6 .btn.fun.a").click(function(){c(6),d()}),$(".sec-wrap.gif_6 .btn.fun.b").click(function(){c(6),i(10,function(n){u(n,2),a.increase()})}),$(".sec-wrap.gif_9 .btn.back").click(function(){c(9,!0),i("8fan"),setTimeout(function(){c("8fan",!0),i("7fan"),setTimeout(function(){c("7fan",!0),i(6,function(){a.show()})},1080)},1080)}),$(".sec-wrap.gif_10 .btn.fun.a").click(function(){c(10),p()}),$(".sec-wrap.gif_10 .btn.fun.b").click(function(){c(10),i(14,function(n){u(n,2),a.increase()})}),$(".sec-wrap.gif_13 .btn.back").click(function(){c(13,!0),i("12fan"),setTimeout(function(){c("12fan",!0),i("11fan"),setTimeout(function(){c("11fan",!0),i(10,function(){a.show()})},1080)},2070)}),$(".sec-wrap.gif_14 .btn.fun.a").click(function(){c(14),l()}),$(".sec-wrap.gif_14 .btn.fun.b").click(function(){c(14),i(18,function(n){u(n,2),a.increase()})}),$(".sec-wrap.gif_17 .btn.back").click(function(){c(17,!0),i("16fan"),setTimeout(function(){c("16fan",!0),i("15fan"),setTimeout(function(){c("15fan",!0),i(14,function(){a.show()})},2e3)},1e3)}),$(".sec-wrap.gif_18 .btn.fun.a").click(function(){c(18),T()}),$(".sec-wrap.gif_18 .btn.fun.b").click(function(){c(18),k()}),$(".sec-wrap.gif_21 .btn.back").click(function(){c(21,!0),i("20fan"),setTimeout(function(){c("20fan",!0),i("19fan"),setTimeout(function(){c("19fan",!0),i(18,function(){a.show()})},1080)},90)}),$(".sec-wrap.gif_24 .anc").click(function(){c(24),i(25)})})}();