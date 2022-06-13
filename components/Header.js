//Import the Link API
import Link from 'next/Link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faGlobeAfrica, faGlobeAmericas, faGlobeAsia, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const linkStyle = {
  fontSize: '15px',
  marginTop: '0px',
  color: 'ghostwhite',
};

const navStyle = {
  backgroundColor: 'slategrey'
};

export default () => (
            <Navbar style={navStyle} >

              <Link href='/'>
                <Nav.Link as='a' href='/' style={linkStyle} >
                  <FontAwesomeIcon icon={faHome} /> HOME
                </Nav.Link>
              </Link>

              <Dropdown as={Nav.Link} >
                  <Dropdown.Toggle as='a' style={linkStyle}>
                      <FontAwesomeIcon icon={faGlobe} /> FILTER...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Link href='/africa' >
                          <Dropdown.Item href='/africa' > <FontAwesomeIcon icon={faGlobeAfrica} /> AFRICA</Dropdown.Item>
                      </Link>
                      <Link href='/americas' >
                          <Dropdown.Item href='/americas' > <FontAwesomeIcon icon={faGlobeAmericas} /> AMERICAS</Dropdown.Item>
                      </Link>
                      <Link href='/asia' >
                          <Dropdown.Item href='/asia' > <FontAwesomeIcon icon={faGlobeAsia} /> ASIA</Dropdown.Item>
                      </Link>
                       <Link href='/europe' >
                          <Dropdown.Item href='/europe' > <FontAwesomeIcon icon={faGlobeEurope} /> EUROPE</Dropdown.Item>
                      </Link>
                </Dropdown.Menu>
              </Dropdown>

        </Navbar>
);