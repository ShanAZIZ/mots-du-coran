import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router";

export const BackButton = () => {
let navigate = useNavigate();

  return (
    <div className="btn" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};
