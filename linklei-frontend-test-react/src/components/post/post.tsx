import { PostStyled } from "./post.style";
import { IPost } from "../../requests/get-posts.interface";
import { MenuBook, Newspaper, Group } from "@mui/icons-material";

export function Post(postData: IPost) {
  function renderSwitch(param: string) {
    switch (param) {
      case "post":
        return <MenuBook />;
      case "artigo":
        return <Newspaper />;
      case "grupo":
        return <Group />;
      default:
        return <MenuBook />;
    }
  }

  return (
    <PostStyled>
      <div className="identify">
        <img className="photo" src="avatar_default.png" alt="avatar" />

        <div>
          <strong>{postData.user}</strong>
          <p>{postData.date}</p>
        </div>
      </div>
      <div className="type">
        {renderSwitch(postData.type)}
        <p>{postData.type}</p>
      </div>
      <div className="text">
        <p>
          {postData.text.length > 500
            ? postData.text.substring(0, 500) + "..."
            : postData.text}
        </p>
      </div>
    </PostStyled>
  );
}
