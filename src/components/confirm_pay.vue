<template>
  <div class="father">
    <div class="dialog">
      <div class="line1"><span>确认支付</span></div>
      <div class="line2">是否确认付款？</div>
      <table class="dialogtable">
        <td><span>确认</span></td>
        <td><span>取消</span></td>
      </table>

    </div>
  </div>
</template>
<script>

  export default {
    name: '',
    data () {
      return {

      }
    },
    created: function(){

    },
    mounted: function(){

    },
    methods: {

    }
  }
</script>
<style scoped>
  .father {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  .dialog{
    width: 300px;
    margin: 0 auto; /*水平居中*/
    position: relative; /*脱离文档流*/
    top: 50%; /*偏移*/
    margin-top: -150px;
    border: 1px solid #c7b5b5;
    border-radius: 10px 10px 10px 10px;
  }

  .line1{
    color: #fff;
    height: 40px;
    font-size: 16px;
    width: 300px;
    padding: 0  15px 0 0;
    background-color: #b31e22;
    display: table-cell;
    vertical-align: middle;
    border-radius: 10px 10px 0 0;
  }
  .line2{
    width: 300px;
    height: 66px;
    line-height: 66px;
    text-align: center;
  }
  .dialogtable{
    height: 35px;
    line-height: 35px;
    width: 100%;
    border-top: 1px solid #b31e22;
    text-align: center;
  }
</style>
