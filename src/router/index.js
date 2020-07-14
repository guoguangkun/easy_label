import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "@/components/home";
import left from "@/components/left";
import class_manage from "@/components/class_manage";
import project_manage from "@/components/project_manage";
import work_table from "@/components/work_table";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: 'class_manage', name: 'class_manage', component: class_manage},
        {path: 'project_manage', name: 'project_manage', component: project_manage},
        {path: 'work_table', name: 'work_table', component: work_table},
      ]
    },
    {
      path: '/left',
      name: 'left',
      component: left
    },
  ]
})
