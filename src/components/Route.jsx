import { useState } from "react"
import { Link } from "react-router-dom"

export const Route = ({ data }) => {

    const [linkPage, setLinkPage] = useState(data)

    // const estiloActive = '';

    return (
        <>
            {linkPage.map((e) => {
                return (
                    <li key={e.id} className="nav-item">
                        <Link
                            className={`nav-link ${e.active ? 'active' : ''}`}
                            aria-current="page"
                            to={e.route}>
                            {e.name}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
