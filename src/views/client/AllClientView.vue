<script setup>
import UserLayout from "../layout/UserLayout.vue";
import { useRoute } from 'vue-router'
import { useClientStore } from '@/stores/client.js';
import { onMounted, ref, computed, reactive } from 'vue'

const clientStore = useClientStore()
const route = useRoute()

onMounted(async () => {

  try {
    await clientStore.loadClients()
  }
  catch (error) {
    console.log('error ', error)
  }


})
</script>
<template>

  <UserLayout>
    <div class="flex flex-row justify-between pr-[50px] pl-10">
      <div class="text-3xl font-bold  ml-[30px] mt-[10px]">All Clients</div>
      <RouterLink :to="{name:'add-new-client'}" class="btn btn-info bg-[#0000ffca] text-white capitalize hover:bg-[#0000ffa7] mt-[10px]">Add new client
      </RouterLink>
    </div>
    <div class="stats shadow">
    </div>
    <div class="overflow-x-auto pl-[70px] pr-[50px]">
      <table class="table table-xl  table-zebra">
        <thead >
          <tr class="text-[18px] bg-gray-200 rounded-xl">
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Dob</th>
            <th>CID</th>
            <th>Address</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Education</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in clientStore.clients" :key="client.id"
          >
            <th class="text-[16px]">{{ index + 1 }}</th>
            <th class="text-[16px]">{{ client.id }}</th>
            <td class="text-[16px]">{{ client.name }}</td>
            <td class="text-[16px]">{{ client.sex }}</td>
            <td class="text-[16px]">{{ client.dob }}</td>
            <td class="text-[16px]">{{ client.cid }}</td>
            <td class="text-[16px]">{{ client.address }}</td>
            <td class="text-[16px]">{{ client.job }}</td>
            <td class="text-[16px]">{{ client.salary }}</td>
            <td class="text-[16px]">{{ client.education }}</td>
            <td class="text-[16px]">{{ client.status }}</td>
            <td class="text-[16px]">{{ client.phone }}</td>
            <td>
              <RouterLink :to="{name:'update-client', params: { id: client.id }}"  class=" btn bg-[#008000af] mr-11 text-[white] hover:bg-[#00800052] ">
              Edit
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </UserLayout>

</template>