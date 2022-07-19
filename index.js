// https://source.unsplash.com/1280x720/?developer,computer,laptop,programming 
// https://kontests.net/api
let cardBody = document.getElementById('cardBody');
let category = ["developer", "computer", "laptop", "programming", "coding"];
let website = ["CodeForces", "CodeForces Gym", "TopCoder", "AtCoder", "CS Academy", "CodeChef", "HackerRank", "HackerEarth", "Kick Start", "LeetCode", "Toph"];
let webList = document.getElementById('webList');
// All the Useful function 

// Genrate Random Number to select category
function randomCategory() {
    let num = Math.round(4 * Math.random());
    return num;
}

// Seconds to day
function toDay(seconds) {
    let day = Math.round(seconds / 86400);
    return day;
}

//Return Formated Date
function formatedDate(oldDate) {
    let newDate = oldDate.substring(0, 10);
    return newDate;
}

//Grab the name
let txt = ""
for (index in website) {
    txt += `<li onClick="${sendCategory(index)}" id="${index}"><a class="dropdown-item" href="#">${website[index]}</a></li>`
}
webList.innerHTML = txt;
let bool;
// select value of selected Category
function sendCategory(index) {
    console.log(website[index]);
}
//Parse Category to Function
if (bool == true) {

}

// Grab quotas text in json object
let json;
fetch('Assets/json/codingQuota.json')
    .then(response => response.json())
    .then(quotes => {
        json = quotes;
    })
    .catch(err => console.error(err));

// fetch api for coding contest
function fetchAPI(web) {
    fetch(`https://kontests.net/api/v1/${web}`)
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
                            <p class="card-text">${json[key].text}</p>
                            <div class="d-grid gap-1">
                                <a href="${data[key].url}" target="_blank">
                                <button class="btn btn-block btn-primary">Join Contest</button>
                                </a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between card-footer text-muted">
                            <div>
                                Start Date: ${formatedDate(data[key].start_time)}
                            </div>
                            <div>
                                Duartion: ${toDay(data[key].duration)} Days
                            </div>
                            <div>
                                End Date: ${formatedDate(data[key].end_time)}
                            </div>
                        </div>
                  </div>`;
            }
            cardBody.innerHTML = str;
        }).catch(err => console.error(err));
}