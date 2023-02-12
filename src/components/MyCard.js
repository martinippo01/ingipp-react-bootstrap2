import React from "react";


export default function MyCard(){
    return(
        <>
            <div className="container text-center" style={{marginTop: 50, marginBottom: 50}}>
                <div className="row align-items-center">
                    <div className="col">
                        <div className="card" style={{width: "100%", margin: 10}}>
                            <div className="card-body">
                                <h4 className="card-title">Consultoria</h4>
                                <p>Para toda normativa de lo que sea, cosas asi como la ISO y esas siglas raras que garpan. DGQ y esas de otros paises</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "100%", margin: 10}}>
                            <div className="card-body">
                                <h4 className="card-title">Capacitaciones</h4>
                                <p>Capacitaciones a medida para su empresa, en grupos pequeños o grandes. Es dar clases y algo mas, con un powerpoint lindo y algo asi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "100%", margin: 10}}>
                            <div className="card-body">
                                <h4 className="card-title">Docencia</h4>
                                <p>Experiencia en multiples Universidades tanto publicas como privadas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}