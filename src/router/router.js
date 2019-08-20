import Home from '../views/Home.vue'

export default[
    {
      path: '/',
      name: 'home',
	  component: Home,
	  redirect: '/find',
	  children: [
		{
			path: 'my',
			meta: {logined: true},
			component: () => import('../components/Home/homeMy')
		},
		{
			path: 'find',
			component: () => import('../components/Home/homeFind')
		},
		{
			path: 'chart',
			component: () => import('../components/Home/homeChart')
		}
	  ]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/user',
		name: 'user',
		meta: {logined: true},
		component: () => import('../views/User.vue')
	},
	{
		path: '/list/:id',
		name: 'list',
		component: () => import('../views/SongList.vue')
	},
	{
		path: '/search/',
		name: 'search',
		component: () => import('../views/Search.vue')
	},
	{
		path: '/singer/:id',
		name: 'singer',
		component: () => import('../views/Singer.vue')
	},
	{
		path: '/recentsong',
		name: 'recentsong',
		component: () => import('../views/RecentSong.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/test.vue')
	}
]
