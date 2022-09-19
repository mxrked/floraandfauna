import styles from "../styles/modules/Index/Index.module.css";

import { FaSearch } from "react-icons/fa";

import FilterItemsBySearch from "../functions/search/FilterItemsBySearch";
import ResetItems from "../functions/search/ResetItems";

export const Search = () => {
  return (
    <div className={`${styles.search}`}>
      <div>
        <input
          type="text"
          id="searchIpt"
          placeholder="Type a common or scientific name.."
          autoComplete="off"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              FilterItemsBySearch();
            }
          }}
        />

        <button
          id="searchFilter"
          className="half-second"
          onClick={() => {
            FilterItemsBySearch();
          }}
        >
          <FaSearch className={styles.icon} />
        </button>
      </div>

      <button
        className={`${styles.reset_btn} half-second`}
        onClick={() => {
          ResetItems();
        }}
      >
        Reset Items
      </button>
    </div>
  );
};
