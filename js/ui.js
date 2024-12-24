
export class Ui {
    displayGame(data) {
        let box = ``
        for (let i = 0; i < data.length; i++) {

            box += `
                    <div class="col-md-3 mt-4">
                        <div data-id=${data[i].id} class="card h-100" style="width: 19rem;">
                            <div class="card-body">
                                <figure>
                                    <img src="${data[i].thumbnail}" class="card-img-top" alt="gameimg">
                                </figure>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="h6 small text-white">${data[i].title}</h3>
                                    <span class="badge p-2 text-bg-primary">Free</span>
                                </div>
                                <p class="card-text text-center opacity-50 text-white desc">
                                ${data[i].short_description.split(" ", 8)}
                                </p>
                            </div>
                            <div class="d-flex justify-content-between text-white card-footer">
                                <p class="badge badge-color m-0">${data[i].genre}</p>
                                <p class="badge badge-color m-0 ">${data[i].platform}</p>
                            </div>
                        </div>
                    </div>
            `

        }
        document.querySelector('#game').innerHTML = box
    }

    displayDetails(data) {
        const cartona = `
         <div class="col-md-4">
          <img src="${data.thumbnail}" class="w-100" alt="">
      </div>
      <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="text-black badge text-bg-info">${data.genre}</span></p>
        <p>Platform: <span class="text-black badge text-bg-info">${data.platform}</span></p>
        <p>Status: <span class="text-black badge text-bg-info" >${data.status}</span></p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>

      </div>
        
        `
        document.querySelector('#detailsContent').innerHTML = cartona
    }
}

