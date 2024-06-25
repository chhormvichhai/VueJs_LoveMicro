import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Department from '@/views/department/DepartmentView.vue'
import StuffInDepartment from '@/views/department/StuffInDepartment.vue'
import StaffForm from '@/views/staff/StaffFormView.vue'
import StaffUpdade from '@/views/staff/StaffUpdateView.vue'
import AllClientView from '@/views/client/AllClientView.vue'
import AddNewClient from '@/views/client/AddNewClientView.vue'
import UpdateClientInfo from '@/views/client/UpdateClientnfo.vue'
import AllLandTitle from '@/views/landTitle/AllLandTitleView.vue'
import UpdateLandTitle from '@/views/landTitle/UpdateLandTitleView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/department',
      name: 'department',
      component: Department
    },
    
    {
      path: '/department/:id',
      name: 'department-staff',
      component: StuffInDepartment
    },
    {
      path: '/staff/form/:id',
      name: 'staff-create',
      component: StaffForm
    },
    {
      path: '/staff/update/:id',
      name: 'staff-update',
      component: StaffUpdade
    },
    
    {
      path: '/client',
      name: 'all-client-info',
      component: AllClientView
    },
    {
      path: '/client/add',
      name: 'add-new-client',
      component: AddNewClient
    },
    {
      path: '/client/update/:id',
      name: 'update-client',
      component: UpdateClientInfo
    },
    {
      path: '/landtitle',
      name: 'all-landTitles',
      component: AllLandTitle
    },
    {
      path: '/landtitle/update/:id',
      name: 'landTitle-update',
      component: UpdateLandTitle
    },
    
  ]
})

export default router
