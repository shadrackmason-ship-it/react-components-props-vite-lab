import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
}

export default ArticleList;