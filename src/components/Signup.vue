<template>
    <div class="container signup">
        <div class="row justify-content-md-center">
            <div class="col-md-8 col-sm-12 col-xs-12 text-left p-5 border border-secondary rounded">
                <h2 class="mb-5">Signup</h2>
                <form>
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input class="form-control" type="text" id="inputEmail" v-model="form.email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input class="form-control" type="password" id="inputPassword" v-model="form.password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="inputConfirmPassword">Confirm Password</label>
                        <input class="form-control" type="password" id="inputConfirmPassword" v-model="form.confirm_password" placeholder="Confirm Password">
                    </div>
                    <button class="btn" v-on:click="submit(form, $event)">Sign up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'signup',
    data() {
        return {
            form: {
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    },
    methods: {
        submit: function(form, event) {
            event.preventDefault()
            // `this` inside methods points to the Vue instance
            console.log('Submit! ', event, form, this.form)

            $.ajax({
                url: 'http://localhost:3030/users',
                data: form,
                dataType: 'json',
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
h1,
h2 {
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
