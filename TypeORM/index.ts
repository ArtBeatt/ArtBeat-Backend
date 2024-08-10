import { createConnection } from 'typeorm';
import { User } from "./src/entity/user";


createConnection().then(async (connection) => {
    console.log('Connected to database');
    const userRepository = connection.getRepository(User);
    const newuser = new User();
    newuser.id = 1;
    newuser.email = "a";
    // newuser.name  = "a";
    console.log('Users:', newuser);
}).catch((error) => {
    console.log('Error connecting to database:', error);
});