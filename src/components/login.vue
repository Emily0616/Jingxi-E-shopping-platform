<template>
  <div>
    <div class="public-head-layout container">
      <a class="logo" href="index.html">
        <img src="../../static/images/icons/logo.png" alt="U袋网" class="cover">
      </a>
    </div>
    <div style="background:url(../../static/images/login_bg.jpg) no-repeat center center; ">
      <div class="login-layout container">
        <div class="form-box login" ref="login" id="login">
          <div class="tabs-nav">
            <h2>欢迎登录京西商城</h2>
          </div>
          <div class="tabs_container">
            <form class="tabs_form" action method="post" id="login_form">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control phone"
                    name="phone"
                    id="login_phone"
                    required
                    placeholder="手机号"
                    maxlength="11"
                    autocomplete="off"
                    type="text"
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control password"
                    name="password"
                    id="login_pwd"
                    placeholder="请输入密码"
                    autocomplete="off"
                    type="password"
                  >
                  <div class="input-group-addon pwd-toggle" title="显示密码">
                    <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class="checkbox">
                <label>
                  <input checked id="login_checkbox" type="checkbox">
                  <i></i> 30天内免登录
                </label>
                <a href="javascript:;" class="pull-right" id="resetpwd">忘记密码？</a>
              </div>
              <!-- 错误信息 -->
              <div class="form-group">
                <div class="error_msg" id="login_error">
                  <!-- 错误信息 范例html
								<div class="alert alert-warning alert-dismissible fade in" role="alert">
									<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<strong>密码错误</strong> 请重新输入密码
								</div>
                  -->
                </div>
              </div>
              <button
                class="btn btn-large btn-primary btn-lg btn-block submit"
                id="login_submit"
                type="button"
                @click="login"
              >登录</button>
              <br>
              <p class="text-center">
                没有账号？
                <a href="javascript:;" id="register">免费注册</a>
              </p>
            </form>
            <div class="tabs_div">
              <div class="success-box">
                <div class="success-msg">
                  <i class="success-icon"></i>
                  <p class="success-text">登录成功</p>
                </div>
              </div>
              <div class="option-box">
                <div class="buts-title">现在您可以</div>
                <div class="buts-box">
                  <a role="button" href="index.html" class="btn btn-block btn-lg btn-default">继续访问商城</a>
                  <a
                    role="button"
                    href="udai_welcome.html"
                    class="btn btn-block btn-lg btn-info"
                  >登录会员中心</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-box register">
          <div class="tabs-nav">
            <h2>
              欢迎注册
              <a href="javascript:;" class="pull-right fz16" id="reglogin">返回登录</a>
            </h2>
          </div>
          <div class="tabs_container">
            <form class="tabs_form" action="index.html" method="post" id="register_form">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control phone"
                    name="phone"
                    id="register_phone"
                    required
                    placeholder="手机号"
                    maxlength="11"
                    autocomplete="off"
                    type="text"
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <input
                    class="form-control"
                    name="smscode"
                    id="register_sms"
                    placeholder="输入验证码"
                    type="text"
                  >
                  <span class="input-group-btn">
                    <button class="btn btn-primary getsms" type="button">发送短信验证码</button>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control password"
                    name="password"
                    id="register_pwd"
                    placeholder="请输入密码"
                    autocomplete="off"
                    type="password"
                  >
                  <div class="input-group-addon pwd-toggle" title="显示密码">
                    <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class="checkbox">
                <label>
                  <input checked id="register_checkbox" type="checkbox">
                  <i></i> 同意
                  <a href="temp_article/udai_article3.html">京西商城用户协议</a>
                </label>
              </div>
              <!-- 错误信息 -->
              <div class="form-group">
                <div class="error_msg" id="register_error"></div>
              </div>
              <button
                class="btn btn-large btn-primary btn-lg btn-block submit"
                id="register_submit"
                type="button"
              >注册</button>
            </form>
            <div class="tabs_div">
              <div class="success-box">
                <div class="success-msg">
                  <i class="success-icon"></i>
                  <p class="success-text">注册成功</p>
                </div>
              </div>
              <div class="option-box">
                <div class="buts-title">现在您可以</div>
                <div class="buts-box">
                  <a role="button" href="index.html" class="btn btn-block btn-lg btn-default">继续访问商城</a>
                  <a
                    role="button"
                    href="udai_welcome.html"
                    class="btn btn-block btn-lg btn-info"
                  >登录会员中心</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-box resetpwd">
          <div class="tabs-nav clearfix">
            <h2>
              找回密码
              <a href="javascript:;" class="pull-right fz16" id="pwdlogin">返回登录</a>
            </h2>
          </div>
          <div class="tabs_container">
            <form
              class="tabs_form"
              action="https://rpg.blue/member.php?mod=logging&action=login"
              method="post"
              id="resetpwd_form"
            >
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control phone"
                    name="phone"
                    id="resetpwd_phone"
                    required
                    placeholder="手机号"
                    maxlength="11"
                    autocomplete="off"
                    type="text"
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <input
                    class="form-control"
                    name="sms"
                    id="resetpwd_sms"
                    placeholder="输入验证码"
                    type="text"
                  >
                  <span class="input-group-btn">
                    <button class="btn btn-primary getsms" type="button">发送短信验证码</button>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                  </div>
                  <input
                    class="form-control password"
                    name="password"
                    id="resetpwd_pwd"
                    placeholder="新的密码"
                    autocomplete="off"
                    type="password"
                  >
                  <div class="input-group-addon pwd-toggle" title="显示密码">
                    <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <!-- 错误信息 -->
              <div class="form-group">
                <div class="error_msg" id="resetpwd_error"></div>
              </div>
              <button
                class="btn btn-large btn-primary btn-lg btn-block submit"
                id="resetpwd_submit"
                type="button"
              >重置密码</button>
            </form>
            <div class="tabs_div">
              <div class="success-box">
                <div class="success-msg">
                  <i class="success-icon"></i>
                  <p class="success-text">密码重置成功</p>
                </div>
              </div>
              <div class="option-box">
                <div class="buts-title">现在您可以</div>
                <div class="buts-box">
                  <a role="button" href="index.html" class="btn btn-block btn-lg btn-default">继续访问商城</a>
                  <a role="button" href="login.html" class="btn btn-block btn-lg btn-info">返回登陆</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-login container clearfix">
      <!-- 版权 -->
      <p id="group" class="copyright">
        小组成员：
        <span>贺彦</span>
        <span>赵彧涵</span>
        <span>陈虹吕</span>
        <span>张一文</span>
        <span>袁德佳</span>
        <br>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      phone: 0,
      password: "",
      newPassword: ""
    };
  },
  created: function() {},
  mounted: function() {
    // $(".login").show();
    // 判断直接进入哪个页面 例如 login.php?p=register
    switch ($.getUrlParam("p")) {
      case "register":
        $(".register").show();
        break;
      case "resetpwd":
        $(".resetpwd").show();
        break;
      default:
        $(".login").show();
    }
    // 隐藏/显示密码切换
    $(".pwd-toggle").on("click", function() {
      var icon = $(this).find(".glyphicon");
      if (icon.hasClass("glyphicon-eye-open")) {
        $(this)
          .attr("title", "隐藏密码")
          .siblings("input")
          .prop("type", "text");
        icon.removeClass("glyphicon-eye-open").addClass("glyphicon-eye-close");
      } else if (icon.hasClass("glyphicon-eye-close")) {
        $(this)
          .attr("title", "显示密码")
          .siblings("input")
          .prop("type", "password");
        icon.removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");
      }
    });
    $("#register").click(function() {
      $(".login").fadeOut(150, function() {
        $(".register").fadeIn(150);
      });
    });
    $("#resetpwd").click(function() {
      $(".login").fadeOut(150, function() {
        $(".resetpwd").fadeIn(150);
      });
    });
    $("#reglogin").click(function() {
      $(".register").fadeOut(150, function() {
        $(".login").fadeIn(150);
      });
    });
    $("#pwdlogin").click(function() {
      $(".resetpwd").fadeOut(150, function() {
        $(".login").fadeIn(150);
      });
    });
  },
  methods: {
    login() {
      console.log(1);
    }
  }
};
</script>

<style scoped>
@import "../../static/my_css/login.css";
</style>
