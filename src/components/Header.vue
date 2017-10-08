<template>
  <div id="header">
      <div class="row">
          <div class="col">
              <h3 class="m-2">TKR</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    line-height: 1;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #eee;
}
</style>
