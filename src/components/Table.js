import React, {useState} from "react";
import {BsFillTrashFill} from "react-icons/bs";
import { TbTransferVertical } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa";
import data from "./TableData.json";
import PaymentStatusColor from "./PaymentStatusColor";

import "./Table.css";

export const Table = () => {

  const [infos, setInfos] = useState(data)
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table__header__container">
            <th><FaRegSquare /> Product</th>
            <th>Date <TbTransferVertical /></th>
            <th>Customer Name</th>
            <th>Payment Status <TbTransferVertical /></th>
            <th>Total[$] <TbTransferVertical /></th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info) => (
            <tr>
              <td><div style={{marginBlockEnd: 5}}><FaRegSquare />{info.product}</div>
              <div className="code-product">{info.codeProduct}</div>
            </td>
            <td>{info.date} </td>
            <td>{info.name}</td>
            <td>
              <tr>
                <PaymentStatusColor payment={info.paymentStatus} />
              </tr>
            </td>
            <td>{info.total}</td>
            <td>
              <span className="options options-edit">Edit</span>
              <span className="options options-delete">
                <BsFillTrashFill />
              </span>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}