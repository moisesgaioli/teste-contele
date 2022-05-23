import "reflect-metadata"
import { createConnection } from "typeorm"
import dotenv from "dotenv"
import developmentEnv from "./database/ormconfig"
import app from "./app"
import swaggerUiExpress from "swagger-ui-express"
import swaggerDocument from "./swagger.json"


dotenv.config()

createConnection(developmentEnv)
    .then(() => {
        const PORT = process.env.PORT

        app.use("/documentation", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))

        console.log("Database connected")

        app.listen(PORT, () => console.log(`App runing on port ${PORT}`))
    })
    .catch(error => console.log(error))
