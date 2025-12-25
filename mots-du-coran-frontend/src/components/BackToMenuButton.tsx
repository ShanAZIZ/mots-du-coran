import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export function BackToMenuButton() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} className="btn btn-ghost gap-2">
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
}
