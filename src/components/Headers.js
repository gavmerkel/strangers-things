import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export function EmptyHeader() {
    return (
        <header>
            <div className="square border-bottom border-dark border-3">
                {/* <div className="ms-5 fs-3 text-start fw-bold"> Stranger's Things empty</div> */}
                <Link to='/home' className="ms-5 fs-3 text-start fw-bold text-decoration-none text-reset">Stranger's Things empty</Link>

            </div>
        </header>
    )
}


export function UnauthenticatedHeader() {
    return (
        <header>
            <div className="square border-bottom border-dark border-3">
                {/* <div className="ms-5 fs-3 text-start fw-bold"> Stranger's Things UNAUTH</div> */}
                <Link to='/home' className="ms-5 fs-3 text-start fw-bold text-decoration-none text-reset">Stranger's Things UNAUTH</Link>

                <Button></Button>
            </div>
        </header>
    )
}


export function AuthenticatedHeader() {
    return (
        <header>
            <div className="square border-bottom border-dark border-3">
                {/* <div className="ms-5 fs-3 text-start fw-bold">Stranger's Things AUTH</div> */}
                <Link to='/home' className="ms-5 fs-3 text-start fw-bold text-decoration-none text-reset">Stranger's Things AUTH</Link>
            </div>
        </header>
    )
}