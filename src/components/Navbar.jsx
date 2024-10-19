import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { fetchCategorias } from '../services/faketstoreApi';
import { useEffect, useState } from 'react';
import { Button, OverlayTrigger} from 'react-bootstrap';

const expand = 'md'
export default function NavbarComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [categoriasData, setCategoriasData] = useState();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  useEffect(() => {

    async function loadAllData() {
      try {
        const categorias = await fetchCategorias();

        // console.log("categorias: ", categorias);

        setCategoriasData(categorias);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadAllData();
  }, []);
  
  return (
    <>

        <Navbar key={expand} expand={expand} expanded={navbarExpanded}  onToggle={handleNavbarToggle} 
        fixed="top"
        className="bg-white shadow-sm mx-auto px-10 py-3">
          <Container fluid>
            <Navbar.Brand href="/" className='text-2xl font-bold'><span>My</span><span className='text-gray-500'>Store</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-2xl font-bold'>
                <span>My</span><span className='text-gray-500'>Store</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Find products..."
                    className="me-4"
                    aria-label="Search"
                  />
                </Form>
                <Nav.Link href="/account">Account</Nav.Link>
                <NavDropdown
                    title="Catalog"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {loading ? (
                  <></>
                ) : (
                  categoriasData.length > 0 &&
                  categoriasData.slice(0, 5).map((category, i) => (
                    <NavDropdown.Item key={category.name} onClick={() =>
                        navigate(`${category.navlink}`, { state: { id: category.id } })
                      }>{category.name}</NavDropdown.Item>
                  ))
                )}
                  </NavDropdown>

                  <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}
