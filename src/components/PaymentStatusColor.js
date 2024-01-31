import React, {useState} from 'react';
import data from "./TableData.json";

import "./Table.css";


const PaymentStatusColor = ({payment}) => {
    let label = '';

    switch (payment) {
        case "Paid":
            label = "label-paid";
            break;
        case "Rejected":
            label = "label-rejected";
            break;
        case "Refunded":
            label = "label-refunded";
            break;
        case "Disputed":
            label = "label-disputed";
            break;
        default:

    }
    
        return(
            <div>
                <tr>
                    <span className={`label ${label}`}>{payment}</span>
                </tr>
          </div>
        )
    } 
    
export default PaymentStatusColor;