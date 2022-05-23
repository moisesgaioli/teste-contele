import * as yup from "yup"
import { hashSync } from "bcrypt"


const updateUserSchema = yup.object().shape({
    email: yup.string().email().lowercase(),
    password: yup.string().transform(pwd => hashSync(pwd, 10)),  
})

export default updateUserSchema
