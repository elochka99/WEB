try{
for(var i=1;i>0;i++){
    console.log(i);
if(i>1500){
throw new MemoryError("Бесконечный цикл!")}
}
}catch(e){
console.log(e.name);
console.log(e.message);
}