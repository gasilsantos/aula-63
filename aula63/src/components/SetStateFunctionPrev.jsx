import React, { useState } from "react";

export default function SetSatateFunctionPrev() {

    const [car, setCar] = useState({
        model: "Monza",
        color: "preto",
        velocity: 185
    })

    return (
        <div>
            <button
                onClick={
                    () =>setCar(
                        (prevState) => {
                            return { ...prevState, velocity: 420 }
                        }
                    )
                }
            >
                Atualizar Velocidade Função PrevState
            </button>
            {JSON.stringify(car)}
        </div>
    )
}