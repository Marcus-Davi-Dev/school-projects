const recursionCrashBtn = document.querySelector("#recursion");

const timedCrashBtn = document.querySelector("#timed-btn");
const timedCrashInput = document.querySelector("#timed-input");

recursionCrashBtn.addEventListener("click", function(){
  // calculate the 46 number of the fibonacci sequence.
  // may last like a minute or more.
  function fib(n){
    if(n === 1 || n === 0){
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
  fib(46);
});

timedCrashBtn.addEventListener("click", function(){
  const milisseconds = parseFloat(timedCrashInput.value) * 1000;
  const now = Date.now();
  while(true){
    if(Date.now() >= now + milisseconds){
      break;
    }
  }
});
