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

const getPosts = (req, res) => {
  res.json(posts);
}