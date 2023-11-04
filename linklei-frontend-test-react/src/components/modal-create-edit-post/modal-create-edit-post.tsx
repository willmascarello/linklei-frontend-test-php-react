import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { ModalCreateEditPostStyled } from "./modal-create-edit-post.style";

interface IModalCreateEditPostProps {
  show: boolean;
  handleClose: () => void;
}

export default function ModalCreateEditPost(props: IModalCreateEditPostProps) {
  const { quill, quillRef } = useQuill();

  console.log("ver-- quill:", quill);
  console.log("ver-- quillRef:", quillRef);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <ModalCreateEditPostStyled>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="name" placeholder="Autor do post" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
              <Form.Select aria-label="Default select example">
                <option disabled selected>
                  Selecione o tipo do post
                </option>
                <option value="post">Post</option>
                <option value="artigo">Artigo</option>
                <option value="grupo">Grupo</option>
              </Form.Select>
            </Form.Group>
            {/* FIXME: The quill appears only the first time it opens the modal */}
            <Form.Group className="mb-3" controlId="textareaedit">
              <div ref={quillRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalCreateEditPostStyled>
  );
}
