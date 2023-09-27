function show_result() {
   let pg = parseFloat(document.querySelector("#pg").value);
   let phy = parseFloat(document.querySelector("#phy").value);
   let cal = parseFloat(document.querySelector("#cal").value);
   let eng = parseFloat(document.querySelector("#eng").value);
   let ds = parseFloat(document.querySelector("#ds").value);

   let totalgrades = pg + phy + cal + eng + ds;
   let percentage = (totalgrades / 500) * 100;
   let grade = '';

   if (percentage >= 85) {
       grade = 'A+';
   } else if (percentage >= 80) {
       grade = 'A';
   } else if (percentage >= 70) {
       grade = 'B';
   } else if (percentage >= 60) {
       grade = 'C';
   } else if (percentage >= 50) {
       grade = 'D';
   } else {
       grade = 'F';
   }

   document.querySelector(".total").innerHTML = totalgrades;
   document.querySelector(".per").innerHTML = percentage.toFixed(2) + '%';
   document.querySelector(".grade").innerHTML = grade;
}
