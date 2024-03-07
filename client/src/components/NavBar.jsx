import { useContext } from "react";
import { Container,Nav,Navbar,Stack } from "react-bootstrap";
import {Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
    const {user, logoutUser} = useContext(AuthContext)
    return <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">CHATTAPP</Link>
                
            </h2>
            {user && <span className="text-warning">logged in as {user?.name}</span>}

            <Nav>
                <Stack direction="horizontal" gap={3}>
                    {
                        user && (<>
                        <Link onClick={() => logoutUser()} to="/login" className="link-light text-decoration-none">LOGOUT</Link>
                        </>)
                    }
                    {
                        !user &&(<>
                        <Link to="/login" className="link-light text-decoration-none">LOGIN</Link>
                        <Link to="/register" className="link-light text-decoration-none">REGISTER</Link>
                        </>)
                    }
                
                
                </Stack>
            </Nav>
        </Container>
    </Navbar>;
}
 
export default NavBar;