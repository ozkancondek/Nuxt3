import courseData from "./courseData"

type Lesson = {
  title:string;
  slug:string;
  number:number;
  downloadUrl:string;
  videoId:number;
  text:string;
  sourceUrl?:string;
}
export type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[] ;
};

export type Course = {
  title: string;
  chapters: Chapter[];
};

export const useCourse = () => {
  return courseData
}
