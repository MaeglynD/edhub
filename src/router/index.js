import Vue from 'vue'
import VueRouter from 'vue-router'
import routeDefinitions from './routes';

Vue.use(VueRouter)

const routes = routeDefinitions
	.map((x) => x.routes)
	.flat()
	.map((x) => ({
		...x,
		component: () => import(`@/pages${x.path}`)
	}))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
