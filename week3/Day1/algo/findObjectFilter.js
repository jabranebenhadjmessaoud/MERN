
function findobjectsfilter(arr,searchfor){
    let result=[]

    
        for ( let i=0; i<arr.length;i++){
            var ismatching=true
            for (key in arr[i]){
            if (arr[i][key]!=searchfor[key]){
                ismatching=false
                break
                }
                if (ismatching=true) 
                    result.push(arr[i])
            }
            
        }
        return result

    }


const tab=[
    {firstname:"bob",lastname:"mar",age:25},
    {firstname:"bssdsob",lastname:"jh,",age:56},
    {firstname:"bzadob",lastname:"mafgnr",age:25},
    {firstname:"azad",lastname:"szef",age:48}  
]

const item={firstname:"bob",age:25}

console.log(findobjectsfilter(tab,item));

