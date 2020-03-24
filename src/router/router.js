import Home from '../views/Home.vue'

export default [
	{
		path: '/',
		name: 'home',
		component: Home,
		redirect: '/find',
		children: [
			{
				path: 'my',
				meta: { logined: true, index: 1 },
				component: () => import('../components/Home/homeMy')
			},
			{
				path: 'find',
				meta: { index: 2 },
				component: () => import('../components/Home/homeFind')
			},
			{
				path: 'chart',
				meta: { index: 3 },
				component: () => import('../components/Home/homeChart')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: { index: 10 },
		component: () => import('../views/Login.vue')
	},
	{
		path: '/user',
		name: 'user',
		meta: { logined: true, index: 5 },
		component: () => import('../views/User.vue')
	},
	{
		path: '/list/:id',
		name: 'list',
		meta: { index: 8 },
		component: () => import('../views/SongList.vue')
	},
	{
		path: '/search/',
		name: 'search',
		meta: { index: 5 },
		component: () => import('../views/Search.vue')
	},
	{
		path: '/singer/:id',
		name: 'singer',
		meta: { index: 8 },
		component: () => import('../views/Singer.vue')
	},
	{
		path: '/recentsong',
		name: 'recentsong',
		meta: { index: 8 },
		component: () => import('../views/RecentSong.vue')
	},
	{
		path: '/everydaysong',
		name: 'everydaysong',
		meta: { index: 8 },
		meta: { logined: true },
		component: () => import('../views/EverydayRec.vue')
	},
	{
		path: '/newsong',
		name: 'newsong',
		meta: { index: 8 },
		component: () => import('../views/NewSong.vue')
	},
	{
		path: '/comments/:id',
		name: 'comments',
		meta: { index: 9 },
		component: () => import('../views/Comments.vue')
	},
	{
		path: '/myCollect',
		name: 'myCollect',
		meta: { index: 7 },
		meta: { logined: true },
		component: () => import('../views/MyCollect.vue')
	},
	{
		path: '/album/:id',
		name: 'album',
		meta: { index: 8 },
		component: () => import('../views/Album.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/test.vue')
	}
]
