import React, { useState } from "react";
import { Header } from "./components/header/header";
import { CreatePost } from "./components/create-post/create-post";
import { Post } from "./components/post/post";
import { AppStyled } from "./styles/App.style";
import { postsSuccessResponseMock } from "./requests/get-posts.mock";

function App() {
  const [data] = useState(postsSuccessResponseMock.data);

  return (
    <AppStyled className="app">
      <Header />
      <CreatePost />

      <div className="feed">
        {data
          ? data.map((el, i) => {
              return <Post {...el} key={i} />;
            })
          : "Ainda não há posts publicados"}
      </div>
    </AppStyled>
  );
}

export default App;
