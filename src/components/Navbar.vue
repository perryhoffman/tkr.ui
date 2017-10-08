<template>
  <div id="nav-bar">
    <ul>
        <li class="nav-bar_item"><a href="#/login">Login</a></li>
        <li class="nav-bar_item"><a href="#/signup">Signup</a></li>
        <li class="nav-bar_item"><a href="#/">Dashboard</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
#nav-bar {
    position: relative;
    z-index: 2;
    padding-top: 50px;
    float: left;
    bottom: 0;
    width: 190px; /* width: 64px; */
    border-right: 1px solid #eee;
    background: #ffffff;
    min-height: 100vh;
    padding-bottom: 160px;
}
#nav-bar .nav-bar_item {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
#nav-bar .nav-bar_item:hover {
    background: #eee;
    cursor: pointer;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
a {
    color: #afafaf;
}
a:hover {
    color: #afafaf;
    text-decoration: none;
}
</style>
