import changeColorTheme from "./modules/changerColorTheme.js";
import changeCurrentPage from "./modules/changerCurrentPage.js";


window.addEventListener("DOMContentLoaded", (e) => {
     changeColorTheme(".profile-settings__list-triggers", ".profile-settings__trigger_sun", ".profile-settings__trigger_moon");
     changeCurrentPage(".side-bar");
});