<script setup>
import UserLayout from '../layout/UserLayout.vue';
import { reactive, ref, onMounted } from 'vue';
import { useClientStore } from '@/stores/client.js';
import { useRoute } from 'vue-router';
const clientStore = useClientStore()
const route = useRoute()
const test = ref('')
const clientInfo = reactive(
    {
        "name": "Vichhai",
        "sex": "M",
        "dob": "2001-10-10",
        "cid": "03993838",
        "address": "TBK",
        "job": "Programmer",
        "salary": 300.0,
        "education": "Bechelor",
        "status": false,
        "phone": "01233445"
    }
)

onMounted(async () => {
    await clientStore.findClientbyId(route.params.id)
    clientInfo.name = clientStore.client.name
    clientInfo.sex = clientStore.client.sex
    clientInfo.dob = clientStore.client.dob
    clientInfo.cid = clientStore.client.cid
    clientInfo.address = clientStore.client.address
    clientInfo.job = clientStore.client.job
    clientInfo.salary = clientStore.client.salary
    clientInfo.education = clientStore.client.education
    clientInfo.status = clientStore.client.status
    clientInfo.phone = clientStore.client.phone
})
const addClient = async () => {

    try {
        console.log("try to add")
        await clientStore.addClient(clientInfo)
    } catch (error) {
        console.log('error ', error)
    }
}
const updateClient = async () => {
    await clientStore.updateClient(route.params.id, clientInfo);
}
</script>

<template>
    <h1>{{ clientStore.client }}</h1>
    <UserLayout>
        <div class="bg-white w-3/5 p-10 rounded-lg mx-auto mt-10">
            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div class="w-[100%] flex justify-between">
                    <div class="w-[48%]">
                        <label for="first_name"
                            class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Name*</label>
                        <input v-model="clientInfo.name" type="text" id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required />
                    </div>
                    <div class="w-[48%]">
                        <label for="first_name"
                            class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Gender*</label>
                        <input v-model="clientInfo.sex" type="text" id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required />
                    </div>
                </div>
                <div class="w-[100%] flex justify-between">
                    <div class="w-[48%]">
                        <label for="last_name"
                            class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Deate of
                            Birth*</label>
                        <input v-model="clientInfo.dob" type="text" id="last_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe" required />
                    </div>
                    <div class="w-[48%]">
                        <label for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CID</label>
                        <input v-model="clientInfo.cid" type="text" id="company"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Flowbite" required />
                    </div>
                </div>
                <div>
                    <label class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Address*</label>
                    <input v-model="clientInfo.address" type="textarea" maxlength="255"
                        class=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <div class="w-[100%] flex justify-between">
                    <div class="w-[48%]">
                        <label class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Job*</label>
                        <input v-model="clientInfo.job" type="text" min="100"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="w-[48%]">
                        <label class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Salary*</label>
                        <input v-model="clientInfo.salary" type="number" min="100"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                </div>
                <div class=" w-52">
                    <label class="label cursor-pointer">
                        <span class="label-text text-[16px] font-semibold">Status</span>
                        <input v-model="clientInfo.status" type="checkbox" class="toggle toggle-accent"
                            checked="checked" />
                    </label>
                </div>

            </div>
            <div class="w-[100%] flex justify-between">
                <div class="w-[48%]">
                    <label class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Education*</label>
                    <input v-model="clientInfo.education" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <div class="mb-6 w-[48%]">
                    <label class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">Phone*</label>
                    <input v-model="clientInfo.phone" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
            </div>
            <!-- <button @click="updateClient()" class="">Save</button> -->
            <div class="flex justify-end">
                <button @click="updateClient()"
                    class="p-[10px] pl-[20px] pr-[20px] rounded-xl bg-[#0000ffc3] text-white text-[16px] font-semibold hover:bg-[#0000ffad]  ">
                    Update
                </button>
            </div>
        </div>
    </UserLayout>
</template>