import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        name:'search',
        path:'/search/:keywords',
        component:Search,
        props:(route)=>({keywords3:route.params.keywords,keyords4:route.query.keywords2})
        // props:true
    }
]