function changeColorTheme(wrapperOfTriggersSelector, sunTriggerSelector, moonTriggerSelector) {

     const wrapperOfTriggers = document.querySelector(wrapperOfTriggersSelector);
     const sunTrigger = document.querySelector(sunTriggerSelector);
     const moonTrigger = document.querySelector(moonTriggerSelector);

     wrapperOfTriggers.addEventListener("click", (e) => {

          if (e.target.classList.contains("profile-settings__trigger_active")) {
               return;
          }

          if (e.target === sunTrigger) {

               document.querySelector("._container").style.background = `url("./img/${sunTrigger.dataset.bg}") center/cover no-repeat`;
               moonTrigger.classList.remove("profile-settings__trigger_active");
               e.target.classList.add("profile-settings__trigger_active");
               document.querySelector(".profile-info__name").style.color = "";
          } else {
               document.querySelector("._container").style.background = `url("./img/${moonTrigger.dataset.bg}") center/cover no-repeat`;
               sunTrigger.classList.remove("profile-settings__trigger_active");
               e.target.classList.add("profile-settings__trigger_active");

               document.querySelector(".profile-info__name").style.color = "#fff";
          }
     });

}

export default changeColorTheme;