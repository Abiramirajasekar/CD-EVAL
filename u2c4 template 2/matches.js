// write js code here corresponding to matches.html
var match = JSON.parse(localStorage.getItem("schedule"));

var arr1 = JSON.parse(localStorage.getItem("favourites"))||[];

match.map(function(elem) {
    var tr = document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=elem. matchNum;
    var td2=document.createElement("td")
    td2.innerText=elem. teamA;
    var td3=document.createElement("td")
    td3.innerText=elem.teamB;
    var td4=document.createElement("td")
    td4.innerText=elem.date;
    var td5=document.createElement("td")
    td5.innerText=elem.venue;

   var td6=document.createElement("td")
   td6.innerText="Add To Fav";
   td6.style.color = "green";
   td6.style.cursor="pointer";
td6.addEventListener("click" ,function(){
    display(elem)
})
tr.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr)
    
})
function display(elem){
    arr1.push(elem);
    localStorage.setItem("favourites",JSON.stringify(arr1))
}
// function Filterbyvenue(){

//     var filter= document.querySelector("#filterVenue").value;
//    filter.addEventListener("change",function(){
//     document.querySelector("tbody").innerHTML
//     var filterval = document.getElementById("filterVenue").value
//    })
// }


    
