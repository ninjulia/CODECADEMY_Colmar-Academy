//link entire card
//get cards
const cards = document.querySelectorAll(".course-card");

//apply event listener to every card
for (card of cards) {
	// get the href to target
	let link = card.querySelector(".card-link");
	card.addEventListener("click", () => {
		link.click();
	});
}
