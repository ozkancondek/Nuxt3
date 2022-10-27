

import { db } from "../db/index";
import { v4 as uuid } from "uuid";
//import { sendError } from "h3";

export default defineEventHandler(async (e) => {
  //define the method first    
  const method = e.req.method;

  if (method === "GET") {
   
    return db.todos;
  }

  if (method === "POST") {
    const body = await useBody(e);
      //if body is wrong send an error
    // if (!body.item) {
    //   const TodoNotFoundError = createError({
    //     statusCode: 400,
    //     statusMessage: "No item provided",
    //     data: {},
    //   });

    //   sendError(e, TodoNotFoundError);
    // }

    const newTodo = {
      //generate a ne id
      id: uuid(),
      item: body.item,
      completed: false,
    };

    db.todos.push(newTodo);

    return newTodo;
  }
});