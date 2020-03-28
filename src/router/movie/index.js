export default{
    path: '/movie',
    component: () => import('@/views/movie'),
    children:[
        {
            path:'city',
            component: ()=> import('@/components/city')
        },
        {
            path:'nowplaying',
            component: ()=> import('@/components/nowplaying')
        },
        {
            path:'comingsoon',
            component: ()=> import('@/components/comingsoon')
        },
        {
            path:'search',
            component: ()=> import('@/components/Search')
        },
        {
            path:'detail/:movieId',
            components:{
                default:()=>import('@/components/nowplaying'),
                detail:()=>import('@/views/movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                default:()=>import('@/components/comingsoon'),
                detail:()=>import('@/views/movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
    ]
}