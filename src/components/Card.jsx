export const Card = () => {

    const cardStyle = [{
        width: "30rem"
    },
    {
        width: "auto"
    }
    ]

    const linkProyectos = [{
        id: 1,
        nombre: 'link 4to',
        tema: 'Aprendiendo java',
        links: [{
            id: 0,
            link: 'https://drive.google.com/drive/folders/1Mi9FUQ09WMs2LYk3BklZ0B0L3vCq-WJv?usp=sharing',
            nombre: 'Ejemplos java'
        }],
        descripcion: 'Todos los proyectos que aparecen en el drive son proyectos o ejercicios de refuerzo que se hicieron durante mi ciclo escolar de 4to diversificado y fue muy buena experiencia ya que supe que era ser un programador o comenzar a entrar en ese ambito. A continuacion se muestra un boton donde podra acceder a un drive donde esta cierta parte de los proyectos trabajados.',
        title: '4to diversificado',
        img: 'https://phantom-marca-mx.unidadeditorial.es/7c3b5fa1e540f78c5dfa225fce9bad07/resize/1320/f/jpg/mx/assets/multimedia/imagenes/2023/03/21/16794154249749.jpg',
    },
    {
        id: 2,
        nombre: 'link 5to',
        tema: 'JavaFX y SceneBuilder',
        links: [{
            id: 0,
            link: 'https://github.com/mluna-2021312/calculadoraJavaFX',
            nombre:'Calculadora javafx'
        }, {
            id: 1,
            link: 'https://github.com/mluna-2021312/supermarket_kinal',
            nombre: 'Control supermercado javafx'
        }],
        descripcion: 'En este grado fue algo dificil mantenerme ya que todo lo aprendido era complicado, eran nuevas cosas, un nuevo mundo y algo muy extenso, que siempre tiene cosas nueva, en ese año aumente mis habilidades como programador ya que no solo requeria aprender de los componentes sino tambien utilizar la logica y ser intuitivo para que todo funcione correctamente a continuacion mostrare el codigo de 2 proyectos que se hicieron ese año.',
        title: '5to diversificado',
        img: 'FXScene.jpg',
    },
    {
        id: 3,
        nombre: 'link 6to',
        tema: 'ReactNative y Express',
        links: [{
            id: 0,
            link: 'https://github.com/mluna-2021312/rest-api-server-in6bv',
            nombre: 'Ejemplo react o express'
        }],
        descripcion: 'Ultimo ciclo escolar y todo es tan diferente, ahora estamos viendo como utilizar react native con base de datos mongoDB y es algo muy extenso y muy confortante saber como es que funciona todo esto de una pagina web, a continuación el ejemplo del codigo.',
        title: '6to diversificado',
        img: 'noexmon.jpeg',
    }]
    return (
        <>
            {
                linkProyectos.map(e => {
                    return (
                        <div className="row text-center justify-content-center pb-4 pt-4" key={e.id}>
                            <div className="col-md-6 mb-md-0 p-md-4">
                                <img src={`${e.img}`} className="w-75" alt="No se encuentra"></img>
                            </div>
                            <div className="col-md-6 p-4 ps-md-0">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{e.title}</h3> <br />
                                        <h5 className="card-subtitle mb-2 text-body-secondary">{e.tema}</h5><br />
                                        <p className="card-text">{e.descripcion}</p><br />

                                        {
                                            e.links.map((l) => {
                                                return (
                                                    <a href={l.link} className="btn btn-primary m-2" key={l.id}>{l.nombre}</a> 
                                                )
                                            })
                                        }
                                    </div >
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
