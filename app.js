
//// import element :: 
const advice = document.getElementById("advice")
const button = document.getElementById("btn")
const info = document.getElementById("count")


//// initia value
let x = 0 ; 


async function getAdvice (){
  const res = await fetch("https://api.adviceslip.com/advice")

  const data = await res.json()

  ///// mise a jour .... 
  advice.textContent = data.slip.advice
//   x = x +1 
  x += 1 

//   info.textContent = "you have read " + " "+ x + " " + "pieces of advice"
info.textContent = `you have read ${x} pieces of advice`
}
//// initial value
getAdvice()

////// addevent to run the fcn
button.addEventListener("click",getAdvice)
