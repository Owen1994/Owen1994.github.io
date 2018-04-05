import Vue from 'vue'
import Router from 'vue-router'
import intheaters from '../components/content/in_theaters.vue'
import top250 from '../components/content/top250.vue'
import comingsoon from '../components/content/coming_soon.vue'
import aboutus from '../components/content/about_us.vue'
import contactus from '../components/content/contact_us.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/in_theaters'
    },
    {
      path: '/in_theaters',
      name: 'in_theaters',
      component: intheaters
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250
    },
    {
      path: '/coming_soon',
      name: 'comingsoon',
      component: comingsoon
    },
    {
      path: '/aboutUs',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/contactUs',
      name: 'contactus',
      component: contactus
    }
  ],
  linkActiveClass:"navactive"
})
