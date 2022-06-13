import { withRouter } from 'next/router';

import Layout from '../components/Layout.js';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faCity, faClock, faFlag, faGlobeEurope, faHandPointer, faLocationArrow, faMapMarkedAlt, faPhone, faRulerCombined, faStreetView, faUsers } from '@fortawesome/free-solid-svg-icons';

const titleStyle = {
    textAlign: 'center',
    float: 'center',
    marginTop: 0
};

const valueStyle = {
    textAlign: 'center',
    float: 'center',
    marginBottom: 0,
    marginTop: 0
};

const SelectedCountry = withRouter(props => (
    <div>
        <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
        <h2 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faHandPointer} />  SELECTED COUNTRY</h2>
        <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
        <h3 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faFlag} /> {(props.router.query.name).toUpperCase()}</h3>
        <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
        <h5 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faArrowCircleUp} />  CLICK ON HOME OR FILTER TO TAKE YOU BACK TO COUNTRY SELECT</h5>
        <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: '25px' }} ></hr>

        <Card style={{ width: '32.5rem', border: 'none', textAlign: 'center', float: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <Image src={props.router.query.flag} style={{ width: '75%', marginBottom: '10px', textAlign: 'center', float: 'center', marginLeft: 'auto', marginRight: 'auto', borderStyle: 'solid', borderColor: 'black', borderWidth: '1px' }} />
        <h2><b>{(props.router.query.name).toUpperCase()}</b></h2>
        <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, width: '32rem', textAlign: 'center', float: 'cetner' }} ></hr>
        <Card.Body style={{ float: 'center', marginLeft: '1rem', marginRight: '1rem', marginTop: 0, marginBottom: 0, height: '460px', overflowY: 'scroll' }} >
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faCity} /> Capital:</h5>
                <h5 style={valueStyle} >{props.router.query.capital}</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faMapMarkedAlt} /> Region:</h5>
                <h5 style={valueStyle} >{props.router.query.region}</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faGlobeEurope} /> Continent:</h5>
                <h5 style={valueStyle} >{props.router.query.continent}</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faLocationArrow} /> Lat & Lon:</h5>
                <h5 style={valueStyle} >{parseFloat(props.router.query.lat).toFixed(3)}° & {parseFloat(props.router.query.lon).toFixed(3)}°</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faRulerCombined} /> Area:</h5>
                <h5 style={valueStyle} >{props.router.query.area}km²</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faUsers} /> Population:</h5>
                <h5 style={valueStyle} >{(props.router.query.population / 1000000).toFixed(3)} Million People</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faClock} /> Timezone:</h5>
                <h5 style={valueStyle} >{props.router.query.timezone} ({props.router.query.capital})</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faStreetView} /> Demonym:</h5>
                <h5 style={valueStyle} >{props.router.query.demonym}</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faPhone} /> Calling Code:</h5>
                <h5 style={valueStyle} >+{props.router.query.callingCode}</h5>
                <br></br>
                <h5 style={titleStyle} ><FontAwesomeIcon icon={faFlag} /> Country Code:</h5>
                <h5 style={valueStyle} >{props.router.query.alpha2Code}</h5>
        </Card.Body>
        </Card>

    </div>
));

export default () => (
    <Layout>
        <div>
            <SelectedCountry />
        </div>
    </Layout>
);