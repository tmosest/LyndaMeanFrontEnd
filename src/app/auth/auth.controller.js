export class AuthController {
    
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    login() {
        var vm = this;
        this.$auth.login(this.login.user)
        .then(function(token) {
            //console.log(token);
            vm.$auth.setToken(token);
        });
    } 
    
    register() {
        var vm = this;
        this.$auth.signup(this.user)
        .then(function(token) {
            //console.log(token);
            vm.$auth.setToken(token);
        });
    }  

}