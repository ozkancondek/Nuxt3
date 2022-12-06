
import { useFetch } from "#app";
 


export const getData = ()=>{
  return async ()=>{
    const {data} = await useFetch(  "https://jsonplaceholder.typicode.com/todos/1" )
    console.log("1111");
    console.log(data.value);
    return data.value
  }
}


