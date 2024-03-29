import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      Blog title is <strong>{id} </strong>
    </div>
  );
};
