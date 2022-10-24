export default defineNuxtRouteMiddleware((to, from) => {
   const userLoggedIn = true;
    if(!userLoggedIn){
       // return abortNavigation("You not allowed to visit here")
        return navigateTo({name:"/login"})

   }
})
