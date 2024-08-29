import { createConnection } from 'typeorm';
import { User } from './src/entity/user';
import { Posts } from './src/entity/post';

createConnection().then(async (connection) => {
    console.log('Connected to database');

    // Create a new user
    const userRepository = connection.getRepository(User);
    const newUser = new User();
    newUser.email = "a@example.com";
    newUser.password = "securepassword123";  // Set a password here
    
    // Save the user to get an ID
    await userRepository.save(newUser);

    // Create new posts
    const postRepository = connection.getRepository(Posts);
    
    const post1 = new Posts();
    post1.id = 1;
    post1.postedBy = newUser;
    await postRepository.save(post1);

    const post2 = new Posts();
    post2.id = 2;
    post2.postedBy = newUser;
    await postRepository.save(post2);

    // Update the user with posts
    newUser.posts = [post1, post2];
    await userRepository.save(newUser);

    console.log('Mock data added to the database');

    const savedUser = await userRepository.findOne({ where: { id: newUser.id }, relations: ['posts'] });
    console.log('Saved User:', savedUser);

}).catch((error) => {
    console.log('Error connecting to database:', error);
});
