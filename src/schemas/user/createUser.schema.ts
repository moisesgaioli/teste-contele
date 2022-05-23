import * as yup from "yup"
import { hashSync } from "bcrypt"


const createUserSchema = yup.object().shape({
    email: yup.string().email().lowercase().required(),
    password: yup.string().transform(pwd => hashSync(pwd, 10)).required(),  
})

export default createUserSchema
