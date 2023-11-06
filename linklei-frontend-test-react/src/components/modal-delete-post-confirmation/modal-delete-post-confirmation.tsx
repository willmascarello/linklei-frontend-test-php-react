import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import { ModalDeletePostConfirmationStyled } from "./modal-delete-post-confirmation.style";
import { deletePost } from "../../requests/delete-posts.service";
import { IPost, IPutParams } from "../../requests/posts.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IModalDeletePostConfirmationProps {
  show: boolean;
  handleClose: () => void;
  postInfo: IPost;
}

export default function ModalDeletePostConfirmation(
  props: IModalDeletePostConfirmationProps
) {
  const bigText =
    props.postInfo.text !== undefined && props.postInfo.text.length > 500;
  const [readMoreOpen, setReadMoreOpen] = useState(!bigText);

  function renderBigText() {
    return (
      <div>
        <p>
          {props.postInfo.text !== undefined ? (
            readMoreOpen ? (
              <div
                dangerouslySetInnerHTML={{ __html: props.postInfo.text }}
              ></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.postInfo.text.substring(0, 500) + "...",
                }}
              ></div>
            )
          ) : (
            ""
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    deletePost(props?.postInfo)
      .then((response) => {
        toast.success(response.data.message);
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
      <ModalDeletePostConfirmationStyled>
        <Modal show={props.show} size="lg" onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Realmente deseja excluir este post?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <p>
                <strong>Autor: </strong>
                {props.postInfo?.name}
              </p>
              <p>
                <strong>Tipo: </strong>
                {props.postInfo?.type}
              </p>
              <p>
                <strong>Texto: </strong>
                {props.postInfo.text !== undefined ? (
                  bigText ? (
                    renderBigText()
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: props.postInfo.text }}
                    ></div>
                  )
                ) : (
                  ""
                )}
              </p>
              <Button variant="danger" className="float-end" type="submit">
                Excluir
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </ModalDeletePostConfirmationStyled>
    </>
  );
}
