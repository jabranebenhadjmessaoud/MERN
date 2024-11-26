// we have a list that we need to sort 
// we will start looping throught that list 
// we will start with the first item and then inside it loop again 
// in the inside loop we will check if j element is higher then the next one j+1
// if its  higher we will put the value of the j element in a temporary variable 
// the the j element will get the value of the j+1 element 
// and the j+1 will recive the value of the temporary variable 
// when we finish that inside loop we make sure that the highest number is the last index of the list 
// then we move on in the first loop 




function bubblesort(nums){
    
    for (let i=0;i<nums.length;i++){
        let sorted=false ;
        for (let j=0;j<nums.length-i-1;j++)
            if (nums[j]>nums[j+1]){
                let temp=nums[j] ;
                nums[j]=nums[j+1];
                nums[j+1]=temp;
                sorted=true ;
                
        }
        if(!sorted){
            break
        }
    }
    return nums

}


const nums1=[5,3,4,2,1] 

bubblesort(nums1) ;
console.log(nums1)