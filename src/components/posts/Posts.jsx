import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
      <Post img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg" />
    </div>
  );
}