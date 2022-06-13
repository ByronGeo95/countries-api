import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => (
    <Layout>
        <div>

            <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
            <h2 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faHome} /> HOME</h2>
            <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
            <h3 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faGlobe} /> ALL COUNTRIES : {props.countryData.length}</h3>
            <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: 0 }} ></hr>
            <h5 style={{ marginBottom: 0 }} > <FontAwesomeIcon icon={faQuestionCircle} />  CLICK ON A COUNTRY TO DISPLAY INFORMATION ABOUT IT</h5>
            <hr style={{ backgroundColor: 'black', padding: '0.75px', marginTop: 0, marginBottom: '25px' }} ></hr>
            
            <Container fluid style={{ height: '750px', overflowY: 'scroll', float: 'center', textAlign: 'center', marginleft: 'auto', marginRight: 'auto' }} >
                <Row>
                    {props.countryData.map(({ alpha2Code, name, capital, flag, region, subregion, latlng, area, population, timezones, demonym, callingCodes }) => (
                        <div className='col-md-3' >
                            <Link as={`/${alpha2Code}`} href={`/selectedCountry?alpha2Code=${alpha2Code}&name=${name}&capital=${capital}&flag=${flag}&continent=${region}&region=${subregion}&lat=${latlng}&lon=${latlng}&area=${area}&population=${population}&timezone=${timezones[0]}&demonym=${demonym}&callingCode=${callingCodes[0]}`} >
                                <a style={{ fontSize: '11px', color: 'black' , textDecoration: 'none', float: 'left', textAlign: 'left' }} > <Image src={flag} style={{ width: '7.5%', marginBottom: '4px', marginRight: '5px', float: 'left', textAlign: 'left' }} />{name}</a>
                            </Link>
                            <br></br>
                            <br></br>
                        </div> 
                    ))} 
                </Row>
            </Container>

        </div>
    </Layout>
);

// Index.getInitialProps = async function() {

//     const result = await fetch('https://restcountries.com/v2/all');
//     const data = await result.json();

//     return {
//         countryData: data
//     };

// };

Index.getInitialProps = async function() {
    try
    {
        const result = await fetch('https://restcountries.com/v2/all');
        const data = await result.json();

        return {
            countryData: data
        }; 
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        
        return {
            countryData: null
        }
    }

};

export default Index;

//https://restcountries.com/v2/all (new)
//https://restcountries.eu/rest/v2/all (old)