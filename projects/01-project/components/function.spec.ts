 
//  import fetch from 'node-fetch' 
// vi.mock('#app', () => ({
//     defineNuxtPlugin () {
//       return {
//         public: {
//           // Your public config!
//         },
//       }
//     },
// }))
// describe('AJAX functions with Jest', () => {
//     const mockUrl = 'https://jsonplaceholder.typicode.com/todos/1';

import { fetchData } from "~~/helpers/helperFunctions";

 
//     const withFetch = vi.fn( async( url) => {
//         const rest = await fetch( url).then(res=>res.json())
//         return rest
    
//      });
 
//     it('returns returns users from an api call', () => {
//         expect(withFetch(mockUrl)).toEqual({ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false });
         
//       });
//     it('called getUser with a mockUrl', () => {
//       expect(withFetch).toHaveBeenCalledWith(mockUrl);
//     });
//   });
 




/******************* */
// const market = {
//     buy (subject: string, amount: number) {
//       // ...
//     },
//   }

//   test('spy function', () => {
//     const buySpy = vi.spyOn(market, 'buy')

//     market.buy('apples', 10)
//     market.buy('apples', 20)

//     expect(buySpy).toHaveBeenCalledWith('apples', 10)
//     expect(buySpy).toHaveBeenCalledWith('apples', 20)
//   })
vi.mock('#app', () => ({
  useAsyncData () {
    return {
      public: {
        // Your public config!
      },
    }
  },
}))

 
vi.mock( 
  fetchData ()  
  )
 
test('the data is peanut butter', async () => {
  const expected = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
  const data = await fetchData();
 
  expect(data).toBe(expected);
  //  await expect(fetchData()).resolves.toBe(expected);
});
 