!function(){define("consumer/hqbao-index/1.0.0/hqbao-index",["jquery/jquery/1.10.2/jquery","arale/calendar/1.0.0/calendar","$","gallery/moment/2.0.0/moment","arale/position/1.0.1/position","arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events","arale/iframe-shim/1.0.2/iframe-shim"],function(a,b){function c(){e("#start-cal").val(e("#bdate").val()),e("#end-cal").val(e("#edate").val());var a="2013-01-01",b=(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),c=new f({trigger:"#start-cal",range:[a,b]}),d=new f({trigger:"#end-cal",range:[e("#start-cal").val(),b]});c.on("selectDate",function(a){d.range([a,b])}),d.on("selectDate",function(b){c.range([a,b])})}function d(){var a="",b="",c="";e("#search-deal").on("click",function(){a=e("#start-cal").val(),b=e("#end-cal").val(),c=e("#search-type").val(),window.location.href="/hqbao?type="+c+"&startTime="+a+"&endTime="+b})}var e=a("jquery/jquery/1.10.2/jquery"),f=a("arale/calendar/1.0.0/calendar");b.init=function(){c(),d()}})}();