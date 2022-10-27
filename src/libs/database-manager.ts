import { Student } from "src/entities/student.entity";
import { DataSource, EntityManager } from "typeorm";

let dataSource:DataSource

const getDatabaseConnection=async():Promise<EntityManager>=>{

    if(dataSource && dataSource.isInitialized)
    {
        console.log('Connection already available.reusing the xisting connection');
        return dataSource.manager;
    }
    else{
        console.log('Connection Not available.creating new connection');
        console.log(`connection Not available. creating newone`);
        dataSource = new DataSource({
          applicationName: 'student-service',
          type: 'postgres',
          host: process.env.DBHOSTNAME,
          port: +process.env.DBPORT,
          database: process.env.DBNAME,
          username: process.env.DBUSERNAME,
          password: process.env.DBPASSWORD,
          schema: process.env.DBSCHEMA,
          connectTimeoutMS: 30000,
          synchronize: true,
          logging: false,
          useUTC: true,
          entities: [Student],
        });
        return await dataSource
          .initialize()
          .then(() => {
            console.trace(`new database connectoin made`);
            return dataSource.manager;
          })
          .catch((e) => {
            console.debug(e, `error on connecting to database`);
            throw new Error(e);
          });
    }

};

export {getDatabaseConnection};