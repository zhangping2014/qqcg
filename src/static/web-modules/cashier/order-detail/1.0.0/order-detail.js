define("cashier/order-detail/1.0.0/order-detail",["$","helper","./order-detail.handlebars","Formatter"],function(a,b,c){var d=a("$"),e=(a("helper"),a("./order-detail.handlebars")),f=a("Formatter"),g={setActualAmount:function(a){(!a||0>a)&&(a=0),d(".actualAmount").html(f.formatMoney(a/1e6,2))}},h=function(a){var b=d.Deferred();return a=a||{},d.ajax({dataType:"JSON",type:"GET",url:["/cashier-common/order-details/",a.transId].join("")}).done(function(c){if("000000"==c.code){c.data.cashierPayTypeV3?(c.data.isCoupon=!0,c.data.shortName=c.data.cashierPayTypeV3.discountName,c.data.balance=c.data.cashierPayTypeV3.discountAmount,c.data.description=c.data.cashierPayTypeV3.discountDescription,c.data.actualAmount=c.data.orderAmt-c.data.cashierPayTypeV3.discountAmount):c.data.actualAmount=c.data.orderAmt;var f=e(c.data);a.el&&d(a.el).html(f),b.resolve(g,c.data,f)}else{b.reject(c);var h=["错误码:",c.code,",错误消息为:",c.message].join("");console&&console.debug(h)}}).fail(function(a){b.reject(a);var c=["错误码:",a.status,",错误消息为:",a.statusText].join("");console&&console.debug(c)}),b.promise()};c.exports=h}),define("cashier/order-detail/1.0.0/order-detail.handlebars",["gallery/handlebars/1.0.2/runtime"],function(a,b,c){var d=a("gallery/handlebars/1.0.2/runtime"),e=d.template;c.exports=e(function(a,b,c,d,e){function f(a,b){var d,e,f,g="";return g+='\n                <div class="detail-order-row">\n                    <span id="toggleCoupon" class="text">',(d=c.shortName)?d=d.call(a,{hash:{},data:b}):(d=a.shortName,d=typeof d===l?d.apply(a):d),g+=m(d)+'<img src="/static/cashier/largeamount/src/arrow-down.png" alt="展开详细"></span>\n                    <span class="money">- ',f={hash:{},data:b},g+=m((d=c.money,d?d.call(a,a.balance,f):n.call(a,"money",a.balance,f)))+'<small>元</small></span>\n                </div>\n                <div id="targetCoupon" class="detail-expand fn-hide">\n                    <span class="row">',(e=c.description)?e=e.call(a,{hash:{},data:b}):(e=a.description,e=typeof e===l?e.apply(a):e),g+=m(e)+"</span>\n                </div>\n            "}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||{};for(var g in a.helpers)c[g]=c[g]||a.helpers[g];e=e||{};var h,i,j,k="",l="function",m=this.escapeExpression,n=c.helperMissing,o=this;return k+='<div class="cashier-order-detail">\n    <div class="container">\n        <div class="detail-order-row">\n            <span id="toggleDetail" class="text">',(h=c.orderDetailName)?h=h.call(b,{hash:{},data:e}):(h=b.orderDetailName,h=typeof h===l?h.apply(b):h),k+=m(h)+'<img src="/static/cashier/largeamount/src/arrow-down.png" alt="展开详细"></span>\n            <span class="money">',j={hash:{},data:e},k+=m((h=c.money,h?h.call(b,b.orderAmt,j):n.call(b,"money",b.orderAmt,j)))+'<small>元</small></span>\n        </div>\n        <div id="targetDetail" class="detail-expand fn-hide">\n            <span class="row"><label>商户号:</label>',j={hash:{},data:e},k+=m((h=c["default"],h?h.call(b,b.merchantId,"-",j):n.call(b,"default",b.merchantId,"-",j)))+'</span>\n            <span class="row"><label>订单号:</label>',j={hash:{},data:e},k+=m((h=c["default"],h?h.call(b,b.merchantOrderNo,"-",j):n.call(b,"default",b.merchantOrderNo,"-",j)))+'</span>\n            <span class="row"><label>交易时间:</label>',j={hash:{},data:e},k+=m((h=c["default"],h?h.call(b,b.createTime,"-",j):n.call(b,"default",b.createTime,"-",j)))+'</span>\n            <span class="row"><label>交易类型:</label>',j={hash:{},data:e},k+=m((h=c["default"],h?h.call(b,b.txType,"-",j):n.call(b,"default",b.txType,"-",j)))+'</span>\n        </div>\n        <div id="coupon">\n            ',i=c["if"].call(b,b.isCoupon,{hash:{},inverse:o.noop,fn:o.program(1,f,e),data:e}),(i||0===i)&&(k+=i),k+='\n        </div>\n        <div class="detail-order-row last">\n            <span class="text">应付总额</span>\n            <span class="money"><em class="actualAmount">',j={hash:{},data:e},k+=m((h=c.money,h?h.call(b,b.actualAmount,j):n.call(b,"money",b.actualAmount,j)))+"</em><small>元</small></span>\n        </div>\n    </div>\n</div>"})});