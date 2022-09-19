import { useEffect } from "react";

import styles from "../styles/modules/Index/Index.module.css";

import BackgroundImage from "react-image-and-background-image-fade";

export const Plants_Items = (props) => {
  useEffect(() => {
    // Changing placeholder image size and adding border
    document.querySelectorAll(".plant-img").forEach((img) => {
      if (
        img.getAttribute("data-src") ==
        "https://www.inaturalist.org/assets/iconic_taxa/plantae-75px.png"
      ) {
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.border = "2px solid whitesmoke";

        img.closest(".plant-item").querySelector("span").style.display =
          "block";
      }
    });

    // Changing placeholder text for item description
    const NO_DESC = "there is no recorded data for this specimen.";
    const NA_DESC = "n/a";

    document.querySelectorAll(".plant-desc").forEach((desc) => {
      if (
        desc.innerHTML == NA_DESC.toUpperCase() ||
        desc.innerHTML == NA_DESC ||
        desc.innerHTML == NO_DESC.toUpperCase() ||
        desc.innerHTML == NO_DESC
      ) {
        desc.innerHTML =
          "There is not a recorded description for this specimen.";
      }
    });
  }, []);

  return (
    <div>
      {props.set.map((plant) => (
        <div
          className={`${styles.plant_item} ${props.setItemNum} plant-item container-fluid`}
          key={plant.sciName}
        >
          <div className={`${styles.plant_item_row} row`}>
            <div
              className={`${styles.plant_item_side} ${styles.plant_item_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={styles.img_holder}>
                <img data-src={plant.img} className="lazyload plant-img" />

                <span>No recorded image of specimen.</span>
              </div>
            </div>
            <div
              className={`${styles.plant_item_side} ${styles.plant_item_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={styles.plant_item_side_text}>
                <div>
                  <span className={styles.name_hint}>Common</span>
                  <h3 className="common-name">{plant.commonName}</h3>
                </div>
                <div>
                  <span className={styles.name_hint}>Scientific</span>
                  <h5 className="sci-name">{plant.sciName}</h5>
                </div>

                <p className="plant-desc">{plant.desc}</p>

                <a href={plant.link} target={"_blank"}>
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
