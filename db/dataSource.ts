import { DataSource } from "typeorm";
import { Image } from "./entities/Image.js";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "hackathon_db",
    username: "root",
    password: "",
    entities:[Image],
    synchronize: true,
    logging: false
  });

  const initialize = () =>{
    dataSource.initialize().then(() => {
        console.log("Connected to DB!");
      }).catch(err => {
        console.error("Failed to connect to DB: " + err);
      });
    }
    export default 
    {dataSource,initialize};