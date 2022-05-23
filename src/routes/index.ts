import { Router } from "express";
import { 
    createUserController, 
    deleteAllUsersController, 
    deleteOneUserController, 
    getOneUserController, 
    listAllUsersController, 
    updateUserController 
} from "../controllers";

import { duplicateEmail, userNotFound, validateSchema } from "../middlewares";
import { createUserSchema, updateUserSchema } from "../schemas";

const routerUser = Router()

routerUser.post("/users/", validateSchema(createUserSchema), duplicateEmail, createUserController)
routerUser.get("/users/", listAllUsersController)
routerUser.get("/users/:user_id/", userNotFound, getOneUserController)
routerUser.put("/users/:user_id/", validateSchema(updateUserSchema), userNotFound, duplicateEmail, updateUserController)
routerUser.delete("/users/:user_id/", userNotFound, deleteOneUserController)
routerUser.delete("/users/", deleteAllUsersController)

export default routerUser
