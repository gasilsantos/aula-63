import { useState } from "react";

export default function SetColor(){
    const [color,SetColor] = useState("azul")

    return(
        <div>
            <h3>UseState básico</h3>
            <p>
                Minha cor favortia é {color}
            </p>
            <button
            onClick={
                () => {
                    SetColor("verde")
                }
            }
            >
                Mudar cor
            </button>
        </div>
    )
}