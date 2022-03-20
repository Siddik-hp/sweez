const ShowMenu = () => {
  const nav = document.querySelector(".navbar");
  if (nav.style.right === 0) {
    nav.style.right = "-100%";
  } else {
    nav.style.right = 0;
  }
};
const HideMenu = () => {
  const nav = document.querySelector(".navbar");
  nav.style.right = "-100%";
};

const showDetails = () => {
  var x = document.querySelector(".header_details_responsive");
  if (x.style.opacity === "1") {
    x.style.opacity = 0;
  } else {
    x.style.opacity = 1;
  }
};

// Form Submit
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");
form.addEventListener("submit", (e) => {
  let message = [];
  // e.preventDefault()
  if (name.value === "" || name.value === null) {
    message.push("Invalid Name Field");
    errorMessage.innerText = message.join(", ");
  }
  if (email.value === "" || email.value === null) {
    message.push("Invalid Email Field");
    errorMessage.innerText = message.join(", ");
  }
  if (msg.value === "" || msg.value === null) {
    message.push(" Invalid Message Box ");
    errorMessage.innerText = message.join(" , ");
  }
});

// counter
const counters = document.querySelectorAll(".counter");
const speed = 2500;
window.scrollY;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    console.log(count);
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
