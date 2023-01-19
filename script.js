const hero1 = document.querySelector(".hero1"),
  hero2 = document.querySelector(".hero2"),
  hero3 = document.querySelector(".hero3"),
  hero4 = document.querySelector(".hero4"),
  root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  const x = e.clientX,
    y = e.clientY;
  hero1.style.transform = `translate(${x / 40}px,${y / 50}px)`;
  hero2.style.transform = `translate(${x / 25}px,${y / 50}px)`;
  hero3.style.transform = `translate(${x / 15}px,${y / 50}px)`;
  hero4.style.transform = `translate(${x / 10}px,${y / 50}px)`;
});
