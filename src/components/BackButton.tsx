import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export function BackButton() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="btn btn-ghost gap-2">
      <FontAwesomeIcon icon={faArrowLeft} />
      Retour
    </button>
  );
}
