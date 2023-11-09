import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Navigation from "./Navigation";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  
  // get current page posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ color: "blue", margin: "10px 0", fontSize: "32px" }}>
        My Posts
      </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Navigation
        postPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Pagination;
