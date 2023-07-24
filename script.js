const door = document.querySelector(".door");

if (door) {
  door.addEventListener("click", () => {
    door.classList.toggle("change");
  });
}
