function waterTankProblem(){
    function waterTank(arr){

    let len = arr.length;
    let max = Math.max.apply(null, arr);
    
    let html = '';
    let result = 0;
    
    // Step 1 - precompute leftmax and rightmax arrays
    let leftmax = Array(len).fill(0);
    let rightmax = Array(len).fill(0);
    
    leftmax[0] = arr[0];
    for(let i = 1; i < len; i++){
        leftmax[i] = Math.max(leftmax[i - 1], arr[i])
    }
    
    rightmax[len - 1] = arr[len - 1];
    for(let i = len - 2; i >= 0; i--){
        rightmax[i] = Math.max(rightmax[i + 1], arr[i])
    }
    
    // Step 2 - Build the table and calculate water trapped
    for(let i = max; i > 0; i--){
        html += "<tr>";
        for(let j = 0; j < len; j++){
            if(arr[j] < i && leftmax[j] >= i && rightmax[j] >= i){
                html += "<td class='bg-primary'></td>";
                result++;
            }  
            else{
                html += '<td></td>'
            }
        }
        html += "</tr>";
    }
    
    // Update the HTML content with result
    document.querySelector('#tank').innerHTML = html;
    document.querySelector('#result').innerHTML = result + " Units"
    }

    let unitsInput = document.getElementById("unitinput").value;
    let x = unitsInput.split(',').join('')
    let inputArray = [];

    for(let i of x){
        inputArray.push(Number(i))
    }

    waterTank(inputArray)
}


