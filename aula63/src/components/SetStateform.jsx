import React, { useState } from "react";

export default function SetStateForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const showData = (event) => {

        event.preventDefault()
        alert(
            username + ' ' + email + ' ' + password
        )
    }

    return (
        <form OnSubmit={showData} style={{"padding": '35px'}}>

            <input
                type="text"
                value={username}
                name="username"
                placeholder="Username"
                onChange={
                    (event) => {
                        setUsername(event.target.value)
                    }
                }

            />
             <input
                type="email"
                value={email}
                name="username"
                placeholder="email"
                onChange={
                    (event) => {
                        setUsername(event.target.value)
                    }
                }

            />
             <input
                type="password"
                value={password}
                name="username"
                placeholder="senha"
                onChange={
                    (event) => {
                        setUsername(event.target.value)
                    }
                }

            />

            <button>
                Enviar
            </button>

        </form>
    )
}