/**
 *
 *  This is used to reset the items
 *
 */

export default function ResetItems() {
  const ALL_PLANT_ITEMS = document.querySelectorAll(".plant-item");
  const ALL_PLANT_ITEMS_SETS = document.querySelectorAll(
    ".plants-items-holder-set"
  );
  const ALL_PLANT_ITEMS_SETS_BTN_HOLDERS = document.querySelectorAll(
    ".show-more-btn-holder"
  );
  const ALL_PLANT_ITEMS_SETS_BTNS = document.querySelectorAll(".show-more-btn");
  const SEARCH_IPT = document.getElementById("searchIpt");

  // Reset search input value
  SEARCH_IPT.value = "";

  ALL_PLANT_ITEMS.forEach((item) => {
    item.style.display = "block";
  });
  ALL_PLANT_ITEMS_SETS.forEach((set) => {
    set.style.display = "none";
  });
  ALL_PLANT_ITEMS_SETS[0].style.display = "block";

  ALL_PLANT_ITEMS_SETS_BTN_HOLDERS.forEach((btn) => {
    btn.style.display = "none";
  });

  // Displays the first load more btn
  ALL_PLANT_ITEMS_SETS_BTN_HOLDERS[0].style.display = "flex";

  ALL_PLANT_ITEMS_SETS_BTNS.forEach((btn) => {
    btn.style.display = "block";
  });
}
