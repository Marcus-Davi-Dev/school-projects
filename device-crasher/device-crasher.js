const recursionCrashBtn = document.querySelector("#recursion");

const timedCrashBtn = document.querySelector("#timed-btn");
const timedCrashInput = document.querySelector("#timed-input");

recursionCrashBtn.addEventListener("click", function(){
  // make recursion until reach the limit
  // dont last too much
  function a(){a();}
  a();
});

timedCrashBtn.addEventListener("click", function(){
  const milisseconds = parseInt(timedCrashInput.value) * 1000;
  let stop = false;
  setTimeout(()=>{stop = true}, milisseconds);
  while(true){
    if(stop) break;
  }
});
