import { Ui } from "./ui.js";

let closeBtn = document.querySelector('#close')

export class Details {
    constructor(id) {
        this.ui = new Ui();

        closeBtn.addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });

        this.getDetails(id);
    }

    async getDetails(gameId) {
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '73a2616d72msh48ae915d3d7ecafp1d4a26jsnf9c40fd6559a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
            const result = await response.json();
            console.log(result);
            this.ui.displayDetails(result)
        }
        catch (error) {
            console.error(error);
        }
    }
}