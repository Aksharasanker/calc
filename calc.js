function display(num){
 res.value+=num
}

function clearAll(){
    res.value=""
}

function back(){
    res.value=res.value.slice(0,-1)
}
function equal(){
    try{
        res.value=eval(res.value)}
    catch{
       res.value="error"
       setTimeout(()=>{
       res.value=""},1000)
       }
    }
    

