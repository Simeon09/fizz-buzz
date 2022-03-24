// let p = prompt("enter number")
// let n= parseInt(i)


const data = [

]
for (i = 0; i <=101; i++) {
    
    if (i%3 ==0){
        
        console.log('fizz')
        data.push('fizz')
       // document.getElementById('game').innerHTML='fizz'
    } 
    else if (i%5==0){
        console.log('buzz')
        data.push('buzz')
       // document.getElementById('game').innerHTML='buzz'
    }
    else if (i %3==0 && i%5 ==0){
        console.log('fizzbuzz')
        data.push('fizzbuzz')
       // document.getElementById('game').innerHTML='fizzbuzz'
    } 
    else {
        data.push(i)
        console.log(i)
        //document.getElementById('game').innerHTML=i
    }
}


console.log(data)
 document.getElementById('game').innerHTML=data

 function myfunction1(){
     var element = document.body;
     element.classList.toggle("darkmode");co
 }
