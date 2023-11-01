import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ModalCreateEditPostStyled } from "./modal-create-edit-post";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export function ModalCreateEditPost(show: boolean, handleClose: () => void) {
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
      <Modal show={show} onHide={handleClose}>
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
            <Form.Group className="mb-3" controlId="textareaedit">
              <div ref={quillRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalCreateEditPostStyled>
  );
}
