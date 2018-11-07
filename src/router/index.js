import Vue from 'vue'
import Router from 'vue-router'
import Tui from '@/views/tui/index.vue'
import Search from '@/views/search/index.vue'
import Ranking from '@/views/ranking/index.vue'
import Singer from '@/views/singer/singer.vue'
import TuiDetail from '@/views/tui/detail.vue'
import SearchDetail from '@/views/search/detail.vue'
import SingerDetail from '@/views/singer/detail.vue'
import RankList from '@/views/ranking/detail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:"tui"
    },
    {
      path: '/tui',
      component: Tui,
      children:[
        {
          path:"/tui/:id",
          component:TuiDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      // children:[
      //   {
      //     path:"/search/:id",
      //     component:SearchDetail
      //   }
      // ]
    },
    {
    	path: '/ranking',
    	component: Ranking,
      children:[
        {
          path:"/ranking/:id",
          component:RankList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children:[
        {
          path:"/singer/:id",
          component:SingerDetail
        }
      ]
    }
  ]
})
