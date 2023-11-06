import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { ModalCreateEditPostStyled } from "./modal-create-edit-post.style";
import { postPost } from "../../requests/post-posts.service";
import { putPost } from "../../requests/put-posts.service";
import {
  IPost,
  IPostsParams,
  IPutParams,
} from "../../requests/posts.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IModalCreateEditPostProps {
  show: boolean;
  handleClose: () => void;
  postInfo?: IPost;
}

export default function ModalCreateEditPost(props: IModalCreateEditPostProps) {
  const [inputs, setInputs] = useState({} as IPostsParams | IPutParams | {});

  useEffect(() => {
    if (props.postInfo) {
      setInputs((values) => ({ ...values, id: props?.postInfo?.id }));
      setInputs((values) => ({ ...values, name: props?.postInfo?.name }));
      setInputs((values) => ({ ...values, type: props?.postInfo?.type }));
      setInputs((values) => ({ ...values, text: props?.postInfo?.text }));
    }
  }, [props.postInfo]);

  const theme = "snow";

  const modules = {
    toolbar: [["bold", "italic", "underline", "strike", "image"]],
  };

  const { quill, quillRef } = useQuill({
    theme,
    modules,
  });

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
    if (quill && props.postInfo?.text) {
      quill.clipboard.dangerouslyPasteHTML(props.postInfo?.text);
    }
  }, [quill, props.postInfo?.text]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nameInput = event.currentTarget.name;
    const value = event.currentTarget.value;

    setInputs((values) => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "ver-- props.postInfo?.type.length:",
      props.postInfo?.type !== undefined
    );

    if (props.postInfo) {
      putPost(inputs as IPutParams)
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
    } else {
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
    }
  };

  return (
    <>
      <ToastContainer />
      <ModalCreateEditPostStyled>
        <Modal show={props.show} size="lg" onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.postInfo ? "Editar post" : "Criar post"}
            </Modal.Title>
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
                  defaultValue={props.postInfo?.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="type">
                <Form.Select
                  name="type"
                  required
                  onChange={(e) =>
                    handleChange(e as React.ChangeEvent<HTMLSelectElement>)
                  }
                  defaultValue={
                    props.postInfo?.type ? props.postInfo?.type : ""
                  }
                >
                  <option value="" disabled>
                    Selecione o tipo do post
                  </option>
                  <option value="post">Post</option>
                  <option value="artigo">Artigo</option>
                  <option value="grupo">Grupo</option>
                </Form.Select>
              </Form.Group>
              {/* FIXME: The quill appears only the first time it opens the modal */}
              {/* TODO: Text field image send to application and save in a local directory */}
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
