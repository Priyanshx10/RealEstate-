import express from 'express';
import postRoute from './routes/post.route.js'; 
import authRoute from './routes/auth.route.js';

const app = express();
app.use(express.json())

// Mount the post route handler
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

// Start the server
app.listen(8800, () => {
  console.log("Server is running!");
});
