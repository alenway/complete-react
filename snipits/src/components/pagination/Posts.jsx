import PropTypes from "prop-types";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          style={{ border: "1px solid grey", padding: "10px" }}
          key={post.id}
        >
          {post.title}
        </div>
      ))}
    </div>
  )
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired, // Add this line for prop validation
  loading: PropTypes.bool.isRequired,
};

export default Posts;
