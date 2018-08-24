const n = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

let nMayor=n[0]
// console.log(nMayor);
let nMenor =n[0]
function minMax() {
    for (let i = 0; i < n.length; i+=1) {
        // console.log(n[i])
        if (n[i]>nMayor) {
            nMayor=n[i];
        } 
        return "el numero mayor es " + nMayor;
        
        if(n[i]< nMenor){
            nMenor=n[i];
        }   
        return "El numero menor es " + nMenor;  
    }
    
}

console.log(minMax(n));
