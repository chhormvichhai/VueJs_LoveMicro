<script setup>
import UserLayout from "../layout/UserLayout.vue";
import { useRoute } from 'vue-router'
import {useLandTitleStore} from '@/stores/landTitle.js'
import { onMounted, ref, computed, reactive } from 'vue'

const landTitleStore = useLandTitleStore()
const route = useRoute()

onMounted(async () => {

  try {
    await landTitleStore.loadLandTitles();
  
  
  }
  catch (error) {
    console.log('error ', error)
  }


})
</script>
<template>

  <UserLayout>


    <div class="stats shadow">


    </div>


    <div class="overflow-x-auto">
      <table class="table table-xl  table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>First Owner</th>
            <th>Second Owner</th>
            <th>Type</th>
            <th>Area</th>
            <th>Address</th>
            <th>Account ID</th>
            <th>Account Name</th>
         

          </tr>
        </thead>
        <tbody>
          <tr v-for="(landTitle, index) in landTitleStore.landTitles" :key="landTitle.id">
            <th>{{ index + 1 }}</th>
            <th>{{ landTitle.id }}</th>
            <td>{{ landTitle.firstOwner}}</td>
            <td>{{ landTitle.secondOwner }}</td>
            <td>{{ landTitle.type}}</td>
            <td>{{ landTitle.area }}</td>
            <td>{{ landTitle.address }}</td>
            <td>{{ landTitle.accountId }}</td>
            <td>{{ landTitle.accountName }}</td>
         
            <td>
              <RouterLink :to="{name:'landTitle-update', params: { id: landTitle.id }}"  class=" btn btn-accent mr-11">
                Edit
              </RouterLink>
            </td>


          </tr>

        </tbody>

      </table>
    </div>

  </UserLayout>

</template>