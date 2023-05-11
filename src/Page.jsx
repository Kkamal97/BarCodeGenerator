import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { getBarCode } from "./Api";
import {range} from 'lodash';
// ADDED BY (kk) [2023-05-10]:, 

function Page (){
const [productData,setProductData]=useState();
const [golu,SetGolu]=useState(12345);
let lulu;
function handleChange(e){
lulu=e.target.value
};
function handleSearch(){
    SetGolu(lulu)
   
};
console.log("searched value is",golu );
// useEffect(function(){
//     if (golu){
//     const lala=getBarCode(golu);
//     lala.then(function (response){
//         setProductData(response);
//         console.log("chikchik",response );
//     })
// }
// },[golu])



    return <>
    <p>This is Page</p>
    <input onChange={handleChange} placeholder="Constant String" className="border"></input>
    <input onChange={handleChange} placeholder="Variable Numbers" className="border"></input>
    <button onClick={handleSearch} className="border">Get</button>
    {/* {productData.map(function(items){
        return(
<ProductDisplay items={items}/>
        )
    })

    } */}


    
    </>
}
export default Page;