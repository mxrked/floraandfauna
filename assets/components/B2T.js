import styles from "../styles/modules/Js/Js.module.css";

import { FaCaretUp } from "react-icons/fa";

export const B2T = () => {
  return (
    <button
      id="b2T"
      className={`${styles.b2t} half-second`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FaCaretUp className={styles.icon} />
    </button>
  );
};
