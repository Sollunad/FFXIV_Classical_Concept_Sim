const shapes = ["BRYRYRBBRBYY","YYBYBRRBYBRR","YYBYBYRBRBRR","RBRYBYRBYRBY","YBYYBRYBRRBR","YRYBBBYRRRBY","YBYBRRYRBYBR","YBRYRYBBBYRR","BRBYYYRYRBRB","YRBYBYRBRBRY",
"RBYRBYRBRYBY","YYBRBBRYRYRB"];
const answers = ["10020670500008340","06020581000007430","06020580001407030","03014080072000056","04023080001067050","00823070401000056","40803070001060205","43000080601057200",
"10620500000408307","05620000071408030","34000072001058060","06520000301408007"]
let previousFunctions = [];
//0-11
function myfunction(){
    const randomNumber = Math.floor(Math.random()*11)
    const debuff = Math.floor(Math.random()*7)+1
    
    document.querySelector("#result").innerHTML=""

    const colors = ["first","second","third","fourth"].map(line=>{
        const lineElement = document.querySelector(`#${line}`)
        return lineElement.value
    })
    console.log(colors)
    console.log(debuff)
    const debuffName = [colors[0]+" Alpha",colors[0]+" Beta",colors[1]+" Alpha",colors[1]+" Beta",colors[2]+" Alpha",colors[2]+" Beta",colors[3]+" Alpha",colors[3]+" Beta"]

    document.querySelector("#theDebuff").innerHTML=debuffName[debuff-1]
    const shape = shapes[randomNumber]
    const letters = [...shape]
    console.log(letters)
    letters.forEach((letter,index)=>{
        document.querySelector(`#s${index}`).style.backgroundColor=({
            B:"blue",
            R:"red",
            Y:"yellow"
        })[letter]
    })
    const answer = answers[randomNumber]
    const numbers = [...answer]
    console.log(numbers)
    numbers.forEach((number,index)=>{
        document.querySelector(`#c${index}`).setAttribute("data-value",number)
    })
    
    const chainElements = document.querySelectorAll(".chain")
    let timer;
    chainElements.forEach((chainElement,index)=>{
        function checkOnClick(){
            console.log("b")
            chainElements.forEach(chainElement=>{
                chainElement.removeEventListener("click",chainElement.previousFunction)
            })
            cancelAnimationFrame(timer)
            const value = chainElement.getAttribute("data-value")
            if(debuff==value){
                document.querySelector("#result").innerHTML="Good job"
                chainElement.style.backgroundColor="green"
            }else{
                document.querySelector("#result").innerHTML="Wrong"
                chainElement.style.backgroundColor="red"
                document.querySelector(`[data-value="${debuff}"]`).style.backgroundColor="green"
            }
        }
        if(chainElement.previousFunction)chainElement.removeEventListener("click",chainElement.previousFunction)
        chainElement.previousFunction = checkOnClick
        chainElement.style.backgroundColor="rgb(135, 57, 199)"
        chainElement.addEventListener("click",checkOnClick)
    })

    const startTime = Date.now()
    function updateTime(){
        const currentTime = Date.now()
        document.querySelector("#timer").innerHTML= formatTime(currentTime-startTime)
        timer = requestAnimationFrame(updateTime)
    }
    timer = requestAnimationFrame(updateTime)
    
}
function divmod(dividend, divisor){
    return [
       Math.floor(dividend / divisor),
       dividend % divisor
   ];
   }
   
   function formatTime(time) {
           const [seconds, milliseconds] = divmod(time, 1000);
       return [`${seconds}`.padStart(2, '0'), `${milliseconds}`.padStart(3, '0')].join(':');
   }
//1 - Blue Alpha
//2 - Blue Beta
//3 - Green Alpha
//4 - Green Beta
//5 - O Alpha
//6 - O Beta
//7 - Purple Alpha
//8 - Purple Beta
//BPOG, OBGP

//0C1C2C3
//C C C C
//4C5C6C7
//C C C C
//8C9C10C11

//11 12 13 14
//11 12 13 14
//31 32 33 34