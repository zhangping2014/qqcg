define("pafweblib/pagination/1.0.0/pagination",["$","./pagination.handlebars"],function(a,b,c){var d=a("$"),e=d.noop,f=a("./pagination.handlebars"),g={curr:1,total:10,type:"default",onRender:e},h=function(a,b){this.pagination=d(a),this.options=d.extend({},g,b),this.render(this.options.curr,this.options.total),this.initEvent()};h.prototype={render:function(a,b){var c,d,e=this.options,g=[],h=[];if(a=1>a?1:a,b=1>b?1:b,a=a>b?b:a,1==a?g.push({isPrevBtn:!0,disabledClass:"disabled",prePageItem:0},{isPageItem:!0,activeClass:"paf-pagination-active",pageItem:1}):g.push({isPrevBtn:!0,disabledClass:"",prePageItem:a-1},{isPageItem:!0,activeClass:"",pageItem:1}),h.push(g[0]),b>1){a>3&&b>5&&g.push({isEllipsis:!0}),2>a?(c=0,d=3,a+d>b&&(d=b-a)):2==a?(c=0,d=2,a+d>b&&(d=b-a)):b-1>a?(c=1,d=1):b>a?(c=2,d=0,5>b&&(c=b-3)):(c=3,d=0,5>b&&(c=b-2));for(var i=c;i>0;i--)g.push({isPageItem:!0,activeClass:"",pageItem:a-i});a>1&&g.push({isPageItem:!0,activeClass:"paf-pagination-active",pageItem:a});for(var i=1;d+1>i;i++)g.push({isPageItem:!0,activeClass:"",pageItem:a+i});b-1>a+d&&g.push({isEllipsis:!0},{isPageItem:!0,activeClass:"",pageItem:b}),a+d==b-1&&g.push({isPageItem:!0,activeClass:"",pageItem:b})}a==b?g.push({isNextBtn:!0,disabledClass:"disabled",nextPageItem:0}):g.push({isNextBtn:!0,disabledClass:"",nextPageItem:a+1}),h.push(g[g.length-1]),g.push({isPageInfo:!0,curr:a,total:b}),h.push(g[g.length-1]),"simple"==e.type?this.pagination.html(f({pageElems:h})):this.pagination.html(f({pageElems:g})),e.onRender&&e.onRender.call(this,a,b)},initEvent:function(){var a=this,b=this.options.total;this.pagination.on("click","a",function(){var c=d(this),e=1*c.data("pageitem");return c.hasClass("disabled")?!1:(a.render(e,b),!1)})}},c.exports=h}),define("pafweblib/pagination/1.0.0/pagination.handlebars",["gallery/handlebars/1.0.2/runtime"],function(a,b,c){var d=a("gallery/handlebars/1.0.2/runtime"),e=d.template;c.exports=e(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n    ",d=c["if"].call(a,a.isPrevBtn,{hash:{},inverse:p.noop,fn:p.program(2,g,b),data:b}),(d||0===d)&&(e+=d),e+="\n\n    ",d=c["if"].call(a,a.isEllipsis,{hash:{},inverse:p.noop,fn:p.program(4,h,b),data:b}),(d||0===d)&&(e+=d),e+="\n\n    ",d=c["if"].call(a,a.isPageItem,{hash:{},inverse:p.noop,fn:p.program(6,i,b),data:b}),(d||0===d)&&(e+=d),e+="\n\n    ",d=c["if"].call(a,a.isNextBtn,{hash:{},inverse:p.noop,fn:p.program(8,j,b),data:b}),(d||0===d)&&(e+=d),e+="\n\n    ",d=c["if"].call(a,a.isPageInfo,{hash:{},inverse:p.noop,fn:p.program(10,k,b),data:b}),(d||0===d)&&(e+=d),e+="\n"}function g(a,b){var d,e="";return e+='\n        <a href="#" class="paf-pagination-btn paf-pagination-prev ',(d=c.disabledClass)?d=d.call(a,{hash:{},data:b}):(d=a.disabledClass,d=typeof d===n?d.apply(a):d),e+=o(d)+'" data-pageItem=',(d=c.prePageItem)?d=d.call(a,{hash:{},data:b}):(d=a.prePageItem,d=typeof d===n?d.apply(a):d),e+=o(d)+">上一页</a>\n    "}function h(){return'\n        <span class="paf-pagination-ellipsis">...</span>\n    '}function i(a,b){var d,e="";return e+='\n        <a href="#" class="paf-pagination-item ',(d=c.activeClass)?d=d.call(a,{hash:{},data:b}):(d=a.activeClass,d=typeof d===n?d.apply(a):d),e+=o(d)+'" data-pageItem=',(d=c.pageItem)?d=d.call(a,{hash:{},data:b}):(d=a.pageItem,d=typeof d===n?d.apply(a):d),e+=o(d)+">",(d=c.pageItem)?d=d.call(a,{hash:{},data:b}):(d=a.pageItem,d=typeof d===n?d.apply(a):d),e+=o(d)+"</a>\n    "}function j(a,b){var d,e="";return e+='\n        <a href="#" class="paf-pagination-btn paf-pagination-next ',(d=c.disabledClass)?d=d.call(a,{hash:{},data:b}):(d=a.disabledClass,d=typeof d===n?d.apply(a):d),e+=o(d)+'" data-pageItem=',(d=c.nextPageItem)?d=d.call(a,{hash:{},data:b}):(d=a.nextPageItem,d=typeof d===n?d.apply(a):d),e+=o(d)+">下一页</a>\n    "}function k(a,b){var d,e="";return e+='\n        <span class="paf-pagination-info"><span>',(d=c.curr)?d=d.call(a,{hash:{},data:b}):(d=a.curr,d=typeof d===n?d.apply(a):d),e+=o(d)+"</span>/<span>",(d=c.total)?d=d.call(a,{hash:{},data:b}):(d=a.total,d=typeof d===n?d.apply(a):d),e+=o(d)+"</span>页</span>\n    "}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||{};for(var l in a.helpers)c[l]=c[l]||a.helpers[l];e=e||{};var m,n="function",o=this.escapeExpression,p=this;return m=c.each.call(b,b.pageElems,{hash:{},inverse:p.noop,fn:p.program(1,f,e),data:e}),m||0===m?m:""})});