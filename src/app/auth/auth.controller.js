export class AuthController {
    
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
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