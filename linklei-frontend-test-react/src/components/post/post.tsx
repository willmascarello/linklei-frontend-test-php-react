import { useState } from "react";
import { PostStyled } from "./post.style";
import { IPost, IPutParams } from "../../requests/posts.interface";
import {
  MoreHoriz,
  Edit,
  DeleteOutlineOutlined,
  MenuBook,
  Newspaper,
  Group,
} from "@mui/icons-material";
import { Button } from "react-bootstrap";
import ModalCreateEditPost from "components/modal-create-edit-post/modal-create-edit-post";
import ModalDeletePostConfirmation from "components/modal-delete-post-confirmation/modal-delete-post-confirmation";

export function Post(postData: IPost) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const handleCloseDeleteConfirmation = () => setShowDeleteConfirmation(false);
  const handleShowDeleteConfirmation = () => setShowDeleteConfirmation(true);

  const [openOptions, setOpenOptions] = useState(false);

  const bigText = postData.text.length > 500;
  const [readMoreOpen, setReadMoreOpen] = useState(!bigText);

  function renderOptions() {
    return (
      <div className="optionModal">
        <button className="edit" onClick={handleShow}>
          <Edit /> Editar
        </button>
        <button className="delete" onClick={handleShowDeleteConfirmation}>
          <DeleteOutlineOutlined /> Excluir
        </button>
      </div>
    );
  }

  function formatDatePost(time: string) {
    // convert 2023-11-05 19:58:35 to Publicado em 5 de novembro de 2023 às 19:58
    const date = new Date(time).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const hour = new Date(time).toLocaleTimeString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    });

    return `Publicado em ${date} às ${hour}`;
  }

  function renderTypePost(param: string) {
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
          {readMoreOpen ? (
            <div dangerouslySetInnerHTML={{ __html: postData.text }}></div>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: postData.text.substring(0, 500) + "...",
              }}
            ></div>
          )}
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
    <>
      <PostStyled>
        <div className="identify">
          <img className="photo" src="avatar_default.png" alt="avatar" />

          <div className="head">
            <div>
              <strong>{postData.name}</strong>
              <p className="date">{formatDatePost(postData.updated_at)}</p>
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
          {renderTypePost(postData.type)}
          <p>{postData.type}</p>
        </div>
        <div className="text">
          <p>
            {bigText ? (
              renderBigText()
            ) : (
              <div dangerouslySetInnerHTML={{ __html: postData.text }}></div>
            )}
          </p>
        </div>
      </PostStyled>
      <ModalCreateEditPost
        show={show}
        handleClose={handleClose}
        postInfo={postData}
      />
      <ModalDeletePostConfirmation
        show={showDeleteConfirmation}
        handleClose={handleCloseDeleteConfirmation}
        postInfo={postData}
      />
    </>
  );
}
