<template>
  <div>
    <van-picker  show-toolbar title="标题" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
  methods: {
    onConfirm(value, index) {
        console.log(this)
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>
<style scoped>
.van-picker /deep/ .van-picker-column__item--selected{
    color: red;
}
.van-picker /deep/ .van-picker-column{
 
    z-index: 999;
    position: relative;
}
</style>