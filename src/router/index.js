import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login/Login';

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/login', component: Login},
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        const token = sessionStorage.getItem('token');
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;
