import { Button } from "react-bootstrap";
import { CreatePostStyled } from "./create-post.style";
import { useState } from "react";
import ModalCreateEditPost from "components/modal-create-edit-post/modal-create-edit-post";

export function CreatePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CreatePostStyled>
        <Button variant="primary" onClick={handleShow}>
          Criar post
        </Button>
      </CreatePostStyled>
      <ModalCreateEditPost show={show} handleClose={handleClose} />
    </>
  );
}
