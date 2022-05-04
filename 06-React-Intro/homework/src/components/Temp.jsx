import React from "react";

export default function Temp({label, temp}){
    return <div>
        <span>{label}</span>
        <span>{temp}</span>
    </div>
}