// const scrollContainer = document.getElementById("scrollContainer");
// let isDown = false;
// let startX, scrollLeft;

// scrollContainer.addEventListener("mousedown", (e) => {
//   isDown = true;
//   startX = e.pageX - scrollContainer.offsetLeft;
//   scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener("mouseleave", () => (isDown = false));
// scrollContainer.addEventListener("mouseup", () => (isDown = false));

// scrollContainer.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = (x - startX) * 2;
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });

// // Auto Scroll Loop
// setInterval(() => {
//   if (
//     scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
//     scrollContainer.scrollWidth
//   ) {
//     scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//   } else {
//     scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
//   }
// }, 2500);
