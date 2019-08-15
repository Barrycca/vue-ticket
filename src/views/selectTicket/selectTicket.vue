<template>
  <div class="big-box" :class="{'no-scroll':navShow}">
    <v-slider :ifShow="navShow" @change-show="changeShow" title="立即购买"></v-slider>
    <div class="index-wrap" :class="{'move':navShow}">
      <div class="scroll-wrapper">
        <div class="part">
          <div class="tt-box">
            <h3>选择场次</h3>
          </div>
          <div class="list-box">
            <div
              class="list-item"
              :class="{'on':sceneIndex==index}"
              v-for="(item,index) in showList"
              :key="index"
              @click="sceneSelect(index)"
            >
              <p>{{item.timeY}}</p>
              <p>{{item.timeD}}</p>
            </div>
          </div>
        </div>
        <div class="part select-price">
          <div class="tt-box">
            <h3>选择票价</h3>
            <div class="right">
              <span>查看座位</span>
              <i class="iconfont icon-seat"></i>
            </div>
          </div>
          <div class="list-box">
            <div
              class="list-item"
              shortage:true
              :class="{'on':item.selected,'sell-out':item.shortage}"
              v-for="(item,index) in showList[sceneIndex].priceList"
              :key="index"
              @click="priceClick(index,item)"
            >
              <div class="surplus">剩余3张</div>
              <p>
                ￥{{item.price}}
                <span style="color:#9e9e9e">{{item.isVip?"(VIP)":""}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="part">
          <div class="tt-box">
            <h3>选择数量</h3>
          </div>
          <div class="list-box">
            <template v-for="(item,index) in showList">
              <template v-for="(sItem,idx) in item.priceList">
                <div class="cal-item" :key="index+'s'+idx" v-if="sItem.selected">
                  <div class="price">￥{{sItem.price}}</div>
                  <div class="mid">
                    <div class="time">{{item.timeY +' '+item.timeD}}</div>
                    <i class="iconfont icon-bin"></i>
                  </div>
                  <div class="operate">
                    <div class="symbol reduce" @click="reduce(idx,sItem)">－</div>
                    <input
                      type="number"
                      v-model="sItem.selectedQuantity"
                      readonly
                      onfocus="return false"
                    />
                    <div class="symbol add" @click="add(idx,sItem)">＋</div>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div class="caculate-box">
        <div class="lf">
          <i class="iconfont icon-jisuan"></i>
          <span class="total-price">￥{{totalPrice}}</span>
          <span class="sheets">({{sheets}}张)</span>
        </div>
        <div class="buy-btn">立即购买</div>
      </div>
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
      sceneIndex: 0,
      priceIndex: 0,
      showList: [
        {
          timeY: "2019-12-28",
          timeD: "周六 19:30",
          priceList: [
            {
              price: "100.00",
              isVip: false,
              selected: false,
              selectedQuantity: 1,
              shortage: true
            },
            {
              price: "200.00",
              isVip: false,
              selected: false,
              selectedQuantity: 1
            },
            {
              price: "300.00",
              isVip: true,
              selected: false,
              selectedQuantity: 1
            }
          ]
        },
        {
          timeY: "2019-12-29",
          timeD: "周日 19:30",
          priceList: [
            {
              price: "101.00",
              isVip: false,
              selected: false,
              selectedQuantity: 1
            },
            {
              price: "202.00",
              isVip: false,
              selected: false,
              selectedQuantity: 1
            },
            {
              price: "303.00",
              isVip: true,
              selected: false,
              selectedQuantity: 1
            }
          ]
        }
      ],
      totalPrice: 0,
      sheets: 0
    };
  },
  computed: {},
  methods: {
    //计算价格
    caculatePrice() {
      let array = this.showList;
      let arr = [];
      this.sheets = 0;
      this.totalPrice = 0;
      for (let index = 0; index < array.length; index++) {
        let element = array[index].priceList;
        arr.push(...element);
      }
      for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx].selected) {
          this.totalPrice += arr[idx].price * arr[idx].selectedQuantity;
          this.sheets += arr[idx].selectedQuantity;
        }
      }
      console.log(arr);
    },
    changeShow() {
      this.navShow = !this.navShow;
    },
    //选择场次
    sceneSelect(index) {
      this.sceneIndex = index;
      console.log(this.showList[this.sceneIndex]);
      // this.$forceUpdate();
    },
    //选择票价
    priceClick(index, item) {
      console.log(this.showList[this.sceneIndex]);
      if (item.shortage) {
        return;
      }
      item.selected = !item.selected;
      this.caculatePrice();
    },
    reduce(idx, item) {
      item.selectedQuantity -= 1;
      if (item.selectedQuantity < 1) {
        item.selected = false;
        item.selectedQuantity = 1;
      }
      this.caculatePrice();
    },
    add(idx, item) {
      if (item.selectedQuantity > 98) {
        return false;
      }
      item.selectedQuantity += 1;
      this.caculatePrice();
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
    background-color: $bodyBg;
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

      .part {
        background-color: $bgWhite;
        margin-bottom: 20px;

        &.select-price {
          .list-box {
            .list-item {
              position: relative;
              flex: 45% 0 0;
              margin: 50px 1%;

              .surplus {
                position: absolute;
                left: 50%;
                top: -60px;
                transform: translate(-50%, 0);
                height: 36px;
                line-height: 36px;
                padding: 0 16px;
                font-size: 24px;
                color: #fff;
                background: #e5004f;
                border-radius: 36px;

                &:before {
                  content: '';
                  width: 0px;
                  height: 0px;
                  border-top: 8px solid #e5004f;
                  border-left: 8px solid transparent;
                  border-right: 8px solid transparent;
                  position: absolute;
                  bottom: -8px;
                  left: 50%;
                  transform: translate(-50%, 0);
                }
              }
            }
          }
        }

        .tt-box {
          display: flex;
          align-items: center;
          padding: 40px 18px;
          color: #000;
          font-size: 26px;
          border-bottom: 2px solid #cecece;

          h3 {
            flex: 1;
          }

          .right {
            display: flex;
            align-items: center;

            >i {
              color: $themeCl;
              margin: 0 20px;
            }
          }
        }

        .list-box {
          padding: 20px 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .list-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 30% 0 0;
            border: 4px solid #e3e3e3;
            border-radius: 60px;
            padding: 10px 0;
            width: 30%;
            margin: 20px 1%;
            text-align: center;
            font-size: 24px;
            line-height: 1.5;
            min-height: 96px;

            &.on {
              border-color: #e50150;
            }

            &.sell-out {
              background-color: #cbcbcb;
              border-color: #cbcbcb;
              color: #fff;
            }
          }

          .cal-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 24px;
            padding: 0 10px;
            margin: 20px 0;

            .price {
              color: $themeCl;
              font-weight: bold;
            }

            .mid {
              display: flex;
              align-items: center;
              color: #999;

              i {
                margin-left: 20px;
              }
            }

            .operate {
              display: flex;
              align-items: center;

              .symbol {
                width: 60px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                color: $themeCl;
                border: 2px solid #999;
              }

              input {
                max-width: 60px;
                height: 48px;
                line-height: 48px;
                border-top: 2px solid #999;
                border-bottom: 2px solid #999;
                box-sizing: border-box;
                text-align: center;
              }
            }
          }
        }
      }
    }

    .caculate-box {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      padding: 16px 40px;
      background-color: #fff;

      .lf {
        flex: 1;
      }

      .buy-btn {
        width: 200px;
        color: #fff;
        border-radius: 40px;
        background-color: #d5094e;
        border: none;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        text-align: center;
      }
    }
  }
}
</style>