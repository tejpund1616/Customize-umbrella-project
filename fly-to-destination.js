let arr1 = [2,1,2,3,1]
let arr2 =[1,6,3,4,5,0,0,0,6]

function destination(arr){
    let lastPlane = 0
    let lastIndex = 0
    let fuel = arr[0]
    let result = [arr[0]]
    
    for(let i=0; i<arr.length; i++){
      if(arr[i]!==0 && i!==0){
        lastPlane = arr[i]
        lastIndex = i
      }
      if(fuel==0 && arr[i]==0 && lastPlane==0){
        return -1         // if not possible to reach at the last airport
      }
      else if(fuel==0 && arr[i]>0){
        fuel = arr[i]-1          // taking 1 unit fuel for current position.
        if(i !== arr.length-1){
        result.push(arr[i])       // if current index !== last index
        }
      }
      else if(fuel==0 && arr[i]==0){
        fuel = lastPlane-1      // taking 1 unit fuel for current position.
        i = lastIndex+1         // loop will start from one Step ahead.
        result.push(lastPlane)
        lastPlane =0
        lastIndex =0 
      }
      else if(fuel>0){
        fuel--
      }
    }
    result.push(arr[arr.length-1])
    return `No. of planes I'd need to hire = ${result}`
  }
  
  console.log(destination(arr1));
  console.log(destination(arr2));
