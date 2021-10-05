<template>
  <div>
    <!-- 顶部tab  -->
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
    <!-- 搜索栏 -->
    <div class="top-search">
      <div class="inner">
        <a class="logo" href="index.html">
          <img src="../../static/images/icons/logo.png" alt="U袋网" class="cover">
        </a>
        <div class="search-box">
          <form class="input-group">
            <input placeholder="Ta们都在搜京西商城" type="text">
            <span class="input-group-btn">
              <button type="button">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
            </span>
          </form>
          <p class="help-block text-nowrap">
            <a href>连衣裙</a>
            <a href>裤</a>
            <a href>衬衫</a>
            <a href>T恤</a>
            <a href>女包</a>
            <a href>家居服</a>
            <a href>2017新款</a>
          </p>
        </div>
        <div class="cart-box">
          <a href="udai_shopcart.html" class="cart-but">
            <i class="iconfont icon-shopcart cr fz16"></i> 购物车
            <span id="cartNum">0</span> 件
          </a>
        </div>
      </div>
    </div>

    <!-- 楼层内容 -->
    <div class="content inner" style="margin-bottom: 40px;">
      <section class="scroll-floor floor-1 clearfix">
        <div class="floor-title">
          <i class="iconfont icon-tuijian fz16"></i> 店铺信息
        </div>
        <div class="con-box">
          <div class="left-img hot-img" style="background-color: #ffd0cd;text-align: center">
            <!--<img src="../../static/images/floor_1.jpg" alt class="cover">-->
            <div class="shopname" >
              <span>张一文二傻子店</span>
            </div>
            <div class="shopdes">
              <table style="width: 100%;">
                <tr><span class="shopinfotitle"> 简介：</span></tr>
                <tr><span class="shopinfo"> 【简介】</span></tr>
              </table>
            </div>
            <div class="shopdes">
              <table style="width: 100%;">
                <tr><span class="shopinfotitle"> 地址：</span></tr>
                <tr><span> 【地址】</span></tr>
              </table>
            </div>
            <div class="shopdes">
              <table style="width: 100%;">
                <tr><span class="shopinfotitle"> 电话：</span></tr>
                <tr><span> 【电话】</span></tr>
              </table>
            </div>
          </div>
          <div class="right-box">
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-001.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-002.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-003.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-004.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-005.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-006.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-007.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
            <a href="item_show.html" class="floor-item">
              <div class="item-img hot-img">
                <img src="../../static/images/temp/S-008.jpg" alt="纯色圆领短袖T恤活a动衫弹" class="cover">
              </div>
              <div class="price clearfix">
                <span class="pull-left cr fz16">￥18.0</span>
                <span class="pull-right c6">进货价</span>
              </div>
              <div class="name ep" title="纯色圆领短袖T恤活a动衫弹力柔软">纯色圆领短袖T恤活a动衫弹力柔软</div>
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- 右侧菜单 -->
    <div class="right-nav">
      <ul class="r-with-gotop">
        <li class="r-toolbar-item">
          <a href="udai_welcome.html" class="r-item-hd">
            <i class="iconfont icon-user"></i>
            <div class="r-tip__box">
              <span class="r-tip-text">用户中心</span>
            </div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="udai_shopcart.html" class="r-item-hd">
            <i class="iconfont icon-cart" data-badge="10"></i>
            <div class="r-tip__box">
              <span class="r-tip-text">购物车</span>
            </div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="udai_collection.html" class="r-item-hd">
            <i class="iconfont icon-aixin"></i>
            <div class="r-tip__box">
              <span class="r-tip-text">我的收藏</span>
            </div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="issues.html" class="r-item-hd">
            <i class="iconfont icon-liuyan"></i>
            <div class="r-tip__box">
              <span class="r-tip-text">留言反馈</span>
            </div>
          </a>
        </li>
        <li class="r-toolbar-item to-top">
          <i class="iconfont icon-top"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">返回顶部</span>
          </div>
        </li>
      </ul>
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
          <dt>京西商城</dt>
          <a href="temp_article/udai_article10.html">
            <dd>企业简介</dd>
          </a>
          <a href="temp_article/udai_article11.html">
            <dd>加入京西</dd>
          </a>
          <a href="temp_article/udai_article12.html">
            <dd>隐私说明</dd>
          </a>
        </dl>
        <dl>
          <dt>服务中心</dt>
          <a href="temp_article/udai_article1.html">
            <dd>售后服务</dd>
          </a>
          <a href="temp_article/udai_article2.html">
            <dd>配送服务</dd>
          </a>
          <a href="temp_article/udai_article3.html">
            <dd>用户协议</dd>
          </a>
          <a href="temp_article/udai_article4.html">
            <dd>常见问题</dd>
          </a>
        </dl>
        <dl>
          <dt>新手上路</dt>
          <a href="temp_article/udai_article5.html">
            <dd>如何成为代理商</dd>
          </a>
          <a href="temp_article/udai_article6.html">
            <dd>代销商上架教程</dd>
          </a>
          <a href="temp_article/udai_article7.html">
            <dd>分销商常见问题</dd>
          </a>
          <a href="temp_article/udai_article8.html">
            <dd>付款账户</dd>
          </a>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  // import { global } from "../../static/js/global.js";
  // import { swiper } from "../../static/js/swiper.min.js";
  import axios from "axios";

  export default {
    // name: "Home",
    data() {
      return {
        goods: [],
        bigCategory: []
      };
    },
    created: function() {},
    mounted: function() {
      // 顶部banner轮播
      var banner_swiper = new Swiper(".banner-box", {
        autoplayDisableOnInteraction: false,
        pagination: ".banner-box .swiper-pagination",
        paginationClickable: true,
        autoplay: 5000
      });
      // 新闻列表滚动
      var notice_swiper = new Swiper(".notice-box .swiper-container", {
        paginationClickable: true,
        mousewheelControl: true,
        direction: "vertical",
        slidesPerView: 10,
        autoplay: 2e3
      });
      $.scrollFloor();
      $(".floor-nav").smartFloat();
      $(".to-top").toTop({ position: false });

      // var that = this;
      // axios
      //   .get(that.GLOBAL.basePath + "good/home")
      //   .then(function(response) {
      //     // console.log(response);
      //     // console.log(response.data.goods);
      //     // console.log(response.data.bigcategory);
      //     that.GLOBAL.homeGoods = response.data.goods;
      //     that.GLOBAL.bigCategory = response.data.bigcategory;

      //     that.goods = that.GLOBAL.homeGoods;
      //     that.bigCategory = that.GLOBAL.bigCategory;
      //     // console.log(that.GLOBAL.bigCategory);
      //     // console.log(that.goods);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    methods: {
      goToLogin() {
        this.$router.push({
          path: "/login"
        });
      }
    }
  };
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
  .indexicon{
    width: 16px;
    height: 16px;
  }

  .indextable{
    line-height:56.25px;
  }

  .indextr1{
    line-height:35px;
  }
  .indextr2{
    line-height:112.5px;
  }
  .indextd{
    width: 166px;
    text-align: center;
    color: #eee;
  }
  .shopdes{
    height: 15%;
    line-height: 42px;
    font-size: 16px;
    color: #718784;
  }
  .shopname{
    height: 15%;
    line-height: 42px;
    margin-top: 27%;
    font-size: 20px;
    margin-left: -32%;
  }
  .shopinfotitle{
    margin-left: -63%;
  }
  .shopinfo{

  }
</style>
