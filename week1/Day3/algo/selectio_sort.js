


const myarr=[3,2,9,5,1,4,8] ;
const myarr2=[4,5,1,3,6,7,10,2,8,9]

function selection_sort(arr){
    for (let i=0;i<arr.length;i++){
        let index=i ;
        for (let j=i+1;j<arr.length;j++){
            if (arr[j] < arr[index]){
                index=j ;
            }
        }
        if (index !=i){
            let temp=arr[i];
            arr[i]=arr[index] ;
            arr[index]=temp ;
            
        }



    }
    return arr 
}
console.log(selection_sort(myarr));
console.log(selection_sort(myarr2));