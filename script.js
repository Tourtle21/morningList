var date = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[date.getMonth()]
document.getElementById("month").innerHTML = month;
var daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
for (var i = 1; i < daysInMonth + 1; i++) {
  div = document.createElement('div');
  div.className = 'date';
  div.innerHTML = i;
  if (date.getDate() == i) {
    div.id = "current";
  }
  document.getElementById("days").append(div);
}

var chores = ["wake up", "make bed say prayer", "read scriptures drink water", "edit minecraft", "excersize", "shower and eat", "play .io game", "brush teeth clean bathroom", "clean bedroom", "preach my gospel", "work on app"];
var choreInd = 0;
document.getElementById("current").addEventListener('click', function() {
  document.getElementById("month").style.display = "none";
  document.getElementById("days").style.display = "none";
  document.getElementById("chores").style.display = "flex";
  chore = document.createElement("div");
  chore.className = "chore";
  chore.innerHTML = chores[choreInd];
  document.getElementById("chores").append(chore);
  document.getElementById("check").addEventListener("click", function() {
    choreInd += 1
    chore.innerHTML = chores[choreInd];
    document.getElementById("check").checked = false;
  })
})
