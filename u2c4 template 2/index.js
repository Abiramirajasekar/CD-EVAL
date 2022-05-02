// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector("#masaiForm")
var arr = JSON.parse(localStorage.getItem("schedule"))||[];
form.addEventListener("submit",myfun)

function myfun(){
     event.preventDefault();

     var matchNum=document.querySelector("#matchNum").value
     var teamA =document.querySelector("#teamA").value
     var teamB=document.querySelector("#teamB").value
     var date = document.querySelector("#date").value
     var venue=document.querySelector("#venue").value

    var obj = {
        matchNum:matchNum,
        teamA: teamA,
        teamB: teamB,
        date:date,
        venue:venue
    }
    arr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(arr))
}
