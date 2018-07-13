import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import About from '@/components/about/about'
import Produce from '@/components/produce/produce'
import Case from '@/components/case/case'
import Technology from '@/components/technology/technology'
import Cooperate from '@/components/cooperate/cooperate'
import News from '@/components/news/news'
import Contact from '@/components/contact/contact'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/produce',
      name: 'Produce',
      component: Produce
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/cooperate',
      name: 'Cooperate',
      component: Cooperate
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
