import React, { useEffect, useState } from "react";
import { Header } from "./components/header/header";
import { CreatePost } from "./components/create-post/create-post";
import { Post } from "./components/post/post";
import { AppStyled } from "./styles/App.style";
import { IPost } from "./requests/posts.interface";
import { getPost } from "./requests/get-posts.service";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

function App() {
  const [data, setData] = useState([] as IPost[]);
  const postsPerLoad = 5;
  const [postsLoad, setPostsLoad] = useState(postsPerLoad);
  const [showLoading, setShowLoading] = useState(false);

  // TODO: Update when creating a new post
  useEffect(() => {
    getPost(postsPerLoad).then((content) => {
      setData(content.data);
    });
  }, []);

  useEffect(() => {
    getPost(postsLoad).then((content) => {
      setData(content.data);
      setShowLoading(false);
    });
  }, [postsLoad]);

  const handleMorePost = () => {
    setShowLoading(true);

    setTimeout(() => {
      setPostsLoad(postsLoad + postsPerLoad);
    }, 3000);
  };

  // TODO: Do not call when arrived at the data limit on db
  useBottomScrollListener(handleMorePost);

  return (
    <AppStyled className="app">
      <Header />
      <CreatePost />

      <div className="feed">
        {data
          ? data.map((el) => {
              return <Post {...el} key={el.id} />;
            })
          : "Ainda não há posts publicados"}
      </div>
      {showLoading ? <div className="loading">Carregando mais posts </div> : ""}
    </AppStyled>
  );
}

export default App;
