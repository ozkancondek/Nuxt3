import { defineNuxtPlugin } from '#app'
import { Ref } from 'vue'
 
import { getData } from './get-data'


  type res = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
   
}
declare module '#app' {
    interface NuxtApp {
      $todoOne(): Promise<Ref<res | null>>
    }
  }

export default defineNuxtPlugin(() => {
    const getDataInfo =  getData()
 
    return {
      provide: {
        todoOne:   () =>   getDataInfo(),
      },
    }
  })