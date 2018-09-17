/**
* 全局变量组件
* Hukai
*/
<template>
</template>

<script>
  const pagerParam = {
    pageNo: 1,
    pageSize: 10,
    pageTotal: 0,
    currentPage: 1
  }

  const pageSizes = [10, 20, 30]

  const urlPrefix = "/api"

  export default {
    pagerParam,
    pageSizes,
    urlPrefix
  }

</script>

<style>
</style>
