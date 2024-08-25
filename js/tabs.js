const tabs = document.querySelectorAll(".faqs__tab p");
const cards = document.querySelectorAll(".faqs__accordion");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeCard = document.querySelector(`#${tab.id}-card`);
    removeActiveCard();
    activeCard.classList.add("active");
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveCard() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}