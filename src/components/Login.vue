<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <h2>Please Login</h2>
    <form>
      <input type="text" v-model="form.email" placeholder="Email">
      <input type="password" v-model="form.password" placeholder="Password">
      <input type="checkbox" id="stay_loggedin" v-model="form.stay_loggedin">
      <label for="stay_loggedin">Keep me signed in.</label>
      <hr>
      <button v-on:click="submit(form, $event)">Log In</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        email: '',
        password: '',
        stay_loggedin: false,
      }
    }
  },
  methods: {
    submit: function (form, event) {
      event.preventDefault()
      // `this` inside methods points to the Vue instance
      console.log('Submit! ', event, form)
      form.strategy = 'local'

      $.ajax({
        url: 'http://localhost:3030/authentication',
        data: form,
        method: 'POST'
      }).then((res) => {
        console.log('RES ', res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
