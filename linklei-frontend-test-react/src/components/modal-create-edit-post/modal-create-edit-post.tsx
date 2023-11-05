import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { ModalCreateEditPostStyled } from "./modal-create-edit-post.style";
import { postPost } from "../../requests/post-posts.service";
import { IPostsParams } from "../../requests/posts.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IModalCreateEditPostProps {
  show: boolean;
  handleClose: () => void;
}

export default function ModalCreateEditPost(props: IModalCreateEditPostProps) {
  const [inputs, setInputs] = useState({} as IPostsParams | {});

  const { quill, quillRef } = useQuill();

  // uncomment to debug quill
  // console.log("ver-- quill:", quill);
  // console.log("ver-- quillRef:", quillRef);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        // uncomment to debug quill
        // console.log(quill.root.innerHTML);

        setInputs((values) => ({ ...values, text: quill.root.innerHTML }));
      });
    }
  }, [quill]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    postPost(inputs)
      .then((response) => {
        toast.success(response.data.message);
        setInputs({});
        props.handleClose();
      })
      // FIXME: get error in php
      .catch((err) => {
        console.log("err", err.data.message);
        toast.error(err.data.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <ModalCreateEditPostStyled>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Criar post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  name="name"
                  required
                  onChange={(e) =>
                    handleChange(e as React.ChangeEvent<HTMLInputElement>)
                  }
                  placeholder="Autor do post"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="type">
                <Form.Select
                  name="type"
                  required
                  onChange={(e) =>
                    handleChange(e as React.ChangeEvent<HTMLSelectElement>)
                  }
                >
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
              <Button variant="primary" className="float-end" type="submit">
                Publicar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </ModalCreateEditPostStyled>
    </>
  );
}
