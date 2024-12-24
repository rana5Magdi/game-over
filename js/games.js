import { Ui } from "./ui.js";
import { Details } from "./details.js"



let selectedCat = document.querySelectorAll(".list a")

export class Games {
	constructor() {
		this.ui = new Ui();
		this.getGames("mmorpg");
		selectedCat.forEach((link) => {
			link.addEventListener("click", (e) => {
				document.querySelector(".list .active").classList.remove("active");
				e.target.classList.add("active");
				this.getGames(e.target.dataset.category);
			});
		});
	}

	async getGames(category) {
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '73a2616d72msh48ae915d3d7ecafp1d4a26jsnf9c40fd6559a',
				'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
		try {
			const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
			const result = await response.json();
			this.ui.displayGame(result)
			this.startEvent();
		} catch (error) {
			console.error(error);
		}
	}


	startEvent() {
		document.querySelectorAll(".card").forEach((item) => {
			item.addEventListener("click", () => {
				const id = item.dataset.id;
				this.showDetails(id);
			});
		});
	}

	showDetails(idGame) {
		const details = new Details(idGame);
		document.querySelector(".games").classList.add("d-none");
		document.querySelector(".details").classList.remove("d-none");
	}
}