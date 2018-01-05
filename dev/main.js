(function() {

	var gifVersion = '?v=01051700';

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
		loadImg('gif/' + gifName + '.gif' + gifVersion, callback);
		$('.sec-wrap.gif_' + gifName + ' img').attr('src', 'resources/gif/' + gifName + '.gif' + gifVersion);
	};

	// 显示图块
	var showSec = function(index, callback) {
		var sec = $('.sec-wrap.gif_' + index);
		sec.show();
		instance.hide();
		if (callback) {
			callback(sec);
		}
	};

	// 隐藏图块
	var hideSec = function(index, reloadImg) {

		var sec = $('.sec-wrap.gif_' + index);
		sec.css('z-index', '1').hide();
		if (reloadImg) {
			setTimeout(function() {
				sec.find('img').removeAttr('src').attr('src', 'resources/gif/' + index + '.gif' + gifVersion);
			});
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
		back.css('opacity', '0').hide();
		text.animate({opacity: 1}, 4000, function() {
			back.show().animate({opacity: 1}, 500);
		});
	};
	// 探索按钮显示
	var showTS = function(sec, t) {
		var btns = sec.find('a.btn.fun');
		btns.hide();
		btns.css('opacity', '0');
		setTimeout(function() {
			btns.show().animate({opacity: 1}, 500);
		}, t * 1000);
	};

	// 距离
	var instance = (function() {

		var pos = -1, tt;

		var currency = function(num) {

			num = '' + num;
			for (var i = num.length - 3; i > 0; i -= 3) {
				num = num.substring(0, i) + ',' + num.substr(i);
			}
			return num;
		};

		var poses = [
			{t: 12, start: 0, end: 110, unit: '千米'},
			{t: 10, start: 0, end: 58000000, unit: '千米'},
			{t: 9, start: 0, end: 16000, unit: '万光年'},
			{t: 9, start: 16000, end: 20000, unit: '光年'},
			{t: 15, start: 0, end: 300000000, unit: '光年'},
			{t: 6, start: 300000000, end: 6000000000, unit: '亿光年'}
		];

		var increase = function() {
			pos ++;
			clearInterval(tt);
			var i = 0;
			var obj = poses[pos];
			var times = obj.t;
			var instance = obj.start;
			var each = (obj.end - instance) / times;
			var instanceText = $('.instance-text');
			tt = setInterval(function() {
				if (i < times) {
					instance = instance + each;
					i ++;
					var info = currency(Math.round(instance)) + obj.unit;
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
			hideSec(1);
			showSec(2, function(sec) {
				showTS(sec, 13);
				instance.increase();
			});
		}, 13040);
	};
	var showSec3 = function() {
		showSec(3);
		setTimeout(function() {
			hideSec(3, true);
			showSec(4);
			setTimeout(function() {
				hideSec(4, true);
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
			hideSec(7, true);
			showSec(8);
			setTimeout(function() {
				hideSec(8, true);
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
			hideSec(11, true);
			showSec(12);
			setTimeout(function() {
				hideSec(12, true);
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
			hideSec(15, true);
			showSec(16);
			setTimeout(function() {
				hideSec(16, true);
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
			hideSec(19, true);
			showSec(20);
			setTimeout(function() {
				hideSec(20, true);
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
			hideSec(22);
			showSec(23, function(sec) {
				instance.show();
				setTimeout(function() {
					instance.hide();
				}, 500);
				showJG(sec);
			});
			setTimeout(function() {
				hideSec(23);
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
			hideSec(2);
			showSec3();
		});
		$('.sec-wrap.gif_2 .btn.fun.b').click(function() {
			hideSec(2);
			showSec(6, function(sec) {
				showTS(sec, 5);
				instance.increase();
			});
		});

		$('.sec-wrap.gif_5 .btn.back').click(function() {
			hideSec(5, true);
			showSec('4fan');
			setTimeout(function() {
				hideSec('4fan', true);
				showSec('3fan');
				setTimeout(function() {
					hideSec('3fan', true);
					showSec(2, function() {
						instance.show();
					}, true);
				}, 1080);
			}, 1040);
		});

		$('.sec-wrap.gif_6 .btn.fun.a').click(function() {
			hideSec(6);
			showSec7();
		});
		$('.sec-wrap.gif_6 .btn.fun.b').click(function() {
			hideSec(6);
			showSec(10, function(sec) {
				showTS(sec, 2);
				instance.increase();
			});
		});

		$('.sec-wrap.gif_9 .btn.back').click(function() {
			hideSec(9, true);
			showSec('8fan');
			setTimeout(function() {
				hideSec('8fan', true);
				showSec('7fan');
				setTimeout(function() {
					hideSec('7fan', true);
					showSec(6, function() {
						instance.show();
					}, true);
				}, 1080);
			}, 1080);
		});

		$('.sec-wrap.gif_10 .btn.fun.a').click(function() {
			hideSec(10);
			showSec11();
		});
		$('.sec-wrap.gif_10 .btn.fun.b').click(function() {
			hideSec(10);
			showSec(14, function(sec) {
				showTS(sec, 2);
				instance.increase();
			});
		});

		$('.sec-wrap.gif_13 .btn.back').click(function() {
			hideSec(13, true);
			showSec('12fan');
			setTimeout(function() {
				hideSec('12fan', true);
				showSec('11fan');
				setTimeout(function() {
					hideSec('11fan', true);
					showSec(10, function() {
						instance.show();
					}, true);
				}, 1080);
			}, 2070);
		});

		$('.sec-wrap.gif_14 .btn.fun.a').click(function() {
			hideSec(14);
			showSec15();
		});
		$('.sec-wrap.gif_14 .btn.fun.b').click(function() {
			hideSec(14);
			showSec(18, function(sec) {
				showTS(sec, 2);
				instance.increase();
			}, true);
		});

		$('.sec-wrap.gif_17 .btn.back').click(function() {
			hideSec(17, true);
			showSec('16fan');
			setTimeout(function() {
				hideSec('16fan', true);
				showSec('15fan');
				setTimeout(function() {
					hideSec('15fan', true);
					showSec(14, function() {
						instance.show();
					}, true);
				}, 2000);
			}, 1000);
		});

		$('.sec-wrap.gif_18 .btn.fun.a').click(function() {
			hideSec(18);
			showSec19();
		});
		$('.sec-wrap.gif_18 .btn.fun.b').click(function() {
			hideSec(18);
			showSec22();
		});

		$('.sec-wrap.gif_21 .btn.back').click(function() {
			hideSec(21, true);
			showSec('20fan');
			setTimeout(function() {
				hideSec('20fan', true);
				showSec('19fan');
				setTimeout(function() {
					hideSec('19fan', true);
					showSec(18, function() {
						instance.show();
					});
				}, 1080);
			}, 90);
		});

		$('.sec-wrap.gif_24 .anc').click(function() {
			hideSec(24);
			showSec(25);
		});
	});
}());