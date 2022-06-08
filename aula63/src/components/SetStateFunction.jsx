import React, { useState } from "react";

export default function SetSatateFunction() {

    const [car, setCar] = useState(
        {
            model: "Monza",
            color: "preto",
            Velocity: 185
        }
    )

    return (
        <div>
            <div style={{ "padding": '35px' }}>

                <button
                    onClick={
                        () => setCar({ velocity: 342 })
                    }
                >
                    Atualizar velocidade Funçãp
                </button>
                {JSON.stringify(car)}
            </div>
        </div>
    )
}