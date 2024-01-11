for (let i=0; i<12061; i=i+120) {
    task(i);
}
for (let j=0; j<13601; j=j+136) {
    taskon(j);
}
for (let k=0; k<46; k++) {
    tasktw(k);
}
for (let l=0; l<16; l++) {
    taskth(l);
}
   
function task(i) {
   setTimeout(function() {
      document.getElementById("fstele").innerHTML = i;
   }, 1 * i);
}

   
function taskon(j) {
   setTimeout(function() {
      document.getElementById("secele").innerHTML = j;
   }, 1 * j);
}

function tasktw(k) {
    setTimeout(function() {
       document.getElementById("thiele").innerHTML = k;
    }, 200 * k);
 }
 function taskth(l) {
    setTimeout(function() {
       document.getElementById("forele").innerHTML = l;
    }, 400 * l);
 }
