require(['src/modules/users'], function(e) {
    'use strict';

    console.log(e);
    e.setEmail('l.diallo.pro@gmail.com');
    e.setLogin('lainnie');
    console.log(e.getLogin());
    console.log(e.getEmail());
});
