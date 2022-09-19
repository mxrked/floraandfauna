import { useEffect } from "react";

import styles from "../styles/modules/Index/Index.module.css";

import { Plants_Items } from "./Plants_Items";

import DisplayMorePlants from "../functions/DisplayMorePlants";

export const Plants_Items_Holder = (props) => {
  useEffect(() => {
    document.querySelectorAll(".show-more-btn-holder")[0].style.display =
      "flex";
  }, []);

  return (
    <div className={`${styles.plants_items_holder} plants-items-holder`}>
      <div
        className={`${styles.plants_items_holder_set} plants-items-holder-set`}
      >
        <Plants_Items set={props.set1} setItemNum={props.set1Class} />
      </div>
      <div className={`${styles.button_holder} show-more-btn-holder`}>
        <button
          className={`show-more-btn`}
          onClick={(e) => {
            DisplayMorePlants(
              e.currentTarget,
              document.querySelectorAll(".plants-items-holder-set")[1]
            );
            document.querySelectorAll(
              ".show-more-btn-holder"
            )[1].style.display = "flex";
          }}
        >
          Show More
        </button>
      </div>
      <div
        className={`${styles.plants_items_holder_set} plants-items-holder-set`}
      >
        <Plants_Items set={props.set2} setItemNum={props.set2Class} />
      </div>
      <div className={`${styles.button_holder} show-more-btn-holder`}>
        <button
          className={`show-more-btn`}
          onClick={(e) => {
            DisplayMorePlants(
              e.currentTarget,
              document.querySelectorAll(".plants-items-holder-set")[2]
            );
            document.querySelectorAll(
              ".show-more-btn-holder"
            )[2].style.display = "flex";
          }}
        >
          Show More
        </button>
      </div>
      <div
        className={`${styles.plants_items_holder_set} plants-items-holder-set`}
      >
        <Plants_Items set={props.set3} setItemNum={props.set3Class} />
      </div>
      <div className={`${styles.button_holder} show-more-btn-holder`}>
        <button
          className={`show-more-btn`}
          onClick={(e) => {
            DisplayMorePlants(
              e.currentTarget,
              document.querySelectorAll(".plants-items-holder-set")[3]
            );
            document.querySelectorAll(
              ".show-more-btn-holder"
            )[3].style.display = "flex";
          }}
        >
          Show More
        </button>
      </div>
      <div
        className={`${styles.plants_items_holder_set} plants-items-holder-set`}
      >
        <Plants_Items set={props.set4} setItemNum={props.set4Class} />
      </div>
      <div className={`${styles.button_holder} show-more-btn-holder`}>
        <button
          className={`show-more-btn`}
          onClick={(e) => {
            DisplayMorePlants(
              e.currentTarget,
              document.querySelectorAll(".plants-items-holder-set")[4]
            );
          }}
        >
          Show More
        </button>
      </div>
      <div
        className={`${styles.plants_items_holder_set} plants-items-holder-set`}
      >
        <Plants_Items set={props.set5} setItemNum={props.set5Class} />
      </div>
    </div>
  );
};
