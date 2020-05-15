<template>
  <ve-pie :data="chartData" style="top: 80px;"></ve-pie>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["状态", "题目数量"],
        rows: [
          { 状态: "已解答", 题目数量: 103 },
          { 状态: "未解答", 题目数量: 1540 },
        ],
      },
    };
  },
};
</script>
