import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>Json placeholder data</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            With 💚
          </span>{" "}
          By Óðinn/Dev
        </div>
      </footer>
    </div>
  );
}
export default App;
