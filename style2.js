// var inputs = document.querySelector('.input');
// var items = Array.from(document.querySelectorAll('.button'));
//         items.forEach(function(btn){
//             btn.addEventListener('click',function(){
//                 if(inputs.innerHTMl == "0"){
//                     inputs.innerHTML = '';
//                 }
//                 if(btn.innerHTML == "C"){
//                     inputs.innerHTML = '';
//                 }
//                 else if(btn.innerHTML == "DEL"){
//                     const check = Array.from(inputs.innerHTML);
//                     check.splice(check.length-1,1);
//                     if(check.innerHTML !=0){
//                         inputs.innerHTML = check.join('');
//                     }else{
//                         inputs.innerHTML = "0";
//                     }
//                 }
//                 else if(btn.innerHTML =="="){
//                    if(inputs.innerHTML != ''){
//                         inputs.innerHTML = eval(inputs.innerHTML);
//                    }
//                    else{
//                     onputs.innerHTML ='';
//                    }
//                 }
//                 else{
//                     inputs.innerHTML += btn.innerHTML;
//                 }
//             })
//         })                               


var array1 = ["A", "B", "C"];
let d = array1.shift()
let b = array1.pop();
let c = array1.pop();
let a = array1.push('B')
console.log(array1)