import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>ORGANIZED BY</h2>
        </div>
          <div> 
            
          </div>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.image}></i>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>

  );
};
