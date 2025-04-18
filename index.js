let homeStoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScore = 0

function add1HPoint(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function add2HPoints() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add3HPoints() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestStoreEl = document.getElementById("guest-score")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScore = 0

function add1GPoint(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function add2GPoints() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function add3GPoints() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
