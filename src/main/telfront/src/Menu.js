import { Navbar,Nav,Container } from "react-bootstrap"
import { onSubmitLogout } from "./Bridge"

export const Menu=()=>{
    return(
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/#/view" className="text-danger">FAI Stack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="fai" />
                    <Navbar.Collapse id="fai">
                        <Nav className="ms-auto">
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/view">Home</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/fresh">New</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/remove">Remove</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/alter">Alter</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/filter">ShortList</a>
                            <button className="btn btn-outline-light rounded-5 ms-2" onClick={async()=>{
                                await onSubmitLogout()
                                window.location.assign("/")
                            }}>
                                <i class="bi bi-door-closed-fill"></i>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}