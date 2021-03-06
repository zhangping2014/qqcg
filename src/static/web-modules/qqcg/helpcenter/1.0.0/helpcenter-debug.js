define("consumer/helpcenter/1.0.0/helpcenter-debug", [ "jquery/jquery/1.10.2/jquery-debug", "./htQ-debug.handlebars", "./htQ-debug.handlebars", "./registerQ-debug.handlebars", "./passwordQ-debug.handlebars", "./assetQ-debug.handlebars", "./payQ-debug.handlebars", "./safeQ-debug.handlebars", "./integralQ-debug.handlebars", "./hqbaoQ-debug.handlebars", "./jqbaoQ-debug.handlebars", "./safewidgetQ-debug.handlebars", "./lifepayQ-debug.handlebars", "./otherQ-debug.handlebars" ], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.2/jquery-debug");
    var helpcenter = {
        init: function() {
            var $answers = $("#answers"), questions, self = this, curQustion = require("./htQ-debug.handlebars");
            questions = self.setQuestions();
            $answers.empty().html(curQustion());
            $(".questions").on("click", "li", function() {
                var $this = $(this);
                $this.addClass("curr").siblings().removeClass("curr");
                var questionType = $this.attr("id");
                $.each(questions, function(key, value) {
                    if (questionType == key) {
                        curQustion = value;
                    }
                });
                $answers.empty().html(curQustion({
                    staticFileRoot: window.staticFileRoot
                }));
            });
        },
        setQuestions: function() {
            return {
                htQ: require("./htQ-debug.handlebars"),
                registerQ: require("./registerQ-debug.handlebars"),
                passwordQ: require("./passwordQ-debug.handlebars"),
                assetQ: require("./assetQ-debug.handlebars"),
                payQ: require("./payQ-debug.handlebars"),
                safeQ: require("./safeQ-debug.handlebars"),
                integralQ: require("./integralQ-debug.handlebars"),
                hqbaoQ: require("./hqbaoQ-debug.handlebars"),
                jqbaoQ: require("./jqbaoQ-debug.handlebars"),
                safewidgetQ: require("./safewidgetQ-debug.handlebars"),
                lifepayQ: require("./lifepayQ-debug.handlebars"),
                otherQ: require("./otherQ-debug.handlebars")
            };
        }
    };
    module.exports = helpcenter;
});

define("consumer/helpcenter/1.0.0/htQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">热点问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>作为中国平安保险(集团)股份有限公司旗下品牌，壹钱包致力于为个人消费者及企业客户，提供互联网支付、移动支付等形式多样的第三方支付服务，希望通过一个电子钱包账户，给客户提供更多元化、个性化的支付体验及增值服务,\r\n			成为客户需要的唯一电子钱包。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何注册壹钱包？</h3>\r\n	<div class="ans-text">\r\n		<p>目前壹钱包注册非常简单， 只需要您验证您的手机号码，并设置一个您的登录密码即可完成注册。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何下载壹钱包？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包支持各类iPhone（系统版本6.0以上）和Android（系统版本2.3以上）手机，您可以登录壹钱包官方网站：www.1qianbao.com\r\n			依据您的手机系统下载安装即可。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是账户锁定？</h3>\r\n	<div class="ans-text">\r\n		<p>用户账户被锁定通常因为用户错误多次输入了登录密码，支付密码。壹钱包为了保障用户的安全，限定了用户容许尝试输入密码的次数登录密码5次，支付密码输入3次.通常被锁住的账户会在第二个自然日自动解锁，用户也可以通过“找回密码”操作解锁。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何修改密码？</h3>\r\n	<div class="ans-text">\r\n		<p>如果您还记得原先的密码，您可以在账户管理-》修改支付密码、修改登录密码页面进行修改。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 忘记密码，该怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>忘记登录密码，在需要输入登录密码的页面，点击忘记密码即可进入重置登录密码流程；忘记支付密码，您可以在账户管理-》忘记支付密码或在需要输入支付密码的页面，点击忘记支付密码即可进入重置支付密码流程。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我如何管理银行卡？</h3>\r\n	<div class="ans-text">\r\n		<p>用户登录壹钱包后，在壹钱包账户点击“管理”，进入银行卡管理界面，可以添加银行卡或关闭银行卡快捷支付功能。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 为什么我不能成功绑定银行卡？</h3>\r\n	<div class="ans-text">\r\n		<p>建议您到所持有的银行卡的任意一家银行网点核实下自己所留的银行端信息和壹钱包上信息是否一致，如银行行系统上存在多个不同业务留的手机号码不一样的情况会导致您在壹钱包里不能成功绑定。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我可以将我账户余额中的钱提现吗？</h3>\r\n	<div class="ans-text">\r\n		<p>可以。点击“提现”页面选择要提现至的银行卡，输入提现金额与支付密码即可完成提现。如果未关联银行借记卡，则需要先关联。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何为我的账户充值？信用卡可以为壹钱包充值吗？</h3>\r\n	<div class="ans-text">\r\n		<p>点击“充值”页面，即可选择已关联的银行借记卡，输入充值金额与壹钱包支付密码即可完成充值。如果未关联银行借记卡，则需要先关联；信用卡不可以。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/registerQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">登录注册</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何注册壹钱包？</h3>\r\n	<div class="ans-text">\r\n		<p>目前壹钱包注册非常简单， 只需要您验证您的手机号码，并设置一个您的登录密码即可完成注册。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 同一个手机能注册多个账户么？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包用手机号作为账户号，同一个手机号码不可以重复注册。当用户试图注册已有注册过的手机号时会在注册流程中提示错误。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 注册时输入的姓名和身份证号在注册完成后可以修改么？</h3>\r\n	<div class="ans-text">\r\n		<p>不可以，已完成实名认证，姓名与身份证号将不能修改，请一定输入您本人的真实信息。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是账户锁定？</h3>\r\n	<div class="ans-text">\r\n		<p>用户账户被锁定通常因为用户错误多次输入了登录密码，支付密码。壹钱包为了保障用户的安全，限定了用户容许尝试输入密码的次数：登录密码5次\\支付密码输入3次。通常被锁住的账户会在第二个自然日自动解锁，用户也可以通过“找回密码”操作解锁。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/passwordQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">密码问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何修改登录/支付密码？</h3>\r\n	<div class="ans-text">\r\n		<p>如果您还记得原先的密码，您可以在账户安全-》密码管理-》修改支付密码、修改登录密码、密码保护问题页面进行修改。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 忘记密码，该怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>\r\n			忘记登录密码，在需要输入登录密码的页面，点击忘记密码即可进入重置登录密码流程；<br>忘记支付密码，您可以在账户安全-》密码管理-》找回支付密码或在需要输入支付密码的页面，点击忘记支付密码即可进入重置支付密码流程。\r\n		</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 为什么壹钱包有两个密码？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包有登录和支付两个密码。登录密码是用户登录壹钱包时使用的密码，支付密码是用户在壹钱包进行交易时使用的密码。用户的登录密码不可以和支付密码相同。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/assetQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">资产问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何为我的账户充值？信用卡可以为壹钱包充值吗？</h3>\r\n	<div class="ans-text">\r\n		<p>点击“充值”界面，即可选择已关联的银行借记卡，输入充值金额与壹钱包支付密码即可完成充值。如果未关联银行借记卡，则需要先关联；信用卡不可以。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 账户充值可以实时到账么？我可以在哪里查询账户余额？</h3>\r\n	<div class="ans-text">\r\n		<p>可以实时到账；账户余额可以在壹钱包账户信息中查询。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我可以将我账户余额中的钱提现吗？</h3>\r\n	<div class="ans-text">\r\n		<p>可以。点击“提现”页面选择要提现至的银行卡，输入提现金额与支付密码即可完成提现。如果未关联银行借记卡，则需要先关联。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我能提现到他人账户吗？</h3>\r\n	<div class="ans-text">\r\n		<p>不可以。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 对方没有壹钱包账户可以进行转账么？</h3>\r\n	<div class="ans-text">\r\n		<p>如果对方没有壹钱包账号，您可以下载壹钱包手机APP通过手机号为对方转账，通过手机号转账时，如果对方没有壹钱包账户，我们会短信通知对方尽快注册，注册后即可收款。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 账户余额不足可以发起转账么？</h3>\r\n	<div class="ans-text">\r\n		<p>可以，转账金额将优先账户余额支付，不足部分由开通快捷支付的储蓄卡支付。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 为什么账户和银行卡被掩码了？</h3>\r\n	<div class="ans-text">\r\n		<p>为了更好的保护用户的安全，壹钱包不会直接显示用户的重要信息，比如用户，手机号，身份证号，银行卡号等等。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我如何管理银行卡？</h3>\r\n	<div class="ans-text">\r\n		<p>用户登录壹钱包后，在银行卡信息处点击“管理”，进入银行卡管理界面，可以添加或删除绑定银行卡。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我如何查看壹钱包交易历史？</h3>\r\n	<div class="ans-text">\r\n		<p>用户登录壹钱包后，在个人首页可以看到最近一个月的交易记录，用户可以通过查看所有交易记录查看所有交易记录，也可以在交易管理界面查看交易记录，可以通过更多条件进行过滤。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/payQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">支付问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是快捷支付？为什么要开通快捷支付？</h3>\r\n	<div class="ans-text">\r\n		<p>快捷支付是壹钱包联合各大银行推出的更加安全便捷的支付服务，付款时无需登录网上银行，只需关联您的储蓄卡或信用卡，每次付款时只需输入壹钱包支付密码即可完成付款。开通快捷支付后，方便您随时随地使用壹钱包提供的在线支付服务。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/safeQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">安全保障问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包账户享有资金保障险吗？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包账户享有资金保障险，由中国平安财产保险股份有限公司承保，您可以尊享三重保障：余额支付保障，当您账户内的余额被盗，包括积分、红包，且符合保障条件，将获得赔付；快捷支付保障，当您账户内的快捷支付资金被盗，且符合保障条件，将获得赔付\r\n			；信用支付保障，当您账户内的信用支付资金被盗，且符合保障条件，将获得赔付。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包会员的保障条件是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>保障条件： 经壹钱包认可的中实名及以上的认证用户（不含未经实名认证及弱实名的用户）；\r\n			密码设置强度需为弱级及以上（不含密码强度为“极弱”的账户；）；单次保障金额不超过本次实际资金损失上限。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包会员保障的免赔条款是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>免赔条款：\r\n			经调查被盗为用户本人操作，或者是用户的配偶、亲属、朋友、合居人或所雇人、代理人所为的；因用户原因（包括但不限于主动告知他人、被诈骗、被钓鱼等）导致壹钱包账户密码、壹钱包账户登录及支付密码、校验码泄露的；用户在发现资金被盗后，怠于向壹钱包及时反映的；用户未能提供壹钱包调查所需全部资料或不积极配合调查的；用户曾有任何违反壹钱包产品规则或不诚信的行为；用户没有遵守《壹钱包服务协议》及其附件，或其他壹钱包公布的规则。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如公安机关追回了部分财务赔偿是否需要通知公司？</h3>\r\n	<div class="ans-text">\r\n		<p>公安机关追回的或其他渠道获得的财务赔偿，用户有义务及时通知本公司，如存在刻意隐瞒的行为，本公司保留取消其赔偿资格及依法追偿的权利。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 会员保障的服务流程是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>服务流程：1. 拨打客服电话 400-888-0999。2. 我们将在2个工作日内与您联系，并告知需要提供的凭证。 3.\r\n			审核通过后，3个工作日内完成补偿。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/integralQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">积分问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是壹钱包积分奖励计划？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包积分奖励计划是壹钱包对用户的一项回馈与增值服务。当用户在壹钱包合作商户消费购物时，选择用壹钱包进行支付，即可按实付金额获得一定比例的万里通积分奖励。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 积分规则是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>单笔订单实付金额（不包括优惠、积分抵扣部分）每满100元即送100个万里通积分，单笔最高可获得1000个万里通积分。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何领取积分？</h3>\r\n	<div class="ans-text">\r\n		<p>已绑定过万里通账户的用户，积分将在获得日起1天内到账；如还未绑定万里通账户，可前往壹钱包APP中的【资产】页，点击【积分】，完成与万里通账户的绑定，积分将在绑定后1天内到账。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 在哪些商户消费可以获得积分？</h3>\r\n	<div class="ans-text">\r\n		<p>在与壹钱包合作的B2C电商或线下商户使用壹钱包消费，可获得积分。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如果退货，积分会回收吗？</h3>\r\n	<div class="ans-text">\r\n		<p>按照退货后的实付金额重新计算赠送积分，根据之前消费金额多发放的积分将全部或部分回收。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如果退货，积分会回收吗？</h3>\r\n	<div class="ans-text">\r\n		<p>按照退货后的实付金额重新计算赠送积分，根据之前消费金额多发放的积分将全部或部分回收。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 除了在商户消费，还有别的途径累积积分吗？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包将不定期推出积分营销活动，可关注壹钱包首页顶部广告位或推送消息，以了解相关活动信息</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 积分有有效期吗？</h3>\r\n	<div class="ans-text">\r\n		<p>有。自获得之日起三年内有效（特定活动类积分除外）</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 万里通积分是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>万里通积分是用户购买平安集团旗下产品，或在万里通合作的商户消费后，按照规则获得的奖励积分。该积分可兑换奖品、参加抽奖、享受积分商户优惠等。具体请参考万里通官网：www.wanlitong.com</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我在壹钱包里可以使用万里通积分么？</h3>\r\n	<div class="ans-text">\r\n		<p>在壹钱包消费场景中（如水电煤支付、话费充值）可以使用万里通积分支付。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/hqbaoQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">活钱宝问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是活钱宝？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝是壹钱包推出的余额增值服务，将资金转入活钱宝中就可获得一定的收益，实际上是购买了一款由平安大华基金提供的名为“日增利”的货币基金。活钱宝内的资金能随时转出到壹钱包账户、或提现到卡以及网购消费。目前不收取任何手续费。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝的收益及风险如何？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝是壹钱包为个人用户推出的余额增值服务。把资金转入活钱宝即为向基金公司等机构购买相应理财产品。活钱宝首期支持平安大华基金“日增利”货币基金。货币基金作为基金产品的一种，理论上存在亏损可能，但从历史数据来看收益稳定风险极小。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝收益如何计算？</h3>\r\n	<div class="ans-text">\r\n		<p>购买的基金从第二个工作日开始计算收益，遇到假日顺延。计算公式：当日收益=（活钱宝账户资金/10000）*基金公司公布的万份收益。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么时候能看到收益到账？</h3>\r\n	<div class="ans-text">\r\n		<p>转入资金在基金公司确认份额的第2天可以看到收益。注：如遇国家法定假期，基金公司不进行份额确认，以实际收益时间为准。例如：周一15：00前转入，周二开始计算收益，周三凌晨可以看到收益。周一15：00-周二15：00转入，周三开始计算收益，周四凌晨可以看到收益。周四15：00-周五15：00转入，下周一开始计算收益，下周二凌晨可看到收益。周五15：00-下周一15：00转入，下周二开始计算收益，下周三凌晨可看到收益。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 周末与节假日产生收益吗？</h3>\r\n	<div class="ans-text">\r\n		<p>在每周四下午15：00前购买，周末也可以产生收益。但是周四下午15：00以后，周末则不产生收益。同理，在节假日前两天下午15：00前购买，整个节假日都是产生收益的。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝被盗有赔付吗？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝资金由平安保险承保，被盗100%赔付，赔付无上限。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 购买活钱宝，安全吗？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝账户的资金是受到平安集团账户安全体系保护的。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 开通活钱宝需要什么证件？是否有年龄限制？</h3>\r\n	<div class="ans-text">\r\n		<p>开通目前仅支持中华人民共和国居民第二代身份证，并且年满18周岁；暂不支持护照、港澳通行证、军官证、回乡证证件。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是资金购买？</h3>\r\n	<div class="ans-text">\r\n		<p>资金购买是指通过壹钱包绑定的储蓄卡（借记卡）或壹钱包帐户余额将资金转入活钱宝账户的操作，进行购买操作的银行卡必须是本人的，不支持使用他人银行卡购买资金。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是资金赎回？</h3>\r\n	<div class="ans-text">\r\n		<p>资金赎回是将活钱宝账户里的资金提现到储蓄卡或壹钱包帐户的操作，其中赎回操作需要用户输入支付密码。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是万份收益？</h3>\r\n	<div class="ans-text">\r\n		<p>是每万份基金份额（即购买基金额为1万元）的每天的收益。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是最近7日年化收益率？</h3>\r\n	<div class="ans-text">\r\n		<p>7日年化收益率：是货币基金最近7日的平均收益水平，进行年化以后得出的数据。比如某货币基金当天显示的七日年化收益是6%，假设该货币基金在今后一年的收益情况都维持前七日水准，那么持有一年就可以得到6%的整体收益。货币基金实际每日收益随着基金经理的操作和货币市场利率的波动而不断变化。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝转入金额有限制吗？</h3>\r\n	<div class="ans-text">\r\n		<p>用壹钱包账户转入活钱宝无额度限制，用借记卡快捷转入活钱宝不同银行额度不同，以收银台提示限额为准；同时，首次转入最小金额为1元。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝转出有额度限制吗？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝转出单日限额为20万；转出银行卡每日最多3笔且额度与该银行卡转入转出金额相关，其中余额转入的资金转出到银行卡单日上限为1万元，具体限额以最新版本活钱宝输入金额界面的提示为准。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝转出至借记卡的时效是多久？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝提现至借记卡正常情况当天到账，特殊情况一般24小时内到账。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 活钱宝转出后资金的收益如何计算？</h3>\r\n	<div class="ans-text">\r\n		<p>活钱宝产品转出资金采用的是“先进先出”的原则，用户转出的资金为最早购买活钱宝产品成功的资金，并且用户从活钱宝中转出的资金在转出的单日不享受收益。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/jqbaoQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">借钱宝问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是借钱宝？</h3>\r\n	<div class="ans-text">\r\n		<p>借钱宝是由深圳市信安小额贷款有限责任公司连同平安付科技服务有限公司通过壹钱包平台及其移动客户端向壹钱包用户提供的壹钱包信用贷款服务及壹钱包支付服务。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何申请借钱宝？</h3>\r\n	<div class="ans-text">\r\n		<p>您可在壹钱包平台及其移动客户端申请开通借钱宝，申请前需要您先进行实名认证。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 信用审核需要提交哪些材料？审核时效是多久？</h3>\r\n	<div class="ans-text">\r\n		<p>目前的授信模型需要客户填写申请书，无其他材料需求。审核时效一般0-5个工作日。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 申请借钱宝的条件是什么？</h3>\r\n	<div class="ans-text">\r\n		<p>申请借钱宝目前仅支持大陆身份证注册用户，并且年满18周岁；暂不支持护照、港澳通行证、军官证、回乡证证件。同一身份证只能签约一次。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝的授信额度有有效期吗？</h3>\r\n	<div class="ans-text">\r\n		<p>目前暂定有限期限为一年，如使用过程中发生严重逾期，授信额度将被冻结。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝的额度可以在哪里使用？</h3>\r\n	<div class="ans-text">\r\n		<p>借钱宝目前支持壹钱包的线上商户、WAP收银台商户、APP内的话费充值等，不支持提现、转账类应用场景。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝利息是怎么算的？</h3>\r\n	<div class="ans-text">\r\n		<p>借钱宝利息按当期账单总金额计息；消费当日至账单结算日为免息期，最长31天。账单结算日次日为起息日，计息周期固定为30天，账单结算日次月同一天为最后还款日。借钱宝年化利率为15%，计算公式：利息=账单总本金*借钱宝年化利率*30/360。若应付利息不满5元，按5元计收。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 违约金是怎么收的？</h3>\r\n	<div class="ans-text">\r\n		<p>客户发生逾期还款后，需支付逾期违约金，违约金为逾期本金的1%，在客户还款时一次性收取，违约金不满2元的，按2元计收；\r\n			超过10元的，按10元收取，逾期还款冲抵优先级：违约金&gt;逾期罚息&gt;利息&gt;本金</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 逾期罚息是怎么收的？</h3>\r\n	<div class="ans-text">\r\n		<p>账单扣款日后设定3天宽限期，超过宽限期仍未还款的，计收逾期罚息，逾期罚息年化利率为正常利率上浮150%，从扣款日起按日计算单利；最低收取0。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 服务费是如何收取的？</h3>\r\n	<div class="ans-text">\r\n		<p>每笔提前还款收取服务费：交易金额≤50元，每笔收取1元服务费；交易金额&gt;50元，每笔收取2元服务费；推广期内暂免服务费（收费时间以通知为准）</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝的服务费/利息是否占用信用额度？</h3>\r\n	<div class="ans-text">\r\n		<p>服务费利息不占用额度</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我可以修改我的账单日吗？</h3>\r\n	<div class="ans-text">\r\n		<p>目前账单日统一为25日，暂不能修改，今后将会提供自选账单日的服务。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 申请借钱宝为什么一定要绑定借记卡？</h3>\r\n	<div class="ans-text">\r\n		<p>为便于客户还款，在申请借钱宝时需绑定银行借记卡作为还款帐户。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我要更改一下我的扣款银行账号，该如何更改？</h3>\r\n	<div class="ans-text">\r\n		<p>用户可以登录壹钱包进入 资产管理-》借钱宝，选择【还款银行卡】，变更还款银行卡需要进行快捷支付的验证及绑定，并只支持借记卡</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q.\r\n		我账单欠款是1000元，我绑定扣款的银行卡里只有300元，还会扣款吗？如果我第二天在银行卡里存700，会补扣吗？</h3>\r\n	<div class="ans-text">\r\n		<p>银行卡扣款为全额扣款模式，若银行卡余额不足会造成还款日扣款失败。还款日后壹钱包会每日向银行发起补扣申请，直至账单结清。若超过宽限期还未扣款成功，将会产生违约金和罚息，请客户关注。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 每次扣款不成功，是否都会有短信或者其它方式提醒用户？</h3>\r\n	<div class="ans-text">\r\n		<p>扣款失败没有短信提醒，客户可登录壹钱包帐户查询还款状态。当客户账单进入逾期状态时，会有短信通知。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝功能可以取消吗？</h3>\r\n	<div class="ans-text">\r\n		<p>借钱宝功能暂不能取消。借钱宝申请成功过后若不使用，不会产生任何费用。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 借钱宝免息期是怎么算的？</h3>\r\n	<div class="ans-text">\r\n		<p>消费当日至账单结算日为免息期，最短1天，最长31天。在当期账单结算日前已经偿还的本金部分将不会计收利息。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 自动还款的执行时间？</h3>\r\n	<div class="ans-text">\r\n		<p>自动还款将在最后还款日的晚间24:00自动运行，扣款方式为先扣除壹钱包余额，如不足再从还款银行卡内扣除剩余金额。自动还款不支持部分还款，若银行卡内金额不足则整笔扣款操作失败，此时壹钱包中存在的余额，也不会被扣除。为避免支付利息，请于账单结算日前主动还款。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/safewidgetQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">安全控件问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 什么是WEB安全控件，使用安全控件有什么好处？</h3>\r\n	<div class="ans-text">\r\n		<p>为了提升壹钱包账户的安全性，防止账户密码被木马程序或病毒窃取，壹钱包安全控件，该安全控件实现了在SSL加密传输基础上对用户的关键信息进行再次的多重加密，能够有效防止木马程序截取键盘记录，保护用户登录密码和支付密码。壹钱包控件目前仅支持简体中文版显示。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 安全控件支持哪些操作系统和浏览器？</h3>\r\n	<div class="ans-text">\r\n		<p>安全控件支持的操作系统和浏览器如下：</p>\r\n		<p>Windows系统</p>\r\n		<div class="can_window1 setpng"></div>\r\n		<div class="can_window2 setpng"></div>\r\n		<p>苹果MAC系统</p>\r\n		<div class="can_mac setpng"></div>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 安全控件必须安装吗？</h3>\r\n	<div class="ans-text">\r\n		<p>在登录壹钱包，输入登录密码时，可不用安装安全控件，但建议使用安全控件；在输入壹钱包支付密码界面，为了保护支付安全，必须安装安全控件。 不安装安全控件可以查询浏览壹钱包业务，但是不能进行帐户付款和修改支付密码。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 安装安全控件后，在登录密码或支付密码输入框内显示“ATL 10.00”，是什么原因，如何处理？</h3>\r\n	<div class="ans-text">\r\n		<div class="atl1 setpng"></div>\r\n		<p>安装控件后，密码框显示ATL10.00，无法成功点进密码框，进而导致无法输入密码的问题，请使用如下方法解决：打开IE浏览器，选择菜单栏工具下的internet选项，在常规选项卡中选择浏览历史记录下的“删除”按钮，在弹出的复选框中按照默认进行勾选，然后点击删除。</p>\r\n		<div class="atl2 setpng"></div>\r\n		<p>关闭IE浏览器，重新启动浏览器，进入输入密码页面，尝试问题是否已解决。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如果安全控件被自身电脑上的防病毒软件报木马、病毒怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>安全控件的作用是防止木马及病毒盗窃用户的密码，因此在代码和行为特征上容易被杀毒软件误报。安全控件已和市面上主流的防病毒软件做过详细的兼容性测试，一般不会出现误报的情况。但是防病毒软件的病毒库每天都更新，每天也都在定义新的病毒规则，也会存在误报的可能，这种情况下，用户可以将安全控件驱动添加为信任状态，同时，我们也会第一时间和防病毒厂商联系，将安全控件重新加入到对方的白名单机制中。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 在安装安全控件时，提示我没有权限安装怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>首先确认您是不是以管理员身份登录的，如果您是访客或者非管理员身份用户登录的，请先注销用户使用管理员账户登录，再访问网银页面进行控件安装。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我进入网银登录页面时，有黄条提示：“您的安全设置不允许网站使用安装在您的计算机上的Activex控件”，怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>出现这种情况，有可能跟您的IE设置有关系，用户可以尝试使用以下方法解决：IE菜单栏中的工具->internet选项->安全选项卡->自定义级别->安全设置中，将“下载已签名的ActiveX控件”选项改为启用或者提示，点击确定重启浏览器即可。如下图所示：</p>\r\n		<div class="saf setpng"></div>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 安装安全控件后系统总是提示重复安装，这是什么原因，该怎么解决？</h3>\r\n	<div class="ans-text">\r\n		<p>造成此问题的原因一般是：系统中已经安装过此版本，用户在没有卸载干净旧版本的情况下直接安装新的安全控件版本，且新版本没能将旧版本全部覆盖。</p>\r\n		<p>解决方法：将控制面板中有关安全控件的程序卸载干净，且将安全控件安装路径下的文件全部删除，重启电脑。之后再根据浏览器中的提示或者用新的安装包安装安全控件。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 安全控件安装完成后，在输入登录密码或支付密码页面，使用笔记本电脑触摸板无法移动光标，是什么原因，该怎么解决？</h3>\r\n	<div class="ans-text">\r\n		<p>原因：笔记本电脑的触摸板驱动比较老，与安全控件兼容性不好</p>\r\n		<p>处理方法：在输入登录密码或支付密码页面，移动光标时使用鼠标移动光标，不使用笔记本电脑触摸板</p>\r\n	</div>\r\n</div>\r\n';
    });
});

define("consumer/helpcenter/1.0.0/lifepayQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        return '<div class="quest-title">\r\n	<h2 id="qTitle">生活缴费</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 哪些地区支持壹钱包缴纳水费、电费、煤气费？</h3>\r\n	<div class="ans-text">\r\n		<p>目前只有上海市地区支持壹钱包缴纳水电煤费， 北京和深圳地区正在调试中，其他地区也会在以后陆续开通。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 用壹钱包水电煤缴费，有发票吗？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包代缴费，目前不提供发票。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 过期的账单能不能进行缴费？</h3>\r\n	<div class="ans-text">\r\n		<p>您在壹钱包缴费系统提交的账单可能会被失败处理，无法完成缴费。为避免造成您不必要的麻烦和损失，建议您在账单“最后付费日期”之前5日进行缴费；如果已经超过您的账单“最后付费日期”，建议您直接到相应公用事业单位的营业网点缴费。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 可以帮别人缴费吗？</h3>\r\n	<div class="ans-text">\r\n		<p>可以，只要您有他人的缴费账单就可以代他人缴费。缴费时注意核对账户信息，一旦缴费成功，是不能退回的。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 我手头没有纸质账单，可以缴费吗？</h3>\r\n	<div class="ans-text">\r\n		<p>可以。只要在壹钱包成功缴费过一次，下次登录系统会将上次成功缴费的出账机构和户号保留，用户可以继续使用该户号缴费。但是如果用户想使用新的户号缴费，则需要重新录入新户号。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 缴费提示“没有查询到可缴费账单”是什么意思？</h3>\r\n	<div class="ans-text">\r\n		<p>这是因为您的销根号／户号／条形码输入有误，或者该账单已经缴过费。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 有缴费单，但是为什么壹钱包账户录入销根号／户号／条形码后没有缴费单信息？</h3>\r\n	<div class="ans-text">\r\n		<p>请您核对您输入的缴费单信息是否有误；如果您输入的信息无误，可能是事业单位在抄表日期与账单出账日期间有时间差，建议您稍后再试。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 是不是一定要注册壹钱包才能缴费？</h3>\r\n	<div class="ans-text">\r\n		<p>目前壹钱包的水电煤缴费功能只针对壹钱包注册用户，您需要先注册壹钱包才能进行缴费。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何用壹钱包缴纳水费、电费、煤气费？</h3>\r\n	<div class="ans-text">\r\n		<p>登录壹钱包账户>选择“生活缴费”>选择缴费项目>选择所在城市>选择缴费单位>输入户号／销根号／条形码>点击“查询”>选择缴费账单>选择支付方式>点击支付>账单中查询缴费记录。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 如何查询水电煤缴费的记录？</h3>\r\n	<div class="ans-text">\r\n		<p>登录壹钱包>点击“交易历史” >点击“充值缴费”>查询缴费记录。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 缴费失败金额什么时间能够返还到壹钱包账户？</h3>\r\n	<div class="ans-text">\r\n		<p>若缴费失败，缴费金额将会在3个工作日内（不包括付款当天）退还到您的账户中，请您关注账户余额即可。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 用壹钱包水电煤缴费，要收手续费吗？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包目前对该服务不收取手续费。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 缴水费、电费、煤气费有金额限制吗？</h3>\r\n	<div class="ans-text">\r\n		<p>在壹钱包中进行水电煤缴费并没有金额限制。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 逾期账单缴纳产生滞纳金，怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>您向壹钱包缴费系统提交的账单被公共事业单位确认为逾期账单的，壹钱包缴费系统进行的缴费结果会显示为处理失败，您将可能因此产生滞纳金，这些滞纳金将由您本人自行承担。您有任何疑问，可直接与各公共事业单位进行协商，请及时关注账务。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 为何在壹钱包看到付款成功了，但仍然没有销账呢？</h3>\r\n	<div class="ans-text">\r\n		<p>销账分为实时和非实时。若是当时缴费完成但是未销账，耐心等待1-3个工作日后查询。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 一天可以缴纳几笔水费、电费、煤气费？</h3>\r\n	<div class="ans-text">\r\n		<p>用户查询到未缴费账单后可以一次缴纳完毕。水费、电费和煤气费都可以在一天内缴纳。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 账单已经创建，我要换账户付，怎么办？可以撤销已经创建的订单吗？</h3>\r\n	<div class="ans-text">\r\n		<p>缴费账户，已经创建的订单无法撤销。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 付完钱，缴费就成功了吧？</h3>\r\n	<div class="ans-text">\r\n		<p>不是的，缴费是否成功需要根据缴费单的缴费状态来判定，只有缴费成功时才算缴费完成。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 缴费失败后，钱退回哪里？</h3>\r\n	<div class="ans-text">\r\n		<p>缴费失败后，钱会退回您的壹钱包账户。</p>\r\n	</div>\r\n</div>';
    });
});

define("consumer/helpcenter/1.0.0/otherQ-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;
        buffer += '<div class="quest-title">\r\n	<h2 id="qTitle">其他问题</h2>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包的交易收取手续费么？</h3>\r\n	<div class="ans-text">\r\n		<p>壹钱包交易目前对于个人用户是免费的。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 交易时一直收不到短信动态码该怎么办？</h3>\r\n	<div class="ans-text">\r\n		<p>首先请确认手机信号是否正常，能否收到其他短信或电话，如手机信号正常请耐心等待几分钟后重试，如还无法解决请联系客服，记录问题。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包的交易变动有短信通知吗？</h3>\r\n	<div class="ans-text">\r\n		<p>目前壹钱包资金转出超过100元会有短信通知。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q.\r\n		我交易使用的余额+银行卡的组合支付方式，如果发生退款，款项是退到银行卡内还是壹钱包余额内？</h3>\r\n	<div class="ans-text">\r\n		<p>退款会按照您当时付款来源退款，即余额付款的退回余额，银行卡付款的退回银行卡。</p>\r\n	</div>\r\n</div>\r\n<div class="answers-text">\r\n	<h3 class="quest-text">Q. 壹钱包账户持有人身故，账户中资金怎样领出？</h3>\r\n	<div class="ans-text">\r\n		<p>身故客户资金领回申请人仅限于客户父母、配偶、子女，或上述亲属之外的遗产继承人。请先下载打印<a href="';
        if (stack1 = helpers.staticFileRoot) {
            stack1 = stack1.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack1 = depth0.staticFileRoot;
            stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
        }
        buffer += escapeExpression(stack1) + '/static/consumer/helpcenter/src/身故客户资金领回申请书.docx">《身故客户资金领回申请书》</a>，然后致电客服申请资金领出。</p>\r\n	</div>\r\n</div>';
        return buffer;
    });
});
