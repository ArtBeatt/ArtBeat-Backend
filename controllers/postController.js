import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { Post } from "../entities/Post";

// Hardcoded example of posts (original code)
const posts = [
  {
    username: "Anika",
    title: "post 1",
  },
  {
    username: "jim_c",
    title: "post 2",
  },
];

export const getPosts = (req, res) => {
  res.json(posts);
};

// New controller to get user's published posts
export const getUserPosts = async (req, res) => {
  const userId = req.params.id;
  const userRepository = getRepository(User);
  try {
    const user = await userRepository.findOne(userId, { relations: ['posts'] });
    if (user) {
      res.json(user.posts);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user posts', error });
  }
};

// New controller to get user's saved posts
export const getUserSavedPosts = async (req, res) => {
  const userId = req.params.id;
  const userRepository = getRepository(User);
  try {
    const user = await userRepository.findOne(userId, { relations: ['savedPosts'] });
    if (user) {
      res.json(user.savedPosts);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user saved posts', error });
  }
};
