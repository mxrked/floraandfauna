/**
 *
 *  This is used to filter the plant items by the search
 *
 */

export default function FilterItemsBySearch() {
  const ALL_PLANT_ITEMS_SETS = document.querySelectorAll(
    ".plants-items-holder-set"
  );
  const ALL_PLANT_ITEMS = document.querySelectorAll(".plant-item");
  const ALL_PLANT_ITEMS_SETS_BTN_HOLDERS = document.querySelectorAll(
    ".show-more-btn-holder"
  );
  const SEARCH_IPT = document.getElementById("searchIpt");
  const SEARCH_IPT_VALUE = SEARCH_IPT.value.toUpperCase();
  var i;

  // Prevents empty input
  if (SEARCH_IPT_VALUE.length !== 0) {
    // Displays all the items instead of making the user to click load more constantly
    ALL_PLANT_ITEMS_SETS.forEach((set) => {
      set.style.display = "block";
    });
    ALL_PLANT_ITEMS_SETS_BTN_HOLDERS.forEach((holder) => {
      holder.style.display = "none";
    });

    for (i = 0; i < ALL_PLANT_ITEMS.length; i++) {
      const COMMON_NAME = ALL_PLANT_ITEMS[i].getElementsByTagName("h3")[0];
      const COMMON_NAME_TXT_VALUE =
        COMMON_NAME.textContent || COMMON_NAME.innerText;
      const SCI_NAME = ALL_PLANT_ITEMS[i].getElementsByTagName("h5")[0];
      const SCI_NAME_TXT_VALUE = SCI_NAME.textContent || SCI_NAME.innerText;
      if (
        COMMON_NAME_TXT_VALUE.toUpperCase().indexOf(SEARCH_IPT_VALUE) > -1 ||
        SCI_NAME_TXT_VALUE.toUpperCase().indexOf(SEARCH_IPT_VALUE) > -1
      ) {
        ALL_PLANT_ITEMS[i].style.display = "";
      } else {
        ALL_PLANT_ITEMS[i].style.display = "none";
      }
    }
  }
}
