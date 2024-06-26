<script setup>
import UserLayout from "../layout/UserLayout.vue";
import { useRoute } from 'vue-router'
import {useAccountStore} from '@/stores/account.js'
import { onMounted, ref, computed, reactive } from 'vue'

const accountStore = useAccountStore()
const route = useRoute()

onMounted(async () => {

  try {
    await accountStore.loadAccounts();
  
  
  }
  catch (error) {
    console.log('error ', error)
  }


})
</script>
<template>

  <UserLayout>


    <div class="flex justify-end mr-10">
        <ul class="menu menu-vertical lg:menu-horizontal rounded-box">
  <li><button class="btn btn-accent">All</button></li>
  <li><button>Active</button></li>
  <li><button>Close</button></li>
</ul>

    </div>


    <div class="overflow-x-auto">
      <table class="table table-xl  table-zebra">
        <thead>
          <tr>
              <th>No</th>
              <th>ID</th>
            <th>CO</th>
            <th>AA</th>
            <th>BM</th>
            <th>Amount</th>
            <th>Term</th>
            <th>Rate</th>
            <th>Debusdate</th>
            <th>OS</th>
            <th>Account name</th>
            <th>Address</th>
            <th>Deposit</th>
            <th>Close</th>
         

          </tr>
        </thead>
        <tbody>
          <tr v-for="(account, index) in accountStore.accounts" :key="account.id">
            <th>{{ index + 1 }}</th>
            <td>{{ account.id}}</td>
            <th>{{ account.coName }}</th>
            <td>{{ account.aaName}}</td>
            <td>{{ account.bmName }}</td>
            <td>{{ account.amount }}</td>
            <td>{{ account.term }}</td>
            <td>{{ account.rate }}</td>
            <td>{{ account.debusdate }}</td>
            <td>{{ account.os }}</td>
            <td>{{ account.firsMemberName }}</td>
            <td>{{ account.address }}</td>
            <td>{{ account.deposit }}</td>
            <td>{{ account.close}}</td>
         
            <td>
              <RouterLink :to="{name:'account-detail', params: { id: account.id }}"  class=" btn btn-accent mr-11">
                View
              </RouterLink>
            </td>


          </tr>

        </tbody>

      </table>
    </div>

  </UserLayout>

</template>