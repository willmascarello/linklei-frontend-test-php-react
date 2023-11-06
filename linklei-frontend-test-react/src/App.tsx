import React, { useEffect, useState } from "react";
import { Header } from "./components/header/header";
import { CreatePost } from "./components/create-post/create-post";
import { Post } from "./components/post/post";
import { AppStyled } from "./styles/App.style";
import { IPost } from "./requests/posts.interface";
import { getPost } from "./requests/get-posts.service";

function App() {
  const [data, setData] = useState([] as IPost[]);

  // TODO: Update when creating a new post
  useEffect(() => {
    getPost().then((content) => {
      setData(content.data);
    });
  }, []);

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
    </AppStyled>
  );
}

export default App;
