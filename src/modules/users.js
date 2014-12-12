define([], function() {
    'use strict';

    return window.exports = (function() {
        var users = {
            login: 'enter a login',
            email: 'enter a valid email'
        };
        return {
            setLogin: function(login) {
                users.login = login;
            },
            setEmail: function(email) {
                users.email = email;
            },
            getLogin: function() {
                return users.login;
            },
            getEmail: function() {
                return users.email;
            }
        };
    })();
});
