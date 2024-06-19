import location from "../styles/location.jpg";
import vision from "../styles/vision.png";
import purpose from "../styles/purpose.png";
import service from "../styles/service.png";
import supporting from "../styles/supporting.png";
import {Button, Card, Col, Row} from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import {useNavigate} from "react-router-dom";

const cardDetails = [
  {
    imageSrc: vision,
    title: 'Our Vision',
    content: 'To help connect Eastern Bay communities and ensure they are inclusive, safe and thriving.',
    buttonText: 'Detail',
    bgColor: "#FF9966"
  },
  {
    imageSrc: purpose,
    title: 'Our Purpose',
    content: "To support solutions ensuring equitable and accessible traveloptions suitable for Eastern Baycommunity.",
    buttonText: 'Detail',
    bgColor: "#006600"

  },
  {
    imageSrc: service,
    title: 'Our Service',
    content: " We have an accessible van to accommodate a wheelchair and all our drivers are trained to help support passengers.<br /> In order to ensure We have a volunteer available for your transport needs, all transport requests must be booked 24 hours before transport is required. <br />Days of Operation: Monday to Friday Times of Operation: 9 am to 3 pm Booking Contact: pm@wakaeasternbay.org.nz",
    buttonText: 'Detail',
    bgColor: "#006600"


  },
  {
    imageSrc: supporting,
    title: 'SUPPORTING COMMUNITIES Carpooling',
    content: "We are currently offering support to encourage community carpooling. <br /> If you are interested in carpooling, please contact：pm@wakaeasternbay.org.nz",
    buttonText: 'Detail',
    bgColor: "#FF9966"

  },
];

const LoggedOutView = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.contents}>
        <div className="card mb-3 rounded">
          <img className={location} src={location} alt="Location"/>
          <div className="card-body">
            <h5 className="card-title">Our Location</h5>
            <p className="card-text">VISIT US: Knox Presbyterian Church, 83A Domain Road, Whakatane</p>
          </div>
        </div>

        <Row xs={1} md={2} className="col g-4 rounded">
          {cardDetails.map((card, idx) => (
            <Col key={idx}>
              <div className="d-flex flex-column border rounded-top">
                <div style={{
                  backgroundColor: card.bgColor,
                  minHeight:'200px'
                }} className="d-flex flex-column align-items-center border rounded-top text-white">
                  <h4 className="fs-3 text-white pt-4 text-center text-decoration-underline">
                    {card.title.toUpperCase()}
                  </h4>
                  <span className="p-2 lh-lg text-center align-self-center" style={{fontSize:idx === 2 ? "12px" : '17px',fontWeight:idx === 2 ? '' : 700 }}
                        dangerouslySetInnerHTML={{__html: card.content.replace(/\n/g, '<br>')}}>
                  </span>
                </div>
                <Button className="m-1 align-self-end" variant="primary" onClick={()=>{
                  navigate('/'); // 跳转到 /about 路径
                }}>{card.buttonText}</Button>
              </div>
            </Col>
          ))}
        </Row>
        <br/>
      </div>
    </>
  );
}

export default LoggedOutView;
