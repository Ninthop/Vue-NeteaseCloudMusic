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
		path: '/test',
		name: 'test',
		component: () => import('../views/test.vue')
	}
]
