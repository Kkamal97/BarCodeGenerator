import React from "react";
import axios from 'axios';
// ADDED BY (MY_NAME) [2023-05-10]:, 
export function getBarCode(data){

    return axios.get("https://barcode.tec-it.com/barcode.ashx",{
        params:{data:data,code:"code128","translate-esc":"on"}
}
    )
    }