import { Container, Nav, Navbar } from "react-bootstrap";
import { Staff } from "../models/staff";
import FooterLoggedOutView from "./FooterLoggedOutView";
import StaffLoggedInView from "./StaffLoggedInView";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

interface FooterProps {
    loggedInStaff: Staff | null,
    onStaffLoginClicked: () => void,
    onStaffLogoutSuccessful: () => void,
    onStaffRegisterClicked: () => void,
}

const Footer = ({ loggedInStaff, onStaffLoginClicked, onStaffLogoutSuccessful,onStaffRegisterClicked }: FooterProps) => {
    return (
        <Navbar style={{backgroundColor:'#1C393B'}}  variant="dark" expand="sm"> {}
            <Container>
                {
                    loggedInStaff ? <Navbar.Brand  as={Link} to="/adminLink" className={styles.title}>
                        Waka Eastern Bay Transport Community
                    </Navbar.Brand> : <Navbar.Brand as={Link} to="/" className={styles.title}>
                        Waka Eastern Bay Transport Community
                    </Navbar.Brand>
                }
                <Nav className="ms-auto">
                    { loggedInStaff
                    ? <StaffLoggedInView staff={loggedInStaff} onStaffLogoutSuccessful={onStaffLogoutSuccessful} onStaffRegisterClicked={onStaffRegisterClicked} />
                    : <FooterLoggedOutView onStaffLoginClicked={onStaffLoginClicked} />
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;
