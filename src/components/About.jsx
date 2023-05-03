import { NavBar } from "./NavBar"

export const About = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 bg-light" >
                        <img src="../img/foto.png" className="w-25 mx-auto d-block mb-5" alt="La imagen no se encuentra"></img>
                        <div className=" card card-body m-5 p-5">
                            <h2 className="card-title">Marvin David Luna Ramirez</h2>
                            <p className="card-text">Soy un programador que actualmente en este ciclo escolar 2023 es estudiante de kinal, con 18 años de edad buscando aprender más sobre que es la programación y todo lo que se puede hacer dentro de ella, ejecutando la mayor cantidad posible de codigo para aprender y manejar con habilidad cada posible situacion o problema, he estado trabajando en mejorar mis habilidades de programación mediante la resolución de desafíos en línea, la colaboración en proyectos de código abierto y la participación en eventos de la comunidad de programadores, he trabajado en varios proyectos personales, incluyendo una aplicación web que ayuda a las personas a organizar sus tareas diarias y una aplicación móvil que conecta a los usuarios con servicios de salud cercanos. </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </>
    )
}
