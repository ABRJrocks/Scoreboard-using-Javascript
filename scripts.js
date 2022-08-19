let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

    let homeScore = 0    
    let guestScore = 0    

// console.log(homeScore)

// Home Score Buttons
function add1H() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function add2H() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function add3H() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
guestScore
// Guest Score Buttons
function add1G() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function add2G() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function add3G() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}



function resetScore() {
    var res = confirm("Are you sure you want to Reset the Scores?");
    if (res){
    homeScore = 0
    homeScoreEl.textContent = 0
    guestScore = 0
    guestScoreEl.textContent = 0
    }
}