<template>
  <div>
    <!-- 顶部tab -->
    <div class="tab-header">
      <div class="inner">
        <div class="pull-left">
          <div class="pull-left">嗨，欢迎来到
            <span class="cr">京西商城</span>
          </div>
        </div>
        <div class="pull-right">
          <a href="login.html">
            <span class="cr">登录</span>
          </a>
          <a href="login.html?p=register">注册</a>
          <a href="udai_welcome.html">我的京西</a>
          <a>Hi~
            <span class="cr">Emily</span>
          </a>
          <a href="udai_welcome.html" style="margin-left:0px;">
            <img src="../../static/images/icons/default_avt.png" alt="欢迎来到U袋网" class="cover upperrightlogo">
          </a>
          <!-- a1为什么不对？？ -->
        </div>
      </div>
    </div>
    <!-- 顶部标题 -->
    <div class="bgf5 clearfix">
      <div class="top-user">
        <div class="inner">
          <a class="logo" href="index.html">
            <img src="../../static/images/icons/logo.png" alt="U袋网" class="cover">
          </a>
          <div class="title">个人中心</div>
        </div>
      </div>
    </div>

    <!--下面整个所有的内容-->
    <div class="content clearfix bgf5">
      <section class="user-center inner clearfix">
        <div class="pull-left bgf">
          <a href="udai_welcome.html" class="title">京西欢迎页</a>
          <dl class="user-center__nav">
            <dt>帐户信息</dt>
            <a href="udai_setting.html">
              <dd>个人资料</dd>
            </a>
            <a href="udai_address.html">
              <dd>收货地址</dd>
            </a>
            <a href="udai_pwd_modify.html">
              <dd>修改登录密码</dd>
            </a>
          </dl>
          <dl class="user-center__nav">
            <dt>订单中心</dt>
            <a href="udai_order_all.html">
              <dd>我的订单</dd>
            </a>
            <a href="udai_collection.html">
              <dd>我的收藏</dd>
            </a>
            <a href="udai_refund.html">
              <dd>退款/退货</dd>
            </a>
          </dl>
          <dl class="user-center__nav">
					<dt>服务中心</dt>
					<a href="temp_article/udai_article1.html"><dd>售后服务</dd></a>
				</dl>
        </div>

        <!--右边所有-->
        <div class="pull-right">
          <!--右边上面的一栏，类似于菜单 的 收藏 待评价 待支付-->
          <div class="user-center__info bgf">
            <!--左边显示  您好，用户名  -->
            <div class="pull-left clearfix">
              <div class="port b-r50 pull-left">
                <img src="../../static/images/icons/default_avt.png" alt="用户名" class="cover b-r50">
                <a href="udai_setting.html" class="edit">
                  <i class="iconfont icon-edit"></i>
                </a>
              </div>
              <p class="name text-nowrap" id="display_name"></p>
              <!--这里是动态数据， 读取用户的用户名-->
            </div>
            <!--  第一排的按钮：待付款 ，，待评价 ，，收藏  -->
            <div class="pull-right user-nav">
              <a href="udai_order_all.html" class="user-nav__but" onclick="pay_control()">
                <i class="iconfont icon-rmb fz40 cr"></i>
                <div class="c6" onclick="pay_control()">待付款
                  <span class="c3" id="pay_num"></span>
                </div>
              </a>
              <a href="udai_order_all.html" class="user-nav__but" onclick="deliver_control()">
                <i class="iconfont icon-star fz40 cr"></i>
                <div class="c6" onclick="deliver_control()">待发货
                  <span class="c3" id="deliver_num"></span>
                </div>
              </a>
              <a href="udai_order_all.html" class="user-nav__but" onclick="receive_control()">
                <i class="iconfont icon-star fz40 cr"></i>
                <div class="c6" onclick="receive_control()">待收货
                  <span class="c3" id="receive_num"></span>
                </div>
              </a>
              
              <a href="udai_order_all.html" class="user-nav__but" onclick="evaluate_control()">
                <i class="iconfont icon-eval fz40 cr"></i>
                <div class="c6" onclick="evaluate_control()">待评价
                  <span class="c3" id="evaluate_num"></span>
                </div>
              </a>
              <a href="udai_collection.html" class="user-nav__but">
                <i class="iconfont icon-star fz40 cr"></i>
                <div class="c6">收藏
                  <span class="c3" id="collect_num"></span>
                </div>
              </a>
            </div>
          </div>

          <!--以下显示 订单数据-->
          <div class="order-list__div bgf">
            <div class="user-title">
              我的订单
              <span class="c6">（显示最新三条）</span>
              <a href="udai_order_all.html" class="pull-right" onclick="all_control()">查看所有订单></a>
            </div>
            <div class="order-panel">
              <!--第二排的按钮：  所有订单，，待付款，，待发货。。。-->
              <ul class="nav user-nav__title" role="tablist">
                <li role="presentation" class="nav-item active">
                  <a href="#all" aria-controls="all" role="tab" data-toggle="tab">所有订单
                    <span id="allNum"></span>
                  </a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#pay" aria-controls="pay" role="tab" data-toggle="tab">待付款
                    <span id="payNum"></span>
                  </a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#emit" aria-controls="emit" role="tab" data-toggle="tab">待发货
                    <span id="deliverNum"></span>
                  </a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#take" aria-controls="take" role="tab" data-toggle="tab">待收货
                    <span id="receiveNum"></span>
                  </a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#eval" aria-controls="eval" role="tab" data-toggle="tab">待评价
                    <span id="evaluateNum"></span>
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <!--修改处-->
                <div role="tabpanel" class="tab-pane fade in active" id="all">
                  <table class="table text-center" id="orderAll">
                    <tr>
                      <th width="380">商品信息</th>
                      <th width="85">单价</th>
                      <th width="85">数量</th>
                      <th width="120">实付款</th>
                      <th width="120">交易状态</th>
                      <th width="120">交易操作</th>
                    </tr>

                    <!--  一笔订单！！！  -->
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <!--div_2-->
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                          </div>
                        </label>
                      </td>

                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">等待付款</a>
                        <a href class="but c9">订单详情</a>
                      </td>

                      <td class="order">
                        <a href="udai_shopcart_pay.html" class="but but-primary">立即付款</a>
                        <!-- <a href="" class="but but-link">评价</a> -->
                        <a href class="but c3">取消订单</a>
                      </td>
                    </tr>

                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">等待收货</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href="udai_order_receive.html" class="but but-primary">确认收货</a>
                        <!-- <a href="" class="but but-link">评价</a> -->
                        <a href="udai_apply_return.html" class="but c3">退款/退货</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="pay">
                  <table class="table text-center">
                    <tr>
                      <th width="380">商品信息</th>
                      <th width="85">单价</th>
                      <th width="85">数量</th>
                      <th width="120">实付款</th>
                      <th width="120">交易状态</th>
                      <th width="120">交易操作</th>
                    </tr>
                    <tr class="order-empty">
                      <td colspan="6">
                        <div class="empty-msg">最近没有任何订单，家里好像缺了点什么！
                          <br>
                          <a href="item_category.html">要不瞧瞧去？</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="emit">
                  <table class="table text-center">
                    <tr>
                      <th width="380">商品信息</th>
                      <th width="85">单价</th>
                      <th width="85">数量</th>
                      <th width="120">实付款</th>
                      <th width="120">交易状态</th>
                      <th width="120">交易操作</th>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">等待发货</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href="udai_order_receive.html" class="but but-primary">确认收货</a>
                        <a href="udai_apply_return.html" class="but c3">退款/退货</a>
                      </td>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">等待发货</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href="udai_order_receive.html" class="but but-primary">确认收货</a>
                        <a href="udai_apply_return.html" class="but c3">退款/退货</a>
                      </td>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">等待发货</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href="udai_order_receive.html" class="but but-primary">确认收货</a>
                        <a href="udai_apply_return.html" class="but c3">退款/退货</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="take">
                  <table class="table text-center">
                    <tr>
                      <th width="380">商品信息</th>
                      <th width="85">单价</th>
                      <th width="85">数量</th>
                      <th width="120">实付款</th>
                      <th width="120">交易状态</th>
                      <th width="120">交易操作</th>
                    </tr>
                    <tr class="order-empty">
                      <td colspan="6">
                        <div class="empty-msg">最近没有任何订单，家里好像缺了点什么！
                          <br>
                          <a href="item_category.html">要不瞧瞧去？</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="eval">
                  <table class="table text-center">
                    <tr>
                      <th width="450">商品信息</th>
                      <th width="85">单价</th>
                      <th width="85">数量</th>
                      <th width="120">实付款</th>
                      <th width="120">交易状态</th>
                      <th width="120">交易操作</th>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">交易成功</a>
                        <a href="udai_mail_query.html" class="but cr">查看物流</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href class="but but-link">评价</a>
                        <a href class="but c3">取消订单</a>
                      </td>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">交易成功</a>
                        <a href="udai_mail_query.html" class="but cr">查看物流</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href class="but but-link">评价</a>
                        <a href class="but c3">取消订单</a>
                      </td>
                    </tr>
                    <tr class="order-item">
                      <td>
                        <label>
                          <div class="num">
                            <!-- <input type="checkbox"> -->
                            2017-03-30 订单号: 2669901385864042
                          </div>
                          <div class="card">
                            <div class="img">
                              <img src="../../static/images/temp/item-img_1.jpg" alt class="cover">
                            </div>
                            <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                            <div class="format">颜色分类：深棕色 尺码：均码</div>
                            <div class="favour">使用优惠券：优惠¥2.00</div>
                          </div>
                        </label>
                      </td>
                      <td>$100</td>
                      <td>1</td>
                      <td>$1000
                        <br>
                        <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                      </td>
                      <td class="state">
                        <a class="but c6">交易成功</a>
                        <a href="udai_mail_query.html" class="but cr">查看物流</a>
                        <a href class="but c9">订单详情</a>
                      </td>
                      <td class="order">
                        <a href class="but but-link">评价</a>
                        <a href class="but c3">取消订单</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 右侧  浮动的 菜单 -->
    <div class="right-nav">
      <ul class="r-with-gotop">
        <li class="r-toolbar-item">
          <a href="udai_welcome.html" class="r-item-hd">
            <i class="iconfont icon-user" data-badge="0"></i>
            <div class="r-tip__box">
              <span class="r-tip-text">用户中心</span>
            </div>
          </a>
        </li>
        <li class="r-toolbar-item">
          <a href="udai_shopcart.html" class="r-item-hd">
            <i class="iconfont icon-cart"></i>
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
        <!--删除联系客服！！！-->
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

      <!--  底部链接  -->
      <div class="footer-links inner">
        <dl>
          <dt>U袋网</dt>
          <a href="temp_article/udai_article10.html">
            <dd>企业简介</dd>
          </a>
          <a href="temp_article/udai_article11.html">
            <dd>加入U袋</dd>
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
// import initLoad from "../../static/js/welcome.js";

export default {
  name: "",
  data() {
    return {};
  },
  created: function() {},
  mounted: function() {
      $(function() {
        $(".to-top").toTop({ position: false })
      })
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
