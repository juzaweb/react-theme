const { Home } = require( '../src/app/routers/home' );
//const { Post } = require( '../src/components/post' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Home,
    }
];