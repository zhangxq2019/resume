import Vue from 'vue'
import Router from 'vue-router'
import me from '../components/me'
import skill from "../components/skill";
import project from "../components/project";
Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          name: 'me',
          components: {
            right: me
          }
        },
        {
          path: '/skill',
          name: 'skill',
          components: {
            right: skill
          }
        },
        {
          path: '/project',
          name: 'project',
          components: {
            right: project
          }
        }
      ]
})
