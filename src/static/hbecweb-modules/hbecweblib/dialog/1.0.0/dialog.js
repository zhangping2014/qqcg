define("pafweblib/dialog/1.0.0/dialog",["$"],function(a,b,c){var d=a("$"),e={trigger:null,content:"empty",mask:!0,close:!0,classPrefix:"paf-dialog",width:500,height:300,effect:"none"},f=function(a){var b=this;b.options=d.extend({},e,a),b.options.trigger&&d(b.options.trigger).on("click",function(){b.show()})};d.extend(f.prototype,{show:function(){this.render(),this.bindEvents()},close:function(){d(".paf-dialog-container").remove()},render:function(){var a=['<div class="paf-dialog-container">',"{{mask}}",'<div class="paf-dialog-main" style="width:{{width}}px;height:{{height}}px;margin-left:-{{marginLeft}}px;margin-top:-{{marginTop}}px;">',"{{close}}",'<div class="paf-dialog-content">{{content}}</div>',"</div>","</div>"].join(""),b=this;a=b.options.mask?a.replace("{{mask}}",'<div class="paf-dialog-mask"></div>'):a.replace("{{mask}}",""),a=b.options.close?a.replace("{{close}}",'<div class="dialog-close"></div>'):a.replace("{{close}}","");var c=(this.options.width+10)/2,e=(this.options.height+10)/2;a=a.replace("{{width}}",this.options.width).replace("{{height}}",this.options.height).replace("{{marginLeft}}",c).replace("{{marginTop}}",e).replace("{{content}}",b.options.content),d("body").prepend(a)},bindEvents:function(){var a=this;d(".paf-dialog-main .dialog-close").on("click",function(){a.cancleHandler.call(a)}),d(".paf-dialog-confirm").on("click",function(){a.confirmHandler.call(a)}),d(".paf-dialog-cancle").on("click",function(){a.cancleHandler.call(a)})},confirmHandler:function(){var a=this;"undefined"!=typeof a.options.confirmHandler&&a.options.confirmHandler.call(this,a)},cancleHandler:function(){var a=this;a.close(),"undefined"!=typeof a.options.cancleHandler&&a.options.cancleHandler.call(this,a)}}),c.exports=f});