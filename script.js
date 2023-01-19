// Responsive nav

// The image moves just slightly according to where I move my mouse.

const hero1 = document.querySelector(".hero1"),
  hero2 = document.querySelector(".hero2"),
  hero3 = document.querySelector(".hero3"),
  hero4 = document.querySelector(".hero4"),
  root = document.documentElement;

// To achieve this parallax effect, you can apply different ratios to the elements.
root.addEventListener("mousemove", (e) => {
  const x = e.clientX,
    y = e.clientY;
  hero1.style.transform = `translate(${x / 40}px,${y / 50}px)`;
  hero2.style.transform = `translate(${x / 25}px,${y / 50}px)`;
  hero3.style.transform = `translate(${x / 15}px,${y / 50}px)`;
  hero4.style.transform = `translate(${x / 50}px,${y / 60}px)`;
});

// Slide up animation on scroll
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let classs = i.getAttribute("class");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active1");
        // document
        //   .querySelector("header nav ul a[href*=" + classs + "]")
        //   .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active1");
    } else {
      reveals[i].classList.remove("active1");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
