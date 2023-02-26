import { StorageSerializers } from "@vueuse/core"

export default async (
    chapterSlug:string,
    lessonSlug:string
)=>{
    const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    const lesson = useSessionStorage(
        url,null,{
            serializer:StorageSerializers.object
        }
    )

    if(!lesson.value){
    const {data,error} = await useFetch(
       url
    )

    //same another method is;

/*     const {data,error} = await useAsyncData(()=>
        $fetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)
 )
 */
    if(error.value){
        throw createError({
            ...error.value,
            statusMessage:`Couldnt fetch lesson ${lessonSlug} in chapter ${chapterSlug}`
        })
        
    }
    lesson.value = data.value
}else{
    console.log("getting lesson from cache");
}

    return lesson
}