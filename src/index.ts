import "reflect-metadata";
import {createConnection} from "typeorm";
import app from './server'


if (!process.env) {
   throw new Error(`env file required pleas create`) 
}


const PORT = process.env.PORT || 4000;


(async function(){
    try {
        await createConnection()
        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}.`);
        })
        console.log(`Database connection initialized.`);
        
    } catch (e) {
        throw new Error(`Db connection error ${e.message}`)
    }
})()
