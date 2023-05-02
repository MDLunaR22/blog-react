import { Route } from "./Route"

export const NavBar = () => {

    const linksPage = [{
        id: 1,
        name: 'Inicio',
        route: '/',
        active: false,
    },
    {
        id: 2,
        name: 'About',
        route: '/about',
        active: false,
    },]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Route data={linksPage} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
