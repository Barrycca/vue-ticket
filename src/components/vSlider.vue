<template>
  <div class="s-wrap">
    <div class="header" :class="{'move':navShow}">
      <div class="menu-bx" @click="slideClick">
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="t-title">{{title}}</div>

      <i class="iconfont icon-kefu"></i>
    </div>
    <div class="hidden-mask" v-show="navShow" @click="slideClick"></div>
    <div class="draw-l" :class="{'show':navShow}">
      <div class="user-inf">
        <div class="avatar" v-if="isLogin">
          <img src="//staticdn.qupiaowang.com/m/template/images/headpic.jpg" alt />
          <div class="name">qpw_45454A45</div>
        </div>
        <div class="login-box" v-else>
          <div class="btns">
            <a href="/login.html" class="btn login">登录 / LOGIN</a>
            <a href="/register.html" class="btn reg">注册 / REGISTER</a>
          </div>
          <div class="rest">
            <img src="//staticdn.qupiaowang.com/m/template/images/mascot1.png" alt="趣票" />
          </div>
        </div>
      </div>
      <div class="lf-nav">
        <ul>
          <li>
            <i class="icon-nav icon-home"></i>
            <b>首页&nbsp;&nbsp;/&nbsp;HOME</b>
          </li>
          <li>
            <i class="icon-nav icon-nav-vip"></i>
            <b>会员&nbsp;&nbsp;/&nbsp;VIP</b>
          </li>
          <li>
            <i class="icon-nav icon-nav-check"></i>
            <b>我的订单&nbsp;&nbsp;/&nbsp;ORDER</b>
          </li>
          <li>
            <i class="icon-nav icon-nav-service"></i>
            <b>客服&nbsp;&nbsp;/&nbsp;ONLINE SERVICE</b>
            <p>工作日9:00~20:00 周末9:30~18:30</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ifShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  data: function() {
    return {
      isLogin: false,
      navShow:this.ifShow
    };
  },
  methods: {
    slideClick() {
      this.navShow = !this.navShow;
      this.$emit("change-show");
    }
  }
};
</script>

<style scoped lang="stylus">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  flex: 100px 0 0;
  color: $fontClWhite;
  background-color: #000;
  font-size: 32px;
  font-weight: bold;
  transition: transform 0.4s;

  &.move {
    transform: translateX(80%);
  }

  .menu-bx {
    padding: 0 20px;

    >i {
      font-size: 48px;
      font-weight: normal;
    }
  }

  .icon-kefu {
    background: none;
    font-size: 48px;
    padding: 0 20px;
    font-weight: normal;
  }
}

.hidden-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80%;
  right: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0);
}

.draw-l {
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: 100;
  background-color: #202020;
  color: #dadada;
  transform: translateX(-100%);
  transition: transform 0.4s;

  &.show {
    transform: translateX(0);
  }

  .user-inf {
    margin-top: 8%;
    height: 31%;
    overflow: hidden;
    position: relative;

    .avatar {
      text-align: center;

      img {
        width: 184px;
        height: 184px;
        background-color: #fff;
        border-radius: 10px;
        border: 4px solid #e0dedf;
      }

      .name {
        font-size: 28px;
        line-height: 2;
      }
    }

    .login-box {
      height: 100%;

      .btns {
        width: 56%;
        height: 65%;
        margin: 0 auto;

        a {
          display: block;
          overflow: hidden;
          height: 70px;
          max-width: 370px;
          text-align: center;
          margin: 0 auto;
          line-height: 70px;
          font-size: 28px;
          border: none;
          width: 90%;
          color: #fff;
          border-radius: 40px;
          margin-top: 8%;

          &.login {
            background-color: $darkRed;
            margin-top: 0;
          }

          &.reg {
            border: 2px solid $themeCl; /* no */
          }
        }
      }

      .rest {
        width: 22%;
        height: 35%;
        max-width: 220px;

        img {
          width: 100%;
        }
      }
    }
  }

  .lf-nav {
    li {
      padding-top: 36px;
      height: 106px;
      color: #dbdbdb;
      padding-left: 30px;
      box-sizing: border-box;
      font-size: 28px;
      border-top: 2px solid #3d3d3d;

      .icon-nav {
        display: inline-block;
        width: 60px; /* no */
        height: 21px; /* no */
        margin-right: 20px;
        vertical-align: middle;
        background-size: cover;
        background-image: url('https://staticdn.qupiaowang.com/m/template/images/css_sprites3.png');

        &.icon-home {
          background-position: -38px -120px; /* no */
        }

        &.icon-nav-vip {
          background-position: -38px -70px; /* no */
        }

        &.icon-nav-check {
          background-position: -38px -20px; /* no */
        }

        &.icon-nav-service {
          background-position: -38px -148px; /* no */
        }
      }

      p {
        line-height: 60px;
        text-align: right;
        padding-right: 20px;
      }
    }
  }
}
</style>
