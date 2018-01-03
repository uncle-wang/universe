(function() {

	// 加载图片
	var loadImg = function(imgPath, callback) {
		var url = 'resources/' + imgPath;
		var img = new Image();
		img.src = url;
		if (img.complete) {
			if (callback) {
				callback();
			}
		}
		else {
			img.onload = function() {
				if (callback) {
					callback();
				}
				img.onload = null;
			};
		}
	};

	// 加载gif图片
	var loadGif = function(gifName, callback) {
		loadImg('gif/' + gifName + '.gif', callback);
	};

	// 显示图块
	var showSec = function(index, callback) {
		var sel = '.gif_' + index;
		var secList = $('.sec-wrap').not(sel);
		var sec = $('.sec-wrap').filter(sel);
		var img = sec.find('img');
		img.removeAttr('src');
		img.attr('src', 'resources/gif/' + index + '.gif');
		secList.css('z-index', '1');
		sec.show();
		instance.hide();
		setTimeout(function() {
			secList.hide();
		}, 30);
		if (callback) {
			callback(sec);
		}
	};

	// 计算屏幕的尺寸以设置gif尺寸
	var setGifSize = function() {
		var winWidth  = $(window).width();
		var winHeight = $(window).height();
		var winScale = winHeight / winWidth;
		var gifScale = 417 / 235;
		var style = $('#gif_style');
		if (gifScale > winScale) {
			var width = winHeight / gifScale;
			style.html('.sec-wrap img {width: 100%;}');
		}
		else {
			var height = winWidth * gifScale;
			var marginTop = (winHeight - height) / 2;
			style.html('.sec-wrap img {width: ' + (winHeight / gifScale) + 'px;}');
		}
	};

	// 初始化
	var init = function() {
		loadGif('1', function() {
			showSec1();
			document.querySelector('.process').style.display = 'none';
			loadImg('image/icon_dot.png');
			loadImg('image/icon_star.png');
			loadGif('2', function() {
				loadGif('3');
				loadGif('4');
				loadGif('5');
				loadGif('4fan');
				loadGif('3fan');
				loadGif('6', function() {
					loadGif('7');
					loadGif('8');
					loadGif('9');
					loadGif('8fan');
					loadGif('7fan');
					loadGif('10', function() {
						loadGif('11');
						loadGif('12');
						loadGif('13');
						loadGif('12fan');
						loadGif('11fan');
						loadGif('14', function() {
							loadGif('15');
							loadGif('16');
							loadGif('17');
							loadGif('16fan');
							loadGif('15fan');
							loadGif('18', function() {
								loadGif('19');
								loadGif('20');
								loadGif('21');
								loadGif('20fan');
								loadGif('19fan');
								loadGif('22', function() {
									loadGif('23');
									loadGif('24');
									loadGif('25');
								});
							});
						});
					});
				});
			});
		});
	};

	// 极光文字及按钮显示
	var showJG = function(sec) {
		var text = sec.find('.text');
		var back = sec.find('.btn.back');
		text.css('opacity', '0');
		back.css('opacity', '0');
		text.animate({opacity: 1}, 4000, function() {
			back.animate({opacity: 1}, 500);
		});
	};

	// 距离
	var instance = (function() {

		var pos = -1, tt;

		var poses = [
			{t: 22, start: 0, end: 110, unit: [{name: '千米', fixed: 0}]},
			{t: 12, start: 0, end: 5800, unit: [{name: '万千米', fixed: 0}]},
			{t: 12, start: 0, end: 16000, unit: [{name: '光年', fixed: 0}, {name: '万光年', fixed: 2}]},
			{t: 12, start: 1.6, end: 2, unit: [{name: '万光年', fixed: 2}]},
			{t: 13, start: 0, end: 30000, unit: [{name: '万光年', fixed: 0}, {name: '亿光年', fixed: 2}]},
			{t: 2, start: 2, end: 60, unit: [{name: '亿光年', fixed: 0}]}
		];

		var increase = function() {
			pos ++;
			clearInterval(tt);
			var i = 0;
			var obj = poses[pos];
			var times = obj.t * 3;
			var instance = obj.start;
			var each = (obj.end - instance) / times;
			var instanceText = $('.instance-text');
			tt = setInterval(function() {
				if (i < times) {
					instance = instance + each;
					i ++;
					var info;
					if (obj.unit.length === 2 && instance >= 10000) {
						info = (instance / 10000).toFixed(obj.unit[1].fixed) + obj.unit[1].name;
					}
					else {
						info = instance.toFixed(obj.unit[0].fixed) + obj.unit[0].name;
					}
					instanceText.text(info + '左右');
				}
				else {
					clearInterval(tt);
					if (pos >= poses.length - 1) {
						_hide();
					}
				}
			}, 333.33);
			_show();
		};
		var _show = function() {
			$('.instance-wrap').show();
		};
		var _hide = function() {
			$('.instance-wrap').hide();
		};
		return {increase: increase, show: _show, hide: _hide};
	}());

	// 显示sec
	var showSec1 = function() {
		showSec(1, function(sec) {
			sec.find('.text').css('opacity', '0');
			sec.find('.text.a').animate({opacity: 1}, 5000, function() {
				sec.find('.text.b').animate({opacity: 1}, 5000);
			});
		});
		setTimeout(function() {
			showSec(2, function() {
				instance.increase();
			});
		}, 21090);
	};
	var showSec3 = function() {
		showSec(3);
		setTimeout(function() {
			showSec(4);
			setTimeout(function() {
				showSec5();
			}, 1040);
		}, 1080);
	};
	var showSec5 = function() {
		showSec(5, function(sec) {
			showJG(sec);
		});
	};
	var showSec7 = function() {
		showSec(7);
		setTimeout(function() {
			showSec(8);
			setTimeout(function() {
				showSec9();
			}, 1080);
		}, 1080);
	};
	var showSec9 = function() {
		showSec(9, function(sec) {
			showJG(sec);
		});
	};
	var showSec11 = function() {
		showSec(11);
		setTimeout(function() {
			showSec(12);
			setTimeout(function() {
				showSec13();
			}, 2070);
		}, 1080);
	};
	var showSec13 = function() {
		showSec(13, function(sec) {
			showJG(sec);
		});
	};
	var showSec15 = function() {
		showSec(15);
		setTimeout(function() {
			showSec(16);
			setTimeout(function() {
				showSec17();
			}, 1000);
		}, 2000);
	};
	var showSec17 = function() {
		showSec(17, function(sec) {
			showJG(sec);
		});
	};
	var showSec19 = function() {
		showSec(19);
		setTimeout(function() {
			showSec(20);
			setTimeout(function() {
				showSec21();
			}, 90);
		}, 1080);
	};
	var showSec21 = function() {
		showSec(21, function(sec) {
			showJG(sec);
		});
	};
	var showSec22 = function() {
		showSec(22, function() {
			instance.increase();
		});
		setTimeout(function() {
			showSec(23, function(sec) {
				showJG(sec);
			});
			setTimeout(function() {
				showSec(24, function(sec) {
					var text = sec.find('.text');
					text.css('opacity', '0');
					text.animate({opacity: 1}, 1000);
				});
			}, 11080);
		}, 2000);
	};

	$(document).ready(function() {

		init();
		setGifSize();
		$(window).resize(function() {
			setGifSize();
		});

		$('.sec-wrap.gif_2 .btn.fun.a').click(function() {
			showSec3();
		});
		$('.sec-wrap.gif_2 .btn.fun.b').click(function() {
			showSec(6, function() {
				instance.increase();
			});
		});

		$('.sec-wrap.gif_5 .btn.back').click(function() {
			showSec('4fan');
			setTimeout(function() {
				showSec('3fan');
				setTimeout(function() {
					showSec(2, function() {
						instance.show();
					});
				}, 1080);
			}, 1040);
		});

		$('.sec-wrap.gif_6 .btn.fun.a').click(function() {
			showSec7();
		});
		$('.sec-wrap.gif_6 .btn.fun.b').click(function() {
			showSec(10, function() {
				instance.increase();
			});
		});

		$('.sec-wrap.gif_9 .btn.back').click(function() {
			showSec('8fan');
			setTimeout(function() {
				showSec('7fan');
				setTimeout(function() {
					showSec(6, function() {
						instance.show();
					});
				}, 1080);
			}, 1080);
		});

		$('.sec-wrap.gif_10 .btn.fun.a').click(function() {
			showSec11();
		});
		$('.sec-wrap.gif_10 .btn.fun.b').click(function() {
			showSec(14, function() {
				instance.increase();
			});
		});

		$('.sec-wrap.gif_13 .btn.back').click(function() {
			showSec('12fan');
			setTimeout(function() {
				showSec('11fan');
				setTimeout(function() {
					showSec(10, function() {
						instance.show();
					});
				}, 1080);
			}, 2070);
		});

		$('.sec-wrap.gif_14 .btn.fun.a').click(function() {
			showSec15();
		});
		$('.sec-wrap.gif_14 .btn.fun.b').click(function() {
			showSec(18, function() {
				instance.increase();
			});
		});

		$('.sec-wrap.gif_17 .btn.back').click(function() {
			showSec('16fan');
			setTimeout(function() {
				showSec('15fan');
				setTimeout(function() {
					showSec(14, function() {
						instance.show();
					});
				}, 2000);
			}, 1000);
		});

		$('.sec-wrap.gif_18 .btn.fun.a').click(function() {
			showSec19();
		});
		$('.sec-wrap.gif_18 .btn.fun.b').click(function() {
			showSec22();
		});

		$('.sec-wrap.gif_21 .btn.back').click(function() {
			showSec('20fan');
			setTimeout(function() {
				showSec('19fan');
				setTimeout(function() {
					showSec(18, function() {
						instance.show();
					});
				}, 1080);
			}, 90);
		});

		$('.sec-wrap.gif_24 .anc').click(function() {
			showSec(25);
		});
	});
}());