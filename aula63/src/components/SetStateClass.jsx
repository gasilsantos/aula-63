import React from "react";

export default class SetStateClass extends React.Component{

    constructor(){
        super()
        this.state = {
            model:"Monza",
            color:"preto",
            Velocity: 185

        }
    } 

    render(){

        return(
            <div style={{"padding": '35px'}}>

                <button
                    onClick={
                        ()=> this.setState({velocity: 342})
                    }
                >
                    Atualizar velocidade
                </button>
                {JSON.stringify(this.state)}
            </div>
        )
    }

}