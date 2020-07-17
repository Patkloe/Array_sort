array_sort_down = (arr) =>{
 for(let i = 0; i < arr.length; i++){
  var a = arr[i];
   for(let j = 0; j < arr.length; j++){
    if( a > arr[j]){
      alert("change to do");
      var c = arr[i];
      arr[i] = arr[j];
      arr[j] = c; 
    }
   }
 }
return arr;
}
var tab = [5,4,2,1,3]; 
array_sort_down(tab);