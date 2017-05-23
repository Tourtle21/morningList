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
  document.body.append(div);
}
