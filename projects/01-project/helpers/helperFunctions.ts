 
// import {useFetch} from "#app"
// export const fetchData = async()=>{
//     const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1', {
    
//         onRequestError({   error }) {
//           // Handle the request errors
//           console.log(error);
//         },
//         onResponse({   response,   }) {
//           // Process the response data
//           return response._data
//         },
        
//       })
//    console.log("object");
//    console.log(data);
//    return data
// }

import { useAsyncData } from "#app";
export const fetchData = async()=>{
    const { data} = await useAsyncData(
        "city",
        async () => {
          let response;
          try {
            response = await $fetch(
              'https://jsonplaceholder.typicode.com/todos/1'
            );
            console.log("object");
            console.log(response);
     
          } catch (e) { console.log(e+"dwd");}
         
           return response
        },
    
    )
    console.log("object");
    console.log(data);
        
    return data
}

