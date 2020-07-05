<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :data="chartData"
    style="top: 80px;"
  ></component>
  <!-- <ve-pie :data="chartData" style="top: 80px;"></ve-pie> -->
</template>

<script>
import Vue from "vue";
export default {
  data () {
    return {
      dynamicComponent: null,
      chartData: {
        columns: ["状态", "题目数量"],
        rows: [
          { 状态: "已解答", 题目数量: 148 },
          { 状态: "未解答", 题目数量: 1540 },
        ],
      },
    };
  },
  created () {
    import("v-charts").then((module) => {
      this.dynamicComponent = module.default.VePie;
    });
  },
};
</script>
