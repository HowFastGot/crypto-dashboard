function changeCurrentPage(sideBarSelector) {
     const sideBar = document.querySelector(sideBarSelector);

     sideBar.addEventListener("click", (e) => {
          e.preventDefault(); ``
          if (e.target.closest("a") && e.target.closest("a").getAttribute("href").length < 3) {

               const alertModal = document.createElement("div");
               alertModal.style.cssText = `
                    z-index: 22;
                    position: fixed;
                    left: 40%;
                    top: 40px;
                    width: 400px;
                    line-height: 70px;
                    text-align: center;
                    font-size: 25px;
                    color: #999;
                    background: linear-gradient(95.63deg, #D2ECFF 0%, #D6ECFF 9.37%, #F9E8FF 100%);
                    border-radius: 22px;
                    animation: 2s ease 0s 1 alternate bounceInDown;
               `;



               alertModal.textContent = "Такої сторінки ще не створено";

               document.body.append(alertModal);


               setTimeout(() => alertModal.remove(), 3000);
          }
     });
}

export default changeCurrentPage;