/**
 *
 *  This is used to check the status of the B2T
 *
 */

export default function B2TStatus() {
  const B2T = document.getElementById("b2T");

  if (window.scrollY <= 2500) {
    B2T.style.bottom = "-100px";
  } else {
    B2T.style.bottom = "20px";
  }
}
