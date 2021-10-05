<template>
  <div>
    <div id="hidebg"></div>
    <!-- 顶部tab -->
    <div class="tab-header">
      <div class="inner">
        <div class="pull-left">
          <div class="pull-left">
            嗨，欢迎来到
            <span class="cr">京西商城</span>
          </div>
        </div>
        <div class="pull-right">
          <!-- <a href="javascript:;" @click="goToLogin()"> -->
          <router-link to="/welcome">
            <span class="cr">登录</span>
          </router-link>
          <!-- </a> -->
          <a href="login.html?p=register">注册</a>
          <a href="udai_welcome.html">我的京西</a>
          <a>
            Hi~
            <span class="cr">Emily</span>
          </a>
          <a href="udai_welcome.html" style="margin-left:0px;">
            <img
              src="../../static/images/icons/default_avt.png"
              alt="欢迎来到京西商城"
              class="cover upperrightlogo"
            >
          </a>
          <!-- a1为什么不对？？ -->
        </div>
      </div>
    </div>
    <!-- 顶部标题 -->
    <div class="bgf5 clearfix">
      <div class="top-user">
        <div class="inner">
          <a class="logo" href="index.html"><img src="../../static/images/icons/logo.png" alt="U袋网" class="cover"></a>
          <div class="title">购物车</div>
        </div>
      </div>
    </div>
    <div class="content clearfix bgf5">
      <section class="user-center inner clearfix">
        <div class="user-content__box clearfix bgf">
          <div class="title">购物车-确认支付 </div>
          <div class="shop-title">收货地址</div>
          <form action="" class="shopcart-form__box">
            <div class="addr-radio">
              <div class="radio-line radio-box active">
                <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999">
                  <input name="addr" checked="" value="0" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  福建省 福州市 鼓楼区 温泉街道
                  五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                  （喵喵喵 收） 153****9999
                </label>
                <a href="javascript:;" class="default">默认地址</a>
                <a href="udai_address_edit.html" class="edit">修改</a>
              </div>
              <div class="radio-line radio-box">
                <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （taroxd 收） 153****9999">
                  <input name="addr" value="1" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  福建省 福州市 鼓楼区 温泉街道
                  五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                  （taroxd 收） 153****9999
                </label>
                <a href="" class="default">设为默认地址</a>
                <a href="udai_address_edit.html" class="edit">修改</a>
              </div>
              <div class="radio-line radio-box">
                <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵污喵⑤ 收） 153****9999">
                  <input name="addr" value="2" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  福建省 福州市 鼓楼区 温泉街道
                  五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                  （喵污喵⑤ 收） 153****9999
                </label>
                <a href="" class="default">设为默认地址</a>
                <a href="udai_address_edit.html" class="edit">修改</a>
              </div>
              <div class="radio-line radio-box">
                <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （浴巾打码女 收） 153****9999">
                  <input name="addr" value="2" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  福建省 福州市 鼓楼区 温泉街道
                  五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                  （浴巾打码女 收） 153****9999
                </label>
                <a href="" class="default">设为默认地址</a>
                <a href="udai_address_edit.html" class="edit">修改</a>
              </div>
            </div>
            <div class="add_addr"><a href="udai_address.html">添加新地址</a></div>
            <div class="shop-title">确认订单</div>
            <div class="shop-order__detail">
              <table class="table">
                <thead>
                <tr>
                  <th width="120"></th>
                  <th width="300">商品信息</th>
                  <th width="150">单价</th>
                  <th width="200">数量</th>
                  <th width="200">运费</th>
                  <th width="80">总价</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row"><a href="item_show.html"><div class="img"><img src="../../static/images/temp/M-003.jpg" alt="" class="cover"></div></a></th>
                  <td>
                    <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                  </td>
                  <td>¥20.0</td>
                  <td>1</td>
                  <td>¥0.0</td>
                  <td>¥20.0</td>
                </tr>
                <tr>
                  <th scope="row"><a href="item_show.html"><div class="img"><img src="../../static/images/temp/S-005.jpg" alt="" class="cover"></div></a></th>
                  <td>
                    <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                  </td>
                  <td>¥20.0</td>
                  <td>2</td>
                  <td>¥0.0</td>
                  <td>¥40.0</td>
                </tr>
                <tr>
                  <th scope="row"><a href="item_show.html"><div class="img"><img src="../../static/images/temp/M-007.jpg" alt="" class="cover"></div></a></th>
                  <td>
                    <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                  </td>
                  <td>¥20.0</td>
                  <td>1</td>
                  <td>¥0.0</td>
                  <td>¥20.0</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="shop-cart__info clearfix">
              <div class="pull-left text-left">
                <div class="info-line text-nowrap">购买时间：<span class="c6">2017年09月14日 17:31:05</span></div>
                <div class="info-line text-nowrap">交易号：<span class="c6">1001001830267490496</span></div>
              </div>
              <div class="pull-right text-right">
                <!--<script>-->
                  <!--$('#coupon').bind('change',function() {-->
                    <!--console.log($(this).val());-->
                  <!--})-->
                <!--</script>-->
                <div class="info-line">已优惠：<span class="c6">2.0</span>元</div>
                <div class="info-line">合计：<b class="fz18 cr">¥18.0</b></div>
              </div>
            </div>
            <div class="shop-title">确认订单</div>
            <div class="pay-mode__box">
              <!--<div class="radio-line radio-box">-->
                <!--<label class="radio-label ep">-->
                  <!--<input name="pay-mode" value="1" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>-->
                  <!--<span class="fz16">余额支付</span>-->
                <!--</label>-->
                <!--<div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>-->
              <!--</div>-->
              <div class="radio-line radio-box">
                <label class="radio-label ep">
                  <input name="pay-mode" value="2" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  <img src="../../static/images/icons/alipay.png" alt="支付宝支付">
                </label>
                <div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>
              </div>
              <div class="radio-line radio-box">
                <label class="radio-label ep">
                  <input name="pay-mode" value="3" autocomplete="off" type="radio"><i class="iconfont icon-radio"></i>
                  <img src="../../static/images/icons/paywechat.png" alt="微信支付">
                </label>
                <div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>
              </div>
            </div>
            <div id="continue" @click="show">继续支付</div>
            <!--<script>-->
              <!--$(document).ready(function(){-->
                <!--$(this).on('change','input',function() {-->
                  <!--$(this).parents('.radio-box').addClass('active').siblings().removeClass('active');-->
                <!--})-->
              <!--});-->
            <!--</script>-->
          </form>
        </div>
      </section>
    </div>

    <!--“确认支付”弹窗部分-->
      <div class="dialog">
        <div class="line1"><span style="padding: 10px;">确认支付</span></div>
        <div class="line2">是否确认付款？</div>
        <table class="dialogtable">
          <td style="border-right: 1px solid #b31e22;"><span>确认</span></td>
          <td @click="hide"><span>取消</span></td>
        </table>

      </div>

    <!-- 右侧菜单 -->
    <div class="right-nav">
      <ul class="r-with-gotop">
        <li class="r-toolbar-item">
          <a href="udai_welcome.html" class="r-item-hd">
            <i class="iconfont icon-user" data-badge="0"></i>
            <div class="r-tip__box"><span class="r-tip-text">用户中心</span></div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="udai_shopcart.html" class="r-item-hd">
            <i class="iconfont icon-cart"></i>
            <div class="r-tip__box"><span class="r-tip-text">购物车</span></div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="udai_collection.html" class="r-item-hd">
            <i class="iconfont icon-aixin"></i>
            <div class="r-tip__box"><span class="r-tip-text">我的收藏</span></div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="issues.html" class="r-item-hd">
            <i class="iconfont icon-liuyan"></i>
            <div class="r-tip__box"><span class="r-tip-text">留言反馈</span></div>
          </a>
        </li>
        <li class="r-toolbar-item to-top">
          <i class="iconfont icon-top"></i>
          <div class="r-tip__box"><span class="r-tip-text">返回顶部</span></div>
        </li>
      </ul>
      <!--<script>-->
        <!--$(document).ready(function(){ $('.to-top').toTop({position:false}) });-->
      <!--</script>-->
    </div>
    <!-- 底部信息 -->
    <div class="footer">
      <div class="footer-tags">
        <div class="tags-box inner">
          <div class="tag-div">
            <img src="../../static/images/icons/footer_1.gif" alt="厂家直供">
          </div>
          <div class="tag-div">
            <img src="../../static/images/icons/footer_2.gif" alt="一件代发">
          </div>
          <div class="tag-div">
            <img src="../../static/images/icons/footer_3.gif" alt="美工活动支持">
          </div>
          <div class="tag-div">
            <img src="../../static/images/icons/footer_4.gif" alt="信誉认证">
          </div>
        </div>
      </div>
      <div class="footer-links inner">
        <dl>
          <dt>U袋网</dt>
          <a href="temp_article/udai_article10.html"><dd>企业简介</dd></a>
          <a href="temp_article/udai_article11.html"><dd>加入京西</dd></a>
          <a href="temp_article/udai_article12.html"><dd>隐私说明</dd></a>
        </dl>
        <dl>
          <dt>服务中心</dt>
          <a href="temp_article/udai_article1.html"><dd>售后服务</dd></a>
          <a href="temp_article/udai_article2.html"><dd>配送服务</dd></a>
          <a href="temp_article/udai_article3.html"><dd>用户协议</dd></a>
          <a href="temp_article/udai_article4.html"><dd>常见问题</dd></a>
        </dl>
        <dl>
          <dt>新手上路</dt>
          <a href="temp_article/udai_article5.html"><dd>如何成为代理商</dd></a>
          <a href="temp_article/udai_article6.html"><dd>代销商上架教程</dd></a>
          <a href="temp_article/udai_article7.html"><dd>分销商常见问题</dd></a>
          <a href="temp_article/udai_article8.html"><dd>付款账户</dd></a>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "shopcart_pay",
    data () {
      return {

      }
    },
    created: function(){

    },
    mounted: function(){

    },
    methods: {
      show()  //显示
      {
        var hideobj=document.getElementById("hidebg");
        hidebg.style.display="block";  //显示隐藏层
        hidebg.style.height=document.body.clientHeight+"px";  //设置隐藏层的高度为当前页面高度
        document.getElementsByClassName("dialog")[0].style.display="block";  //显示弹出层
      },
      hide()  //去除灰色背景和弹窗
      {
        document.getElementById("hidebg").style.display="none";
        document.getElementsByClassName("dialog")[0].style.display="none";
      }
    }
  }
  $('#coupon').bind('change',function() {
    console.log($(this).val());
  })

  $(document).ready(function(){});

  $(document).ready(function(){
    $('.to-top').toTop({position:false});
    $(this).on('change','input',function() {
      $(this).parents('.radio-box').addClass('active').siblings().removeClass('active');
    })
  });

</script>

<style >
  @import "../../static/my_css/iconfont.css";
  @import "../../static/my_css/global.css";
  @import "../../static/my_css/bootstrap.min.css";
  @import "../../static/my_css/bootstrap-theme.min.css";
  @import "../../static/my_css/swiper.min.css";
  @import "../../static/my_css/styles.css";
</style>

<style scoped>
  /*.father {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*position: absolute;*/

  /*}*/

  .dialog{
    width: 300px;
    margin: 0 auto; /*水平居中*/
    position: fixed; /*脱离文档流*/
    top: 50%; /*偏移*/
    border: 1px solid #b31e22;
    z-index: 999;
    left: 50%;
    margin-top: -72px;
    margin-left:-150px;
    display:none;
    /*border-radius: 10px 10px 10px 10px;*/
  }

  .line1{
    color: #fff;
    height: 40px;
    font-size: 16px;
    width: 300px;
    padding: 0  15px 0 0;
    background-color: #b31e22;
    display: table-cell;
    vertical-align: middle;
    /*border-radius: 10px 10px 0 0;*/
  }
  .line2{
    width: 100%;
    height: 66px;
    line-height: 66px;
    text-align: center;
    background-color: white;
    /*border-radius: 0 0 10px 10px;*/
  }
  .dialogtable{
    height: 35px;
    line-height: 35px;
    width: 100%;
    border-top: 1px solid #b31e22;
    text-align: center;
    background-color: white;
  }
  #hidebg {
    position:absolute;
    left:0px;
    top:0px;
    background-color:#000;
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:none; /* http://www.jb51.net */
    z-Index:998;
  }
  #continue
  {
    width: 120px;
    float: right;
    margin: 10px 0;
    color: #fff;
    background-color: #b31e22;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
