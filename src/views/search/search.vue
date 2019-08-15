<template>
  <div class="search-box">
    <div class="top-search">
      <i class="iconfont icon-commonbtnleft" @click="$router.back()"></i>
      <div class="input-box">
        <input type="text" placeholder="请输入想要查找的项目" v-model="searchVal" @input="searchIt" />
        <i class="iconfont icon-ic_searchclosed" v-show="searchVal" @click="clearVal"></i>
      </div>
      <div class="txt" @click="searchIt">搜索</div>
    </div>
    <div class="history-box" v-if="historyList.length&&!searchVal&&!resultList.length">
      <div class="tt">历史记录</div>
      <div class="history-contont">
        <ul>
          <li
            v-for="(item,index) in historyList"
            :key="index"
            @click="searchIt($event,item)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="clear-his" v-if="historyList.length">
        <i class="iconfont icon-bin"></i>
        <span>清空历史记录</span>
      </div>
    </div>
    <div class="result-box" v-if="resultList.length">
      <ul>
        <li v-for="(item,index) in resultList" :key="index">{{item.text}}</li>
      </ul>
    </div>
    <div class="none-data" v-if="!resultList.length&&searchVal">
      <i class="iconfont icon-search_icon"></i>
      <div class="tips">
        <p>很抱歉，没有找到相关的演出</p>
        <p>您可以更换关键词重新尝试</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      historyList: ["搜索曾经的你", "如何彬", "如何看看", "如何彬", "如何看看"],
      searchVal: "",
      resultList: [
        {
          id: 101,
          text: "方大同soulboy lights up巡回演唱会周边-大礼包（5款）"
        },
        {
          id: 102,
          text: "方大同soulboy lights up巡回演唱会限量周边-挂绳"
        },
        {
          id: 103,
          text: "方大同soulboy lights up巡回演唱会限量周边-明信片"
        }
      ]
    };
  },
  methods: {
    searchIt(e, key) {
      console.log(key);
      if (key) {
        this.searchVal = key;
      }
      if (!this.searchVal) {
        this.toast("请输入关键词再搜索");
        this.resultList = [];
        return;
      }
    },
    clearVal() {
      this.searchVal = "";
      this.resultList = [];
    }
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="stylus">
.search-box {
  .cube-input_active:after {
    border: none;
  }

  .cube-input {
    flex: 1;
    padding-left: 34px;
    border-radius: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    outline: none;
    border: none;
    overflow: hidden;

    &:after {
      border: none;
    }

    input {
      padding: 0;
      outline: none;
    }
  }
}
</style>

<style scoped lang="stylus">
.search-box {
  .top-search {
    height: 100px;
    display: flex;
    align-items: center;
    background-color: $bgBlack;

    >.icon-commonbtnleft {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 74px;
      height: 100px;
      color: $fontClWhite;
    }

    .input-box {
      position: relative;
      flex: 1;
      border-radius: 60px;
      height: 60px;
      line-height: 60px;
      font-size: 28px;
      outline: none;
      border: none;
      overflow: hidden;

      input {
        width: 100%;
        height: 100%;
        padding-left: 34px;
      }

      >i {
        position: absolute;
        right: 20px;
        top: 0px;
        color: #8a8a8a;
      }
    }

    .txt {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 100px;
      color: $fontClWhite;
      font-size: 28px;
    }
  }

  .history-box {
    >.tt {
      padding: 30px 28px 20px;
      color: $grayCl;
      font-size: 28px;
      background-color: $bodyBg;
      line-height: 1.5;
    }

    .history-contont {
      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 0;

        li {
          margin: 20px;
          padding: 16px 12px;
          color: $fontClWhite;
          background: $blockBg;
          font-size: 28px;
          border-radius: 10px;

          &:active {
            opacity: 0.8;
          }
        }
      }
    }

    .clear-his {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 88px;
      color: $clearCl;
      font-size: 28px;
      background-color: $bodyBg;

      >i {
        margin-right: 10px;
      }

      >span {
        margin-top: 4px;
      }
    }
  }

  .result-box {
    ul {
      li {
        padding: 30px 20px;
        border-bottom: 2px dashed #cecece;
        font-size: 28px;
      }
    }
  }

  .none-data {
    text-align: center;
    padding: 180px 0;

    >i {
      font-size: 106px;
    }

    .tips {
      margin-top: 100px;
      color: $blockBg;

      p {
        line-height: 2;
        font-size: 28px;
      }
    }
  }
}
</style>