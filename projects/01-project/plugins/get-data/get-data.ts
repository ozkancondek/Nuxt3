
import { useFetch } from "#app";
 


export const getData = ()=>{
  return async ()=>{
    const {data} = await useFetch(  "https://jsonplaceholder.typicode.com/todos/1" )
 
    return data.value
  }
}


