import express from "express";
import routerUser from "./routes";


const app = express()

app.use(express.json())
app.use("/api/v1", routerUser)


export default app
