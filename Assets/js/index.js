// https://source.unsplash.com/1280x720/?developer,computer,laptop,programming 
let cardBody = document.getElementById('cardBody');
let category = ["developer", "computer", "laptop", "programming", "coding"];

function randomCategory() {
    let num = Math.round(category.length * Math.random());
    return num;
}

fetch('https://kontests.net/api/v1/all')
    .then(response => response.json())
    .then(data => {
        let str = "";
        for (key in data) {
            str += `<div class="card mb-3">
                        <img src="https://source.unsplash.com/1000x300/?${category[randomCategory()]},${category[randomCategory()]}" class="card-img-top"
                            alt="Image">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">${data[key].name}</h5>
                                <div>
                                    <span class="badge text-bg-success">${data[key].site}</span>
                                    <span class="badge text-bg-danger">Ends in 24 Hour</span>
                                </div>
                            </div>
                            <p class="card-text">Always code as if the guy who ends up maintaining your code will be a violent
                                psychopath who knows where you live.</p>
                            <div class="d-grid gap-1">
                                <button href="${data[key].url}" class="btn btn-block btn-primary">Join Contest</button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between card-footer text-muted">
                            <div>
                                Start Date: ${data[key].start_time}
                            </div>
                            <div>
                                Duartion: 3 Hour
                            </div>
                            <div>
                                End Date: ${data[key].end_time}
                            </div>
                        </div>
                  </div>`;
        }
        cardBody.innerHTML = str;
    }).catch(err => console.error(err));