import { Button, Form, Modal } from "react-bootstrap";
import { CreatePostStyled } from "./create-post.style";
import { useState } from "react";

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
            <Form.Group className="mb-3" controlId="textarea">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
