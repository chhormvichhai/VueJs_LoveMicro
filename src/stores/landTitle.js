import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_RUL = 'http://localhost:8080/landtitle'
export const useLandTitleStore = defineStore('landTitle', {
  state: () => ({
    list: [],
    landTitles: [],
    landTitle: {},
    searchId: "",
  }),
  actions: {
    async findLandTitleById(id) {
      try {
        const response = await axios.get(`${BASE_RUL}/${id}`)
        this.landTitle = response.data
        console.log(this.landTitle)
      }
      catch (error) {
        console.log('error ', error)
      }
    },
    async loadLandTitles() {
      try {
        const response = await axios.get(`${BASE_RUL}`)
        this.landTitles = response.data
        console.log("Debug:  ")
        console.log(this.landTitles)
      }
      catch (error) {
        console.log('error ', error)
      }
    },
    async addClient(client) {
      console.log("post ..")
      const bodyData = {
        "name": client.name,
        "sex": client.sex,
        "dob": client.dob,
        "cid": client.cid,
        "address": client.address,
        "job": client.job,
        "salary": client.salary,
        "education": client.education,
        "status": client.status,
        "phone": client.phone,
      }
      console.log(bodyData)
      console.log(bodyData)
      try {
        await axios.post(`${BASE_RUL}`, bodyData)
      } catch (error) {
        console.log('error ', error)
      }
    },
    async updateLandTitle(id, landTitle) {
      console.log("put ..")
      const bodyData = {
        "id":id,
        "type": landTitle.type,
        "confirmBy": landTitle.confirmBy,
        "firstOwner": landTitle.firstOwner,
        "secondOwner":landTitle.secondOwner,
        "area": landTitle.area,
        "address": landTitle.address,
        "accountId":landTitle.accountId,
      }
      console.log(bodyData)
      try {
        await axios.put(`${BASE_RUL}/${id}`, bodyData)
      } catch (error) {
        console.log('error ', error)
      }
    },
    async removeDepartment(id) {
      try {
        await axios.delete(`${BASE_RUL}/${id}`)
      } catch (error) {
        console.log('error ', error)
      }
    },
  }
})
