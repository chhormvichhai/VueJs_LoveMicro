<script setup>
import UserLayout from "../layout/UserLayout.vue";
import { useRoute } from 'vue-router'
import { useAccountStore } from '@/stores/account.js'
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
      <ul class="menu menu-vertical lg:menu-horizontal rounded-box gap-3">
        <!-- <li><button class="btn btn-accent">All</button></li> -->
        <li><button
            class="p-[8px] pl-[18px] pr-[18px] bg-[#0000ffc1] text-white hover:bg-[#0000ff93] font-semibold">All</button>
        </li>
        <li><button
            class="p-[8px] pl-[18px] pr-[18px] bg-[#ff0000bd] text-white font-semibold hover:bg-[#ff000096]">Active</button>
        </li>
        <li><button class="p-[6px] pl-[18px] pr-[18px]  border-2 text-black">Close</button></li>
      </ul>
    </div>
    <div class="overflow-x-auto pl-[60px] pr-[50px] mt-[10px]">
      <h1 class="font-bold text-[20px] mb-[10px]">Account</h1>
      <table class="table table-xl  table-zebra">
        <thead>
          <tr class="text-[18px] bg-gray-200 rounded-xl">
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
            <th class="text-[16px] font-semibold">{{ index + 1 }}</th>
            <td class="text-[16px] font-semibold">{{ account.id }}</td>
            <th class="text-[16px] font-semibold">{{ account.coName }}</th>
            <td class="text-[16px] font-semibold">{{ account.aaName }}</td>
            <td class="text-[16px] font-semibold">{{ account.bmName }}</td>
            <td class="text-[16px] font-semibold">{{ account.amount }}</td>
            <td class="text-[16px] font-semibold">{{ account.term }}</td>
            <td class="text-[16px] font-semibold">{{ account.rate }}</td>
            <td class="text-[16px] font-semibold">{{ account.debusdate }}</td>
            <td class="text-[16px] font-semibold">{{ account.os }}</td>
            <td class="text-[16px] font-semibold">{{ account.firsMemberName }}</td>
            <td class="text-[16px] font-semibold">{{ account.address }}</td>
            <td class="text-[16px] font-semibold">{{ account.deposit }}</td>
            <td class="text-[16px] font-semibold">{{ account.close }}</td>
            <td>
              <RouterLink :to="{ name: 'account-detail', params: { id: account.id } }" class=" btn btn-accent mr-11 ">
                View
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </UserLayout>
</template>