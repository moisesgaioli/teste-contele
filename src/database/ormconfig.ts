import dotenv from "dotenv"
import path from "path"
import { ConnectionOptions } from "typeorm"


dotenv.config()

const developmentEnv = {
   type: "postgres",
   url: process.env.DATABASE_URL,   
   logging: false,
   entities: [
      path.join(__dirname, "../entities/**/**.ts")
   ],
   migrations: [
      path.join(__dirname, "../migrations/**/**.ts") 
   ],
   cli: {
      entitiesDir: path.join(__dirname, "../entities"),
      migrationsDir: path.join(__dirname, "../migrations")
   }
} as ConnectionOptions;

export default developmentEnv