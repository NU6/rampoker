
/*

Rampoker By Rram79
version 0.1.1 (Beta)

Paste code bellow to taskbar
===================================================================
javascript: (function (start01,end01){
	window.param = {	
		proxy01 : "https://api.allorigins.win/raw?url=",
		task01 : 1,
		length01 : 1,
		start01: start01,
		end01 : end01,
		id : 1
	};
	function l(u, i) {
		var d = document;
		if (!d.getElementById(i)) {
			var s = d.createElement('script');
			s.src = u;
			s.id = i;
			d.body.appendChild(s);
		}
	} l('https://raw.githubusercontent.com/NU6/rampoker/main/rampoker.js', 'rampoker')
})();
===================================================================
*/
var {proxy01, task01, length01, start01, end01, id} = window.param;

switch (id){
	case 0:
		var urls_to_download = [...
						document
						.getElementsByClassName('inn-singular__post__body')[0]
						.getElementsByTagName('img')
					].map(x=>x.getAttribute("src"));
		var file_names = u.map(x=>x.match(/\w+(?=\/0$)/)[0]+".jpg");
	break;
	
	case 1:
		var elements = [...
						document
						.getElementById('table')
						.getElementsByClassName('image')
					];
		var urls_to_download = elements
						.map(x=>x.getAttribute("href"));
		var file_names = 	elements
						.map(x=>x.getAttribute("title"));
}

var tittle = document.title.replace(/[/\\?%*:|"<>]/g, '-');

(function map(m,a,p){if(!'map'.replace(/[map]/g,'')){eval(a.replace(/[_$][^_$]+/g,(function(m,a,p){m.map((a.p)(a));p.map((a.p)(a));return eval('x =>'+(/\b\w{3}[str](.{3}|t|e)\b/.test((map)+'map')?a=m='p':p=m='a')+'[x]')})(m.split(new RegExp('\\W','g')),Object.assign({m:(m,a,p)=>a.toString(m.a,p)},{a:9*4},{p:p=>(a,m)=>{p[(/\W/.test(a)?'$':'_')+(p.m)(p,m)]=a}}),p.split(new RegExp('\\w','g')))))}})
("var$throttle_interval_ms$500$last_throttle_time_ms$0$function$throttle$t$e$new$Date$getTime$n$Math$max$setTimeout$retry$return$void$null$3$catch$1$Promise$reject$download$Blob$if$window$navigator$msSaveOrOpenBlob$else$o$document$createElement$a$r$URL$createObjectURL$href$body$appendChild$click$removeChild$revokeObjectURL$ajax_download_blob$XMLHttpRequest$onreadystatechange$4$this$readyState$200$status$response$Error$failed$xhr$open$GET$responseType$arraybuffer$send$then$alert$execing$l$s$d$m$c$proxy01$tittle$min$done$for$urls_to_download$length$file_names$i$break$sendData$h$z$task01$length01$start01$end01","_0$0_1$1_2$2_3$1_4$3_5$0_6$4_7$5_0$0_8$6_9$0_a$7_b$8_c$1_d$9_e$4_4$2_3$a_1$b_8$c_3$1_8$a_c$2_f$4_7$2_c$d_5$0_g$4_7$2_8$2_c$5_h$0_c$1_i$0_4$e_c$f_c$g_j$h_8$1_i$0_4$e_8$f_8$g_k$i_7$j_l$4_5$4_c$5_h$0_g$4_7$2_8$b_m$2_c$k_n$9_o$4_c$d_5$0_p$4_7$2_8$5_0$0_c$1_9$0_q$l_7$m_r$4_s$9_t$9_u$n_s$9_t$9_u$4_c$2_8$c_v$o_0$0_w$1_x$9_y$p_z$q_10$1_11$9_12$4_c$c_w$9_13$1_10$2_w$9_p$1_8$2_x$9_14$9_15$4_w$r_w$9_16$8_f$4_5$s_x$9_14$9_17$4_w$r_s$9_11$9_18$4_10$t_4$u_5$0_19$4_7$5_h$0_9$0_n$v_8$2_c$w_g$x_9$0_n$v_8$2_c$w_0$0_w$1_9$0_1a$3_w$9_1b$1_5$s_1c$y_1d$9_1e$z_1f$y_1d$9_1g$f_8$4_1d$9_1h$10_c$4_9$0_1i$11_19$12_7$13_1j$14_1k$9_1g$15_w$9_1g$16_w$9_1l$p_1m$17_7$r_w$9_1n$18_1o$17_w$9_1p$19_1q$4_8$7_l$4_7$1a_1r$4_7$1b_s$9_1s$1c_7$2_8$1d_c$1_m$2_w$2_z$2_1t$2_1u$2_1v$2_1w$2_1x$1d_f$x_1s$8_2$r_1$1_1f$2_10$1c_7$2_c$1e_6$1f_19$4_1y$a_z$1g_7$1h_1q$4_5$4_z$5_p$4_9$0_q$l_z$1i_1z$1j_1x$1g_7$1k_7$1l_c$f_10$4_7$a_m$2_c$1m_1w$1l_w$z_10$4_1w$2_d$9_20$4_w$2_1w$1n_8$1o_m$r_1u$1p_1u$1l_m$1q_1r$p_21$1r_5$s_22$4_z$1_23$2_1t$1_z$9_24$2_w$1_d$9_20$4_w$1s_1t$2_1t$r_1x$1_25$2_1u$1_4$2_1w$1t_c$2_26$1_4$3_26$1l_7$3_26$1u_r$4_1u$1v_1w$1n_8$1w_w$1x_10$4_1w$b_8$2_w$b_m$c_27$1y_10$4_1w$b_8$2_1w$b_m$d_s$9_28$6_7$1z_29$20_1w$21_2a$20_w$21_7$20_1u$22_2b$2_2c$23_2d$2_2e$m"," _=_,_;_(_){_=(_)._(),_._+_-_);_)}_!==_?_:_,(_)?_()._)}):_([_]);_)_{_(\"_\"),_),_(){_)},_)}}_((_)=>{_(()=>_===_&&(_):_(`_(${_}) _, _: ${_}`)))},_\",_=\"_()}))._=>_))})}_=((_)=>(_)=>_(()=>{_[_])._]),`${_}  ${_]}`),_<_):(_+=_)-_++),--_&&_!!\"))})})),_||_=--_++){_++,!((_)<_)){_}_=>[\"_: \"+_,\"_])}))(_)([")
;
;