const n = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

let nMayor=n[0];
// console.log(nMayor);
let nMenor =n[0];
let secondMayor= n[0];
console.log(secondMayor)
function max() {
    for (let i = 0; i < n.length; i+=1) {
        // console.log(n[i])
        if (n[i]>nMayor) {
            nMayor=n[i];
        } 
    }
    return "el numero mayor es " + nMayor
    
}
function min(){   
    for (let i = 0; i < n.length; i+=1) {
        // console.log(n[i])
        if(n[i]< nMenor){
            nMenor=n[i];
        }
    }   
    return " El numero menor es " + nMenor
}
function secondMax(n,max)  {   
    for (let i = 0; i < n.length; i+=1) {
        console.log(n[i])
        if(n[i] > secondMayor && n[i] !== nMayor){
            secondMayor= n[i];
        
        } 
    }
    return "El segundo numero Mayor es " + secondMayor;
    
}



console.log(max(n));
console.log(min(n));
console.log(secondMax(n,max));