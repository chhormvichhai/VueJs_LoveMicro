
import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_RUL = 'http://localhost:8080/stuff'
export const useStaffStore = defineStore('staff',{
    state:()=>({
      list:[],
      staffs:[],
      staff:{},
      searchId:"",
    
    }),
    actions:{
        async findStaffbyId(id){
          try{
            const response = await axios.get(`${BASE_RUL}/${id}`)
            this.staff=response.data
            console.log(this.staff)
            
          }
          catch(error){
            console.log('error ',error)
          }
        },
        async loadDepartments(){
          try{
            const response = await axios.get(`${BASE_RUL}`)
            this.staffs=response.data
            console.log(this.staffs)
            
          }
          catch(error){
            console.log('error ',error)
          }
        },
        async loadStaffs(id){
          try{
            const response = await axios.get(`${BASE_RUL}/${id}/stuffs`)
            this.staffs=response.data
            console.log("Debug:  ")
            console.log(this.staffs)
            
          }
          catch(error){
            console.log('error ',error)
          }
        },
        async addStaff(staff){
            console.log("post ..")
            const bodyData={
                
                    "name":staff.name,
                    "sex":staff.sex,
                    "dob":staff.dob,
                    "cid":staff.cid,
                    "address":staff.address,
                    "status":staff.status,
                    "salary":staff.salary,
                    "startWork":staff.startWork,
                    "stopWork":staff.stopWork,
                    "departmentId":staff.departmentId
                
             }
            console.log(bodyData)
            console.log(bodyData)
            try{
                
              await axios.post(`${BASE_RUL}`,bodyData)
            }catch(error){
              console.log('error ',error)
            }
          },
        async updateStaff(id,staff){
            console.log("put ..")
            const bodyData={
              "name":staff.name,
              "sex":staff.sex,
              "dob":staff.dob,
              "cid":staff.cid,
              "address":staff.address,
              "status":staff.status,
              "salary":staff.salary,
              "startWork":staff.startWork,
              "stopWork":staff.stopWork,
              "departmentId":staff.departmentId
             }
            console.log(bodyData)
            
            try{
                
              await axios.put(`${BASE_RUL}/${id}`,bodyData)
            }catch(error){
              console.log('error ',error)
            }
          },
          async removeDepartment(id){
         
            try{
                await axios.delete(`${BASE_RUL}/${id}`)
  
            }catch(error){
              console.log('error ',error)
            }
          },
        
    }
    
})
