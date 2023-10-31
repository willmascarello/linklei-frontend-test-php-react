import { Button } from "react-bootstrap";
import { CreatePostStyled } from "./create-post.style";

export function CreatePost() {
  return (
    <CreatePostStyled>
      <Button variant="primary">Criar post</Button>{" "}
      {/* TODO: add onClick, open modal */}
    </CreatePostStyled>
  );
}
