import { useState } from "react";
import { PostStyled } from "./post.style";
import { IPost } from "../../requests/posts.interface";
import {
  MoreHoriz,
  Edit,
  DeleteOutlineOutlined,
  MenuBook,
  Newspaper,
  Group,
} from "@mui/icons-material";
import { Button } from "react-bootstrap";

export function Post(postData: IPost) {
  const [openOptions, setOpenOptions] = useState(false);

  const bigText = postData.text.length > 500;
  const [readMoreOpen, setReadMoreOpen] = useState(!bigText);

  function renderOptions() {
    return (
      <div className="optionModal">
        <button className="edit">
          <Edit /> Editar
        </button>
        <button className="delete">
          <DeleteOutlineOutlined /> Excluir
        </button>
      </div>
    );
  }

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

  function renderBigText() {
    return (
      <div>
        <p>
          {readMoreOpen
            ? postData.text
            : postData.text.substring(0, 500) + "..."}
        </p>
        {readMoreOpen ? (
          <Button
            variant="dark"
            size="sm"
            onClick={() => setReadMoreOpen(!readMoreOpen)}
          >
            ler menos
          </Button>
        ) : (
          <Button
            variant="dark"
            size="sm"
            onClick={() => setReadMoreOpen(!readMoreOpen)}
          >
            ler mais ...
          </Button>
        )}
      </div>
    );
  }

  return (
    <PostStyled>
      <div className="identify">
        <img className="photo" src="avatar_default.png" alt="avatar" />

        <div className="head">
          <div>
            <strong>{postData.user}</strong>
            <p className="date">{postData.date}</p>
          </div>
          <div className="option">
            <button
              className="openOption"
              onClick={() => setOpenOptions(!openOptions)}
            >
              <MoreHoriz />
            </button>
            {openOptions ? renderOptions() : ""}
          </div>
        </div>
      </div>
      <div className="type">
        {renderSwitch(postData.type)}
        <p>{postData.type}</p>
      </div>
      <div className="text">
        <p>{bigText ? renderBigText() : postData.text}</p>
      </div>
    </PostStyled>
  );
}
