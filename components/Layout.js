import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const subLayout = {
    textAlign: 'center',
    float: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '82.5%',
    height: '850px',
    overflowY: 'hidden'
};

export default (props) => (
    <div> 
        <div style={subLayout}>
    	    <Header />
    	    {props.children}
  	    </div>
    </div>
);