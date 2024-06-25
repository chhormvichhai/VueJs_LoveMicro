<script setup>
import UserLayout from "../layout/UserLayout.vue";
import {onMounted,ref,computed, reactive} from 'vue'
import { useDepartmentStore } from '@/stores/department.js';

const departmentStore=useDepartmentStore()
const isLoading=ref(false)
const isUpdate=ref(false)
const department=reactive({
    id:0,
    name:"",
    imageURL:""
})
onMounted(async()=>{
  isLoading.value=true
  try{
    await departmentStore.loadDepartments()
  }
  catch(error){
    console.log('error ',error)
  }

isLoading.value=false
})

const addDepartment=async ()=>{
  isLoading.value=true
  try{
        console.log("try to add")
      await departmentStore.addDepartment(department)
      await departmentStore.loadDepartments()
      department.id=0;
    department.name=""
    department.imageURL=""
  }catch(error){
    console.log('error ',error)
  }
  isLoading.value=false
}
const deleteDepartment=async (id)=>{
  isLoading.value=true
  try{
        console.log("try to add")
      await departmentStore.removeDepartment(id)
      await departmentStore.loadDepartments()
    
  }catch(error){
    console.log('error ',error)
  }
  isLoading.value=false
}
const editDepartment=async (id,name,imageURL)=>{
    department.id=id
    department.name=name
    department.imageURL=imageURL
    isUpdate.value=true
}
const updateDepartment=async()=>{
    console.log("Update....")
   
    await departmentStore.updateDepartment(department.id,department)
    await departmentStore.loadDepartments()
    isUpdate.value=false
    department.id=0;
    department.name=""
    department.imageURL=""
}
const updateOrAddDepartment=()=>{
    if(isUpdate.value){
        updateDepartment()
    }
    else{
        addDepartment()
    }
}



</script>

<template>

    <UserLayout>
        <div class="flex py-11 px-36 space-x-8">
            <div class="flex-1">
                <div class="grid grid-cols-4 gap-4">
                    <div class="card card-compact w-full bg-slate-950 shadow-xl" v-for="department in departmentStore.list" :key="department.id">
                        <figure>
                            <img class="h-48 w-full object-cover"
                                :src="department.imageURL"
                                :alt="department.name" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ department.name }}</h2>
                            <h1>Id: {{ department.id }}</h1>

                            <div>
                                Staff:
                                <div class="badge badge-secondary">{{ department.stuffMembers }}</div>
                            </div>
                            <div class="card-actions justify-end">
                                <button v-if="department.stuffMembers===0" @click="deleteDepartment(department.id)" class="btn btn-error">Delete</button>
                                <button @click="editDepartment(department.id,department.name,department.imageURL)" class="btn btn-info">Edit</button>
                                <RouterLink :to="{name:'department-staff', params: { id: department.id }}"  class="btn btn-primary">View</RouterLink>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <!-- Form -->
            <div class="flex-none w-80">
                <div class="card w-full max-w-sm shadow-2xl bg-slate-950">
                    <dev class="card-body">
                        <div class="">
                            <label class="label">
                                <span class="label-text">Deparment name</span>
                            </label>
                            <input type="text" v-model="department.name" placeholder="Department name" class="input input-bordered" required />
                        </div>
                        <div class="">
                            <label class="label">
                                <span class="label-text">Image URL</span>
                            </label>
                            <input type="text" v-model="department.imageURL" placeholder="URL" class="input input-bordered" required />

                        </div>
                        <div class=" mt-6">
                            <button @click="updateOrAddDepartment()" class="btn btn-primary">{{ isUpdate?"Update":"Save" }}</button>
                        </div>
                    </dev>
                </div>
            </div>
        </div>

    </UserLayout>
</template>