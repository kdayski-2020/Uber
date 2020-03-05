window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });

  $(".scroll").on("click", function() {
    const el = $(this);
    const dest = el.attr("href");
    if (dest === "#main") {
      $("html").animate(
        {
          scrollTop: $(dest).offset().top - 300
        },
        500
      );
      return false;
    }
    if (dest !== undefined && dest !== "") {
      $("html").animate(
        {
          scrollTop: $(dest).offset().top
        },
        500
      );
    }
    return false;
  });
  $(".fade_form").on("click", function() {
    const el = $(this);
    const fragment = document.createDocumentFragment();
    const wrapper = createWrapper();
    const form = createForm(["Введите имя: ", "Введите номер телефона: "]);
    addButton(form);
    wrapper.appendChild(form);
    fragment.appendChild(wrapper);
    document.body.insertAdjacentElement("afterbegin", fragment.children[0]);
    $("#fade_toggle").fadeToggle("slow");
  });
  $("#form").submit(function(e) {
    // e.preventDefault();
    console.log($("#fade_toggle"));
    $("#fade_toggle").fadeToggle("slow");

    return;
  });

  function addButton(form) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.classList.add("submit");
    button.style = `
    height: 30px;
    width: 150px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    `;
    button.textContent = "Отправить";
    form.appendChild(button);
  }
  function createForm(plh) {
    const form = document.createElement("form");
    for (let i = 0; i < plh.length; i++) {
      form.appendChild(createInput(plh[i]));
    }
    form.style = `
    display: flex;
    flex-direction: column;
    margin: 35vh auto;
    padding: 50px 20px;
    width: 15%;
    border: 1px solid white;
    background: rgba(0, 0, 0, .7);
    `;
    form.setAttribute("id", "form");
    return form;
  }

  function createInput(plh) {
    const input = document.createElement("input");
    input.setAttribute("required", "true");
    input.setAttribute("placeholder", plh);
    input.style = `
    display: block;
    text-align: center;
    `;
    return input;
  }

  function createWrapper() {
    const formWrapper = document.createElement("div");
    formWrapper.style = `
    display: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    z-index: 10;
    `;
    formWrapper.setAttribute("id", "fade_toggle");
    return formWrapper;
  }
});
