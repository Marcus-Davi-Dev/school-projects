const inputA = document.querySelector("#input-a");
const inputB = document.querySelector("#input-b");
const inputC = document.querySelector("#input-c");

inputA.addEventListener("input", updateAnswer);
inputB.addEventListener("input", updateAnswer);
inputC.addEventListener("input", updateAnswer);

function updateAnswer(){
  let answer = "{ ";
  bhaskara(inputA.value ?? 1, inputB.value ?? 0, inputC.value ?? 0).entries().toArray().forEach((result, index)=>{
    if(index === 0){
      answer += result[0];
      return;
    }

    answer += `, ${result[0]}`;
  });
  answer += " }";
  document.querySelector("#answer").textContent = `Conjunto solução: ${answer}`;
}

function bhaskara(a, b, c){
  const results = new Set();
  const delta = (b ** 2) - 4*a*c;

  // for debugging purposes.
  console.log(`delta = b² - 4.a.c`);
  console.log(`${b}² - 4.${a}.${c}`);
  console.log(`${b ** 2} - ${4 * a * c}`);
  console.log((b**2) - 4*a*c);
  console.log(delta);

  const numeratorPlus = (b * -1) + Math.sqrt(delta);
  const numeratorMinus = (b * -1) - Math.sqrt(delta);
  const denominator = 2*a;

  // for debugging purposes.
  console.log(`(-b + raiz(delta))/2.a `);
  console.log(`(${b * -1} + raiz(${delta}))/2.${a}`);
  console.log(`(${b * -1} + ${Math.sqrt(delta)})/${2*a}`);
  console.log(`(${(b * -1) + Math.sqrt(delta)})/${2*a}`);
  console.log(`${((b * -1) + Math.sqrt(delta))/ (2*a)}`);
  console.log(numeratorPlus/denominator);
  
  console.log(`(-b + raiz(delta))/2.a `);
  console.log(`(${b * -1} - raiz(${delta}))/2.${a}`);
  console.log(`(${b * -1} - ${Math.sqrt(delta)})/${2*a}`);
  console.log(`(${(b * -1) - Math.sqrt(delta)})/${2*a}`);
  console.log(`${((b * -1) - Math.sqrt(delta))/ (2*a)}`);
  console.log(numeratorMinus/denominator);
  
  results.add(numeratorPlus/denominator);
  results.add(numeratorMinus/denominator);

  return results:
}
