import { useCallback } from "react";
import type { OrderItem } from "../types";


type OrderTotalProps={
    order: OrderItem[],
    tip:number,
    placeOrder:()=>void
}

export default function OrderTotal({order,tip,placeOrder}: OrderTotalProps) {
    const subtotalAmount= useCallback(()=>order.reduce((total,item)=>total+(item.quantity*item.price),0), [order ]);
    const tipAmount = useCallback(()=>subtotalAmount()* tip,[tip,order]);
    const totalAmount = useCallback(()=>subtotalAmount()+ tipAmount(),[order,tip]);

    return (
        <>

            <div>
                <h2> Totales y proponas </h2>
                <p> propina

                    <span>{subtotalAmount()}</span>
                </p>
                <p> Total a pagar

                    <span>{totalAmount()} </span>
                </p>

            </div>
            <button onClick={()=>placeOrder()}>
                Guardar Orden
            </button>
        </>
    )
}