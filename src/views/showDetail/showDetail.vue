<template>
  <div class="big-box" :class="{'no-scroll':navShow}">
    <v-slider :ifShow="navShow" @change-show="changeShow" title="演出详情"></v-slider>
    <div class="index-wrap" :class="{'move':navShow}">
      <div class="scroll-wrapper">
        <div class="c-item">
          <div class="lf-pc">
            <div
              class="h-poster"
              style="background-image:url(https://imgcdn.qupiaowang.com/Images/2015/20151111063202925.jpg)"
            ></div>
            <div class="glance">
              <i class="iconfont icon-eye"></i>
              <span>1039</span>
            </div>
          </div>
          <div class="rt-ct">
            <h3>方大同Soulboy Lights Up巡回演唱会限量周边-明信片</h3>
            <div class="h-tags">
              <span class="h-tag sale">售票中</span>
            </div>
            <div class="show-time">
              <span>2019-12-28 （周六） 19:30</span>
            </div>
            <div class="show-address">场馆：待定</div>
            <div class="h-price">票价：￥0.01起</div>
          </div>
        </div>

        <div class="m-icons">
          <div class="icon-item">
            <i class="collect"></i>
            <p>收藏</p>
          </div>
          <div class="icon-item">
            <i class="approval"></i>
            <p>批文</p>
          </div>
          <div class="icon-item">
            <i class="musiclist"></i>
            <p>曲目</p>
          </div>
          <div class="icon-item">
            <i class="share"></i>
            <p>分享</p>
          </div>
          <div class="icon-item">
            <i class="s_seat"></i>
            <p>座位</p>
          </div>
        </div>

        <div class="tab-wrap">
          <div class="tab-box">
            <ul>
              <li
                :class="{'on':tabIndex == index}"
                v-for="(item,index) in ['购票须知','演出详情','趣票答疑']"
                :key="index"
                @click="tabIndex=index"
              >{{item}}</li>
            </ul>
          </div>
          <div class="tab-item" v-show="tabIndex==0">
            <div class="show-know">
              <table>
                <tbody>
                  <tr class="policy-item">
                    <td>演出时间</td>

                    <td>2019-12-28 （周六） 19:30</td>
                  </tr>
                  <tr class="policy-item">
                    <td>演出场馆</td>
                    <td>待定</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-item" v-show="tabIndex==1">
            <div class="content-block">
              <div class="detail-ct-box" :class="{'all':showMoreFlag}">
                <div class="info-desc active" id="info_desc">
                  <p>
                    <br />
                  </p>
                  <p style="text-align: center;">
                    <strong>
                      <span style="font-size: 18px;">央华戏剧出品舞台剧 《北京人》</span>
                    </strong>
                  </p>
                  <p style="text-align: center;">
                    <br />
                  </p>
                  <p style="text-align: center;">
                    <strong>
                      <span style="font-size: 12px;">中国戏剧新经典《北京人》</span>
                    </strong>
                  </p>
                  <p style="text-align: center;">
                    <span style="font-size: 12px;">制作／出品：北京央华时代文化发展有限公司</span>
                  </p>
                  <p style="text-align: center;">
                    <span style="font-size: 12px;">编剧：曹禺</span>
                  </p>
                  <p style="text-align: center;">
                    <span style="font-size: 12px;">导演：赖声川</span>
                  </p>
                  <p style="text-align: center;">
                    <span style="font-size: 12px;">文学顾问：万方</span>
                  </p>
                  <p style="text-align: center;">
                    <span style="font-size: 12px;">制作人：王可然</span>
                  </p>
                </div>
              </div>
              <div
                class="show-more iconfont"
                :class="{'icon-arrow-up-copy':showMoreFlag,'icon-arrow-right':!showMoreFlag}"
                @click="showMore"
              ></div>
            </div>
          </div>
          <div class="tab-item" v-show="tabIndex==2">
            <div class="content-block">
              <div class="faq-box">
                <h5>常见问题FAQ</h5>
                <ul>
                  <li>
                    <p class="faq-ask">Q：请问支持的支付方式有哪些？</p>
                    <p>A：支付宝，微信支付，快钱快捷支付，网银支付，Paypal。</p>
                  </li>
                  <li>
                    <p class="faq-ask">Q：请问门票收到了可以退票吗？</p>
                    <p>A：一旦票品售出，不支持无理由退换，请您在购买时务必仔细核对您的订单信息并审慎下单。（因不可抗力因素导致演出取消或延期除外）。</p>
                  </li>
                  <li>
                    <p class="faq-ask">Q：请问可以指定快递公司送货吗？</p>
                    <p>A：为了保证全国各地的客户都能在趣票购票，选择快递配送的商品，趣票与多家快递公司合作配送商品，每一个成功购买的订单系统都会默认生成一个包裹。我们会根据订单中的收货地址和票品演出城市选择最合适的物流公司为您配送。</p>
                  </li>
                  <li>
                    <p class="faq-ask">Q：请问预定项目为什么不发货？</p>
                    <p>A：预订/预售票品最终数量视项目主办方及场馆情况而定，正式开票后趣票网将根据用户付款先后顺序依次配票。我们会尽量满足用户需求，如最终未能配票，趣票承诺全额退款，敬请谅解。</p>
                  </li>
                  <li>
                    <p class="faq-ask">Q：请问我购买的票是不是连座的？</p>
                    <p>A：同一笔订单相同项目相同场次同等价位的门票，默认连座出票的。</p>
                  </li>
                </ul>
              </div>
              <div class="oaq-box">
                <h5>趣票答疑</h5>
                <textarea class="oaq-input" placeholder="请输入咨询内容"></textarea>
                <button id="askQuestion">我要提问</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buy-btn" @click="$router.push('/selectTicket')">立即购买</div>
    </div>
  </div>
</template>

<script>
import vSlider from "../../components/vSlider.vue";
export default {
  name: "showDetail",
  components: {
    vSlider
  },
  data() {
    return {
      navShow: false,
      tabIndex: 0,
      showMoreFlag: false
    };
  },
  methods: {
    changeShow() {
      this.navShow = !this.navShow;
    },
    showMore() {
      this.showMoreFlag = !this.showMoreFlag;
    }
  },
  mounted() {},
  destroyed() {}
};
</script>


<style scoped lang="stylus">
.big-box {
  &.no-scroll {
    overflow: hidden;
  }

  .index-wrap {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    transition: transform 0.4s;

    &.move {
      transform: translateX(80%);
    }

    .scroll-wrapper {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 80px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      .c-item {
        display: flex;
        background-color: $bgWhite;
        padding: 20px;
        margin-bottom: 20px;

        .lf-pc {
          position: relative;

          .h-poster {
            width: 210px;
            min-height: 256px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .glance {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            height: 60px;
            background-color: rgba(0, 0, 0, 0.75);
            color: $fontClWhite;

            >i {
              padding: 0 10px;
            }
          }
        }

        .rt-ct {
          margin-left: 20px;

          >h3 {
            font-size: 26px;
            color: $titleCl;
            line-height: 1.5;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-bottom: 12px;
          }

          .h-tags {
            display: flex;
            align-items: center;

            .h-tag {
              width: 100px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: $bgWhite;
              margin-right: 20px;

              &.sale {
                background-color: $themeCl;
              }

              &.realname {
                background-color: #b20086;
              }
            }
          }

          .show-time {
            color: $subCl;
            font-size: 24px;
            margin-top: 12px;

            b {
              padding: 0 6px;
              margin: 0 6px;
              color: $fontClWhite;
              background-color: $themeCl;
              font-weight: 400;
            }
          }

          .show-address {
            color: $subCl;
            padding: 20px 0;
          }

          .h-price {
            color: $subCl;
          }
        }
      }

      .m-icons {
        display: flex;

        .icon-item {
          flex: 1;
          text-align: center;

          i {
            display: block;
            width: 50px; /* no */
            height: 24px; /* no */
            margin: 18px auto 20px;
            background-image: url('//staticdn.qupiaowang.com/m/template/images/css_sprites2.png');
            background-size: cover;

            &.collect {
              background-position: -42px -1698px; /* no */
            }

            &.approval {
              background-position: -42px -1592px; /* no */
            }

            &.musiclist {
              background-position: -42px -1626px; /* no */
            }

            &.share {
              background-position: -42px -1662px; /* no */
            }

            &.s_seat {
              background-position: -42px -1698px; /* no */
            }
          }
        }
      }

      .tab-wrap {
        margin-top: 40px;

        .tab-box {
          ul {
            display: flex;

            li {
              flex: 1;
              height: 80px;
              line-height: 80px;
              text-align: center;
              font-size: 26px;
              color: #5f646e;
              border: 1px solid $lineCl; /* no */
              border-right: none;

              &:first-child {
                border-left: none;
              }

              &.on {
                border: none;
                background-color: $darkRed;
                color: $fontClWhite;
              }
            }
          }
        }

        .tab-item {
          .show-know {
            box-sizing: border-box;
            padding: 70px 30px;

            table {
              width: 100%;
              box-sizing: border-box;
              padding: 70px 30px;

              .policy-item td {
                line-height: 50px;
                border: 1px solid #eee;
                padding: 10px;
                font-size: 24px;
                color: #6d6d72;

                &:nth-child(2) {
                  width: 80%;
                }

                &:nth-child(1) {
                  min-width: 120px;
                  width: 20%;
                  text-align: center;
                  background-color: #f8f6f6;
                }
              }
            }
          }

          .content-block {
            margin: 70px 0;
            padding: 0 60px;
            color: #6d6d72;
            line-height: 1.5;

            .detail-ct-box {
              max-height: 600px;
              overflow: hidden;

              &.all {
                max-height: none;
              }
            }

            .show-more {
              width: 100%;
              height: 40px;
              text-align: center;
              padding-top: 20px;
              color: #e5000f;
              font-size: 40px;
            }

            .faq-box, .oaq-box {
              line-height: 50px;
            }

            .faq-box h5, .oaq-box h5 {
              font-weight: bold;
              margin-bottom: 20px;
              font-size: 28px;
            }

            .faq-box {
              li {
                padding-bottom: 20px;
                margin-bottom: 20px;
                border-bottom: 2px dashed #eee;
              }

              .faq-ask {
                color: #f99;
              }
            }

            .oaq-box {
              .oaq-input {
                width: 100%;
                height: 100px;
                margin: 0;
                text-indent: 1em;
                border: 2px solid #c1b4b4;
                border-radius: 10px;
                outline: none;
              }

              #askQuestion {
                display: block;
                height: 80px;
                width: 400px;
                margin: 30px auto 0;
                border: none;
                outline: 0;
                border-radius: 40px;
                background-color: #349838;
                color: #fff;
              }
            }
          }
        }
      }
    }

    .buy-btn {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      display: block;
      height: 80px;
      text-align: center;
      margin: 10px auto;
      line-height: 80px;
      font-size: 28px;
      border: none;
      width: 90%;
      color: #fff;
      border-radius: 40px;
      background-color: #d5094e;
    }
  }
}
</style>