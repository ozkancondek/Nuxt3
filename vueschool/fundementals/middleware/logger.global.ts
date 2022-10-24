export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to,from," from the named middleware")
    const userLoggedIn = true;
    if(!userLoggedIn){
        // return abortNavigation("You not allowed to visit here")
         return navigateTo({name:"/login"})
 
    }
})
