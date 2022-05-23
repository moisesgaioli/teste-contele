import "reflect-metadata"
import { createConnection } from "typeorm"
import dotenv from "dotenv"
import developmentEnv from "./database/ormconfig"
import app from "./app"


dotenv.config()

createConnection(developmentEnv)
    .then(() => {
        const PORT = process.env.PORT
        console.log("Database connected")

        app.listen(PORT, () => console.log(`App runing on port ${PORT}`))
    })
    .catch(error => console.log(error))
