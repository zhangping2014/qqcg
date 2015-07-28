define("consumer/fastpaydialog/1.0.0/fastpaydialog",["consumer/dialog/1.0.0/dialog"],function(require,exports,modules){function slice(a,b,c){for(var d=[],e=a.length,c=c||e,f=b;c>f;f++)d.push(a[f]);return d}function extend(){for(var a,b=ArrayProto.slice.call(arguments,0),c={},d=0,e=b.length;e>d;d++)if(a=b[d])for(var f in a)c[f]=a[f];return c}function _getListData(a,b,c){var d=function(){return xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}(),e="";a=-1==a.indexOf("?")?a+"?"+e:a+e,d.open("GET",a,!0),d.send(),d.onreadystatechange=function(){4==d.readyState&&(d.status>=200&&d.status<300?"function"==typeof b&&b(d):"function"==typeof c&&c(d))}}function _concatBankListTmpl(a,b,c){for(var d,e='<div class="tab"'+(b?' style="display:none;"':"")+'>                                <p class="line">选择要添加的银行卡</p>                                <ul id="more_'+c+'" class="banks">{{liTmpl}}</ul>                            </div>',f="",g=0,h=a.length;h>g;g++)d=a[g],f+='<li class="'+(g>19?"hidden":"")+" bank "+(b||0!=g?"":"active")+'">                                <label><input name="bankCode" type="radio"'+(b||0!=g?"":"checked")+' data-bankid="'+d.bankId+'"  value="'+d.bankCode+'" />&nbsp;&nbsp;                                    <span class="box-icon"><i class="icon-bank icon-bank-'+(d.bankCode.toLowerCase()||"pab")+'" >'+d.bankName+"</i></span></label>                            </li>",g==h-1&&h>20&&(f+='<li class="moreCards" id="moreInetBankCards_'+c+'"><a>更多银行卡∨</a></li>');return e.replace(/{{liTmpl}}/g,f)}function _removeClassHidden(a){for(var b=doc.getElementById("more_"+a).childNodes,c=0;c<b.length;c++){var d=b[c];d.className.indexOf("hidden")>-1&&(d.className=d.className.replace(/hidden/g,""))}doc.getElementById("moreInetBankCards_"+a).className="hidden"}var doc=document,ArrayProto=Array.prototype,Dialog=require("consumer/dialog/1.0.0/dialog"),DialogProto=Dialog.prototype,FastPayDialog=function(a){var b=this.options=extend(FastPayDialogProto.defaultOptions,a);this.init(b)},readyState=!0,ERROR_TMPL='<div class="box-error">系统异常，请稍后再试</div>',FastPayDialogProto=FastPayDialog.prototype=extend(DialogProto,{defaultOptions:extend(DialogProto.defaultOptions,{payCardTypes:["D","C"]}),create:function(a){return dialogInstance=new FastPayDialog(a)},init:function(a){this.options.bankIconsSpriteUrl&&this.bankIconsSpritePreLoad(this.options.bankIconsSpriteUrl),DialogProto.init.call(this,a),this.createDialogContent(a)},exportData:{payCardType:"D",bankCode:"ICBC",bankId:"333"},bankIconsSpritePreLoad:function(a,b){var c=new Image;c.src=a,c.complete?("undefined"!=typeof console&&console.log("img completed"),"undefined"!=typeof b&&b.call(c)):("undefined"!=typeof console&&console.log("img is loading"+new Date),c.onload=function(){"undefined"!=typeof console&&console.log("img is loaded"+new Date),"undefined"!=typeof b&&b.call(c),c.onload=null})},createDialogContent:function(options){var dialog=this.dialog,dialogInstance=this;return _getListData(options.url,function(ajax){var containD=-1!=dialogInstance.options.payCardTypes.indexOf("D"),containC=-1!=dialogInstance.options.payCardTypes.indexOf("C"),dialogHmtl='                        <ul class="tabs-nav">'+(containD?"<li>储蓄卡</li>":"")+(containC?"<li>信用卡</li>":"")+"</ul>",IS_HIDE=!0,data=eval("("+ajax.responseText+")"),firstPayCard;try{firstPayCard=data.debitList[0],dialogInstance.exportData.bankCode=firstPayCard.bankCode,dialogInstance.exportData.payCardType=firstPayCard.payCardType,dialogInstance.exportData.bankId=firstPayCard.bankId,dialogHmtl+=containD?_concatBankListTmpl(data.debitList,!IS_HIDE,"D"):"",dialogHmtl+=containC?_concatBankListTmpl(data.creditList,IS_HIDE,"C"):"",dialogHmtl+='                            <div class="btns">                                <button id="bfpDialogConfirmBtn" class="btn btn-primary btn-confirm">确定</button>                            </div>'}catch(e){readyState=!1,dialogHmtl=ERROR_TMPL}dialogInstance.displayDilogContent(dialogHmtl),dialogInstance.bandFastPayDialogEvents(),dialogInstance.showMoreBankCards()},function(){readyState=!1,dialogInstance.displayDilogContent(ERROR_TMPL)}),dialog},confirmHandler:function(){if(readyState){var a=this.options;"undefined"!=typeof a.confirmHandler&&a.confirmHandler.call(this)}},removeDialog:function(){DialogProto.removeDialog.call(this);try{for(var a=this.dialog,b=a.getElementsByTagName("ul"),c=b[0].getElementsByTagName("li"),d=a.getElementsByTagName("input"),e=doc.getElementById("bfpDialogConfirmBtn"),f=0,g=c.length;g>f;f++)c[f].onclick=null;for(var f=0,g=d.length;g>f;f++)d[f].onclick=null;e.onclick=null}catch(h){}},bandFastPayDialogEvents:function(){function a(){for(var a=f,b=e,c=0,d=a.length;d>c;c++)a[c]&&a[c].style&&(a[c].style.display="none",b[c].className="")}for(var b=this,c=this.dialog,d=c.getElementsByTagName("ul"),e=d[0].getElementsByTagName("li"),f=function(){var a=slice(d,1),b=[];for(var c in a)b.push(a[c].parentNode);return b}(),g=c.getElementsByTagName("input"),h=["D","C"],i=g[0],j=doc.getElementById("bfpDialogConfirmBtn"),k=0,l=e.length;l>k;k++)e[k].onclick=function(c){return function(){var d=f[c].getElementsByTagName("input")[0];a(),f[c].style.display="block",e[c].className="active",d.checked=!0,b.exportData.payCardType=h[c],b.exportData.bankCode=d.value,b.exportData.bankId=d.getAttribute("data-bankid"),i.parentNode.parentNode.className="bank",d.parentNode.parentNode.className="bank active",i=d}}(k);e[0].click();for(var k=0,l=g.length;l>k;k++)g[k].onclick=function(a){return function(){var c=g[a];b.exportData.bankCode=c.value,b.exportData.bankId=c.getAttribute("data-bankid"),i.parentNode.parentNode.className="bank",c.parentNode.parentNode.className="bank active",i=c}}(k);j.onclick=function(){b.confirmHandler(),b.removeDialog()}},displayDilogContent:function(a){var b=this.dialog,c=doc.getElementById("loadingBox"),d=doc.createElement("div");d.innerHTML=a,c.style.display="none",b.insertBefore(d,c)},showMoreBankCards:function(){var a=(this.dialog,doc.getElementById("moreInetBankCards_D")),b=doc.getElementById("moreInetBankCards_C");a&&(a.onclick=function(){_removeClassHidden("D")}),b&&(b.onclick=function(){_removeClassHidden("C")})}});exports.create=FastPayDialogProto.create});