import * as React from "react";
import {IModalProps} from "../../types";
import * as style from "./style.scss";

export default function ModalContent(props: IModalProps) {
    return (
        <div className={style.modalContent}>
            <table>
                <tbody>
                <tr>
                    <td>Fuel</td>
                    <td>{props.fuelType}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{props.fuelPrice}</td>
                </tr>
                <tr>
                    <td>Dollars Delivered</td>
                    <td>{props.dollarsDelivered}</td>
                </tr>
                <tr>
                    <td>Liters Delivered</td>
                    <td>{props.litersDelivered}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
