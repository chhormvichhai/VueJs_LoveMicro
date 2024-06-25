<script setup>
import UserLayout from "../layout/UserLayout.vue";
import { useRoute } from 'vue-router'
import { useDepartmentStore } from '@/stores/department.js';
import { onMounted, ref, computed, reactive } from 'vue'

const departmentStore = useDepartmentStore()
const route = useRoute()
const departmentName = ref('')
onMounted(async () => {

  try {
    await departmentStore.loadStaffs(route.params.id)
    console.log(departmentStore.staffs)
    departmentName.value = departmentStore.staffs[0]['departmentName']
  }
  catch (error) {
    console.log('error ', error)
  }


})
</script>
<template>

  <UserLayout>
    <div class="flex flex-row justify-between">
      <div class="text-3xl font-bold ">{{ departmentName }} Department</div>
      <RouterLink :to="{ name: 'staff-create', params: { id: route.params.id } }" class="btn btn-info ">Add new staff
      </RouterLink>
    </div>

    <div class="stats shadow">


    </div>


    <div class="overflow-x-auto">
      <table class="table table-xl  table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Dob</th>
            <th>CID</th>
            <th>Address</th>
            <th>Salary</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, index) in departmentStore.staffs" :key="staff.id">
            <th>{{ index + 1 }}</th>
            <th>{{ staff.id }}</th>
            <td>{{ staff.name }}</td>
            <td>{{ staff.sex }}</td>
            <td>{{ staff.dob }}</td>
            <td>{{ staff.cid }}</td>
            <td>{{ staff.address }}</td>
            <td>{{ staff.salary }}</td>
            <td>
              <RouterLink :to="{name:'staff-update', params: { id: staff.id }}" class=" btn btn-accent mr-11">
                Edit
              </RouterLink>
            </td>


          </tr>

        </tbody>

      </table>
    </div>

  </UserLayout>

</template>