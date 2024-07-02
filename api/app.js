import express from 'express';
import postRoute from './routes/post.route.js'; 

const app = express();

// Mount the post route handler
app.use("/api/posts", postRoute);

// Start the server
app.listen(8800, () => {
  console.log("Server is running!");
});
