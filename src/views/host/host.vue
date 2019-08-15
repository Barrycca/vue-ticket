<template>
  <div class="big-box" :class="{'no-scroll':navShow}">
    <v-slider :ifShow="navShow" @change-show="changeShow" title="100主办"></v-slider>
    <div class="index-wrap" :class="{'move':navShow}">
      <div class="scroll-wrapper">
        <div class="banner-bg" :style="{backgroundImage:'url(' + bannerBg + ')'}">
          <div class="bn-top">
            <img
              src="https://imgcdn.qupiaowang.com//DistributeUrl/20190731/20190731GSXFZO.JPG"
              class="avt"
              alt
            />
            <div class="subscribe" v-if="true">+订阅</div>
            <div class="subscribe on" v-else>已订阅</div>
          </div>
          <div class="u-box">
            <div class="name">100主办</div>
            <img
              src="https://m.qupiaowang.com/templates/ticket/images/sponsor_flag.png"
              alt
              class="identity"
            />
          </div>
          <div class="intro">陌生的街道徘徊的灵魂是你的谁的谁的谁，不是你的谁的谁，没有灵魂的鬼</div>
          <div class="f-box">
            <div class="browse">122浏览</div>
            <div class="fans">222粉丝</div>
          </div>
        </div>
        <div class="tab" id="boxFixed" :class="{is_fixed:isFixed}">
          <ul>
            <li
              :class="{'on':tabIndex==index}"
              v-for="(item,index) in tabList"
              :key="index"
              @click="tabIndex=index"
            >{{item}}</li>
          </ul>
        </div>
        <div class="tab-box">
          <!-- 演出 -->
          <div class="tab-item" v-show="tabIndex==0">
            <div class="filter-box">
              <div class="lf" @click="$router.push('/search')">
                <i class="iconfont icon-search_icon"></i>
                <span>搜索演出</span>
              </div>
              <div class="rt">
                <div
                  class="fil-item"
                  :class="{'on':filterShowIndex==index}"
                  v-for="(item,index) in filterShowList"
                  :key="index"
                  @click="filterShowIndex=index"
                >{{item}}</div>
              </div>
            </div>

            <div class="content-list">
              <div class="content-item">
                <div class="date">12月28日 周六</div>
                <div class="c-item" v-for="i in 5" :key="i" @click="toDetail">
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
                      <span class="h-tag realname">实名制</span>
                    </div>
                    <div class="show-time">
                      <span>2019-12-28 （周六） 19:30</span>
                      <em>
                        剩
                        <b>145</b>天
                      </em>
                    </div>
                    <div class="show-address">场馆：待定</div>
                    <div class="h-price">票价：￥0.01起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 话题 -->
          <div class="tab-item" v-show="tabIndex==1">
            <div class="filter-box">
              <div class="lf">
                <i class="iconfont icon-search_icon"></i>
                <span>搜索话题</span>
              </div>
              <div class="rt">
                <div
                  class="fil-item"
                  :class="{'on':filterTopicIndex==index}"
                  v-for="(item,index) in filterTopicList"
                  :key="index"
                  @click="filterTopicIndex=index"
                >{{item}}</div>
              </div>
            </div>

            <div class="content-list">
              <ul class="topic-box">
                <li
                  style="background-image: url(//imgcdn.qupiaowang.com//topic/20190612/20190612RSUNMG.JPG);"
                  v-for="i in 5"
                  :key="i"
                >
                  <div class="mask-box">
                    <div class="topic-name">你好的</div>
                    <div class="topic-desc">快来参与</div>
                    <p class="isTop">置顶</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 简介 -->
          <div class="tab-item" v-show="tabIndex==2">
            <div class="content-list">
              <div class="introduce-box">
                <div class="i-name">
                  <span>100主办</span>
                </div>
                <div class="poster-list" v-if="tabIndex==2&&imageList.length">
                  <cube-scroll
                    ref="scroll"
                    :data="items"
                    direction="horizontal"
                    class="horizontal-scroll-list-wrap"
                  >
                    <ul class="list-wrapper">
                      <li
                        v-for="(item,index) in items"
                        class="list-item"
                        :key="index"
                        :style="{backgroundImage:'url('+item.image+')'}"
                        @click="handleImgsClick(index)"
                      ></li>
                    </ul>
                  </cube-scroll>
                </div>
                <div class="contact">
                  <i class="iconfont icon-icon-test"></i>
                  <a href="tel:17722446540">17722446540</a>
                </div>
                <div class="address">
                  <i class="icon-address"></i>
                  <span>深圳市罗湖区深南东路文华大厦西座10D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSlider from "../../components/vSlider.vue";
export default {
  name: "host",
  components: {
    vSlider
  },
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      bannerBg: "/static/images/header_bg.png",
      tabList: ["演出", "话题", "简介"],
      tabIndex: 0,
      filterShowList: ["本周", "下周", "两周后"],
      filterShowIndex: "",
      filterTopicList: ["热门", "最新", "已结束"],
      filterTopicIndex: "",
      items: [
        {
          url: "http://www.didichuxing.com/",
          image:
            "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855030_CBCF3526C62242C8AECABCDE92ABF4BD_1934058307.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855052_94C558E68A5C490C93B76E96D28746CF_-626029649.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855070_668125177A9B4F66831488A72F396FB1_804562958.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855086_0F57B50E226A4BAA8CF473F87D81B81B_-123957555.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855104_EF37F6F099DC4BC4B5F1ACE3DEDCF5CF_-1977988041.jpg"
        }
      ],
      imageList: [
        "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855030_CBCF3526C62242C8AECABCDE92ABF4BD_1934058307.jpg",
        "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855052_94C558E68A5C490C93B76E96D28746CF_-626029649.jpg",
        "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855070_668125177A9B4F66831488A72F396FB1_804562958.jpg",
        "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855086_0F57B50E226A4BAA8CF473F87D81B81B_-123957555.jpg",
        "//imgcdn.qupiaowang.com/VenuePic/20180930/20180930120855104_EF37F6F099DC4BC4B5F1ACE3DEDCF5CF_-1977988041.jpg"
      ],
      navShow: false
    };
  },
  methods: {
    //选择过滤
    filterIt(item, index) {
      this.filterIndex = index;
      this.filterType = item;
      this.pageIndex = 1;
      this.getList();
    },
    //获取列表
    getList() {
      this.$api.indexList
        .indexList({
          pageIndex: this.pageIndex,
          pageTotal: 10,
          filterType: this.filterType
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    //吸顶效果
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
    //图片预览
    handleImgsClick(index) {
      this.initialIndex = index;
      const params = {
        $props: {
          imgs: this.imageList,
          initialIndex: "initialIndex", // 响应式数据的key名
          loop: false
        },
        $events: {
          change: i => {
            // 必须更新 initialIndex
            this.initialIndex = i;
          }
        }
      };
      this.$createImagePreview({ ...params }).show();
    },
    //左侧导航弹出
    changeShow() {
      this.navShow = !this.navShow;
    },
    //演出详情
    toDetail() {
      this.$router.push("/showDetail");
    }
  },
  mounted() {
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.horizontal-scroll-list-wrap {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .cube-scroll-content {
    display: inline-block;
  }

  .list-wrapper {
    padding: 0 20px;
    line-height: 60px;
    white-space: nowrap;
  }

  .list-item {
    display: inline-block;
  }
}
</style>

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
    background-color: $bodyBg;
    transition: transform 0.4s;

    &.move {
      transform: translateX(80%);
    }

    .is_fixed {
      position: fixed;
      top: 100px;
      left: 0;
      right: 0;
      z-index: 99;
    }

    .scroll-wrapper {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;

      // -webkit-overflow-scrolling: touch;
      .banner-bg {
        display: flex;
        flex: 480px 0 0;
        height: 480px;
        padding: 40px;
        flex-direction: column;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: $fontClWhite;

        .bn-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .avt {
            height: 160px;
            width: 160px;
            border-radius: 100%;
          }

          .subscribe {
            width: 156px;
            height: 64px;
            line-height: 60px;
            border-radius: 8px;
            color: $themeCl;
            font-size: 28px;
            text-align: center;
            background-color: $bgWhite;

            &.on {
              background-color: rgba(0, 0, 0, 0.5);
              color: $fontClWhite;
            }

            &:active {
              opacity: 0.8;
            }
          }
        }

        .u-box {
          display: flex;
          align-items: center;
          padding: 40px 0;

          .name {
            font-size: 36px;
            color: $fontClWhite;
          }

          .identity {
            height: 40px;
            width: auto;
            margin-left: 10px;
          }
        }

        .intro {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 40px;
        }

        .f-box {
          display: flex;
          align-items: center;
          font-size: 32px;
          color: $fontClWhite;
          margin-top: 20px;

          .browse {
            padding-right: 12px;
            position: relative;
            border-right: 2px solid #fff;
          }

          .fans {
            padding-left: 10px;
          }
        }
      }

      .tab {
        margin-top: -10px;
        border-bottom: 2px solid $bdCl;

        ul {
          display: flex;
          align-items: center;
          height: 120px;
          border-radius: 20px 20px 0 0;
          background-color: #fff;

          li {
            flex: 1;
            text-align: center;
            font-size: 28px;
            color: #aaa;

            &.on {
              position: relative;
              font-size: 36px;
              color: #111;

              &:after {
                content: '';
                position: absolute;
                left: 45%;
                top: auto;
                bottom: -20px;
                right: auto;
                height: 6px;
                width: 10%;
                border-radius: 100px;
                background-color: $themeCl;
              }
            }
          }
        }
      }

      .tab-box {
        .tab-item {
          .filter-box {
            display: flex;
            align-items: center;
            height: 120px;
            padding: 0 30px;
            background-color: $bgWhite;

            .lf {
              display: flex;
              align-items: center;

              >span {
                color: #aaa;
                padding-left: 10px;
              }

              .icon-search_icon {
                color: $themeCl;
              }
            }

            .rt {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0 30px 0 60px;

              .fil-item {
                width: 128px;
                height: 60px;
                line-height: 58px;
                text-align: center;
                border: 2px solid $tipsCl;
                border-radius: 100px;
                color: $tipsCl;
                box-sizing: border-box;

                &.on {
                  border-color: $themeCl;
                  color: $themeCl;
                }
              }
            }
          }

          .content-list {
            .content-item {
              .date {
                height: 100px;
                line-height: 100px;
                color: $titleCl;
                font-size: 28px;
                font-weight: bold;
                padding: 0 20px;
              }

              .c-item {
                display: flex;
                background-color: $bgWhite;
                padding: 20px;
                border-bottom:20px solid $bodyBg

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
            }

            .topic-box {
              padding: 20px 15px;

              li {
                height: 348px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 16px;
                overflow: hidden;
                color: $fontClWhite;
                margin-bottom: 20px;

                .mask-box {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.4);
                  text-align: center;
                  font-size: 32px;
                  padding: 10px;

                  >div {
                    margin-bottom: 34px;
                  }

                  .isTop {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 24px;
                    color: $fontClWhite;
                    background-color: $themeCl;
                    padding: 6px 10px;
                    border-radius: 8px;
                  }
                }
              }
            }

            .introduce-box {
              position: relative;
              background-color: $bgWhite;

              .i-name {
                font-size: 32px;
                display: flex;
                align-items: center;
                padding: 20px;
                line-height: 60px;

                >span {
                  padding-left: 20px;
                }

                &:after {
                  content: '';
                  position: absolute;
                  left: 20px;
                  right: 0;
                  height: 34px;
                  width: 6px;
                  border-radius: 100px;
                  background: #E5004F;
                  top: 32px;
                }
              }

              .poster-list {
                .list-item {
                  width: 230px;
                  height: 230px;
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  margin-right: 8px;
                }
              }

              .contact {
                display: flex;
                align-items: center;
                color: #999;
                font-size: 28px;
                margin: 0 20px;
                padding-top: 40px;
                padding-bottom: 20px;

                >i.icon-icon-test {
                  color: #999;
                  width: 50px; /* no */
                  height: 19px; /* no */
                  font-size: 46px;
                  margin-right: -40px;
                }
              }

              .address {
                display: flex;
                color: #999;
                align-items: center;
                margin: 0 20px;
                padding-top: 40px;
                padding-bottom: 20px;

                >i {
                  display: inline-block;
                  width: 50px; /* no */
                  height: 19px; /* no */
                  background: url('https://staticdn.qupiaowang.com/m/template/images/css_sprites3.png') -49px -294px; /* no */
                  background-size: cover;
                  margin-right: -40px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>