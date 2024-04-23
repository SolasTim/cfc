import React from 'react';
import './App.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Button, Card, Container, Row, Col, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.png';
import { useState, useEffect } from 'react';


const Section = () => {

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
}



function App() {

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
 
  return (
    
    <div className="App">

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
                alt="Logo" />
              {' '}
              Carbon Footprint Calculator
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link onClick={handleButtonClick}>Calculator</Nav.Link>
                <Link
                class="active"
                activeClass="active" 
                to="H1" 
                spy={true} 
                smooth={true} 
                offset={10} 
                //how far off from the target the scroll should be
                duration={500} 
                //how long the scroll animation takes
                onSetActive={Section.handleSetActive}
                ><Nav.Link>
              
              What's Carbon Footprint?</Nav.Link></Link>
                  <Link
                class="active"
                activeClass="active" 
                to="H2" 
                spy={true} 
                smooth={true} 
                offset={10} 
                //how far off from the target the scroll should be
                duration={500} 
                //how long the scroll animation takes
                onSetActive={Section.handleSetActive}
                ><Nav.Link>
              
              What factors affect?</Nav.Link></Link>
                  <Link
                class="active"
                activeClass="active" 
                to="H3" 
                spy={true} 
                smooth={true} 
                offset={10} 
                //how far off from the target the scroll should be
                duration={500} 
                //how long the scroll animation takes
                onSetActive={Section.handleSetActive}
                ><Nav.Link>
              
              Why is important?</Nav.Link></Link>
                  <Link
                class="active"
                activeClass="active" 
                to="H4" 
                spy={true} 
                smooth={true} 
                offset={10} 
                //how far off from the target the scroll should be
                duration={500} 
                //how long the scroll animation takes
                onSetActive={Section.handleSetActive}
                ><Nav.Link>
              
              Fun facts</Nav.Link></Link>
                  <Link
                class="active"
                activeClass="active" 
                to="H5" 
                spy={true} 
                smooth={true} 
                offset={10} 
                //how far off from the target the scroll should be
                duration={500} 
                //how long the scroll animation takes
                onSetActive={Section.handleSetActive}
                ><Nav.Link>
              
                  Ways to improve</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {!showForm ? (
        <>
          <Container>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H1" className='Element'></Element>
                    <Card.Title>What is a carbon footprint?</Card.Title>
                    <Card.Text>
                      Your carbon footprint is the total amount of greenhouse gases
                      (e.g. carbon dioxide, methane) that are generated by your actions.
                      According to nature.org, the average carbon footprint per person
                      globally is 4 tons and 16 tons per person in the US. There are
                      different types of carbon footprints. While this website is only focused
                      on individual carbon footprints, there is also product footprint and corporate
                      footprint. Product footprints are emissions from all stages of selling
                      products such as raw material extraction, production processes, transportation
                      and customer usage. Whereas corporate footprints are based on a whole
                      organizations’ emissions. We should take steps to reduce our carbon
                      footprint such as using renewable energy, using high energy efficient
                      appliances and saving water and electricity whenever we can.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H2" className='Element'></Element>
                    <Card.Title>What factors affect carbon footprints?</Card.Title>
                    <Card.Text>
                      Food consumption has a huge effect on an individual’s carbon footprint. It
                      accounts for between 10%-30% of a household’s carbon footprint. Meat
                      products have very large carbon footprints because of the conversion rate
                      of an animal converting its own consumption of crops to actual growth of the
                      livestock. Leading on from this, the amount of waste an individual creates
                      contributes to their carbon footprint, as well as how much of it is recycled.
                      Household emissions also contribute to carbon footprints. For each kWh
                      generated in the US an average of 0.857 pounds of CO2e is released at the
                      power plant. Personal transportation is another important factor to include
                      when considering carbon footprints, people should think about how often they
                      are using cars rather than public transport or walking/cycling and if their
                      own vehicles are petrol, diesel or electric powered. Those who travel abroad
                      by plane also should be aware of the huge release of greenhouse gases this
                      causes. The average domestic commercial flight in 2021 emitted 0.75 pounds
                      of CO2e per passenger mile.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H3" className='Element'></Element>
                    <Card.Title>Why is having a low carbon footprint important?</Card.Title>
                    <Card.Text>
                      Carbon footprint has devastating effects on our environment with the main
                      pitfall being increasing temperature leading to melting ice caps, higher
                      sea levels and most importantly less land mass. On an individual level it’s
                      important to be aware of our own impacts on the environment as we might not
                      make up many emissions alone however together we make more of an impact than
                      any individual company. It’s important to be aware of our own emissions so that
                      in day to day activities we can make carbon conscious decisions. Being aware
                      of carbon footprint can also sway public opinion and help enforce stricter
                      rules on big companies producing large amounts of emissions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H4" className='Element'></Element>
                    <Card.Title>Fun facts:</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>China has the highest carbon footprint in the world with it being responsible for 29.18%</li>
                        <li>The UK is 17th on the list with it being responsible for 1.03% of world carbon emissions</li>
                        <li>Food Production Accounts for 83% of Carbon Emissions Each Year.</li>
                        <li>A single tree can absorb about 1 ton of CO2 during its lifetime. So, planting trees is an effective way to offset carbon emissions. </li>
                        <li>Airplanes emit around 100 times more CO2 per hour than a shared bus or train ride, and the emissions of global aviation are around 1 billion tons of CO2 per year</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H5" className='Element'></Element>
                    <Card.Title>Ways to improve carbon footprint score: </Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Get better home insulation</li>
                        <li>Use more renewable energy sources (e.g. solar, wind)</li>
                        <li>Use less water</li>
                        <li>Turn lights of after use</li>
                        <li>Cycle more</li>
                        <li>Go digital</li>
                        <li>Have shorter showers</li>
                        <li>Unplug electronics when not in use</li>
                        <li>Use LED bulbs</li>
                        <li>Recycle</li>
                        <li>Reduce food waste and compost</li>
                        <li>Do colder laundry loads</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card class="card text-white bg-dark mb-3">
                  <Card.Body>
                  <Element name="H6" className='Element'></Element>
                    <Card.Title>Calculate your Carbon Footprint here!</Card.Title>
                    <Button className="mt-5" onClick={handleButtonClick}>Calculator</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <MyForm />
      )}
  
    </div>
      
  );
}

function MyForm() {
  const [electric, setElectric] = useState("");
  const [gas, setGas] = useState("");
  const [oil, setOil] = useState("");
  const [mileage, setMileage] = useState("");
  const [shortFlights, setShortFlights] = useState("");
  const [longFlights, setLongFlights] = useState("");
  const [paper, setPaper] = useState("True");
  const [tin, setTin] = useState("True");
  const [totalFootprint, setTotalFootprint] = useState(0);

  const calculateFP = () => {
    const electricFP = electric * 105;
    const gasFP = gas * 105;
    const oilFP = oil * 113;
    const carFP = mileage * 0.79;
    const shortFlightsFP = shortFlights * 1100;
    const longFlightsFP = longFlights * 4400;
    const paperFP = paper ? 0 : 184;
    const tinFP = tin ? 0 : 166;

    const total = electricFP + gasFP + oilFP + carFP + shortFlightsFP + longFlightsFP + paperFP + tinFP;

    setTotalFootprint(total);
  }

  useEffect(() => {
    calculateFP();
  }, [electric, gas, oil, mileage, shortFlights, longFlights, paper, tin]);

  const submit = (e) => {
      e.preventDefault();
  }
  const paperChange = (event) => {
      setPaper(event.target.value);
  }
  const tinChange = (event) => {
      setTin(event.target.value);
  }
  return (
    <form onSubmit={submit}>
      <h3 className="mt-3 mb-4">Calculate your footprint:</h3>

      <label>What is your monthly electric bill?          
          <input 
              type="number" 
              value={electric}
              style={{ marginLeft: '30px', width: '100px' }}
              onChange={(event) =>
              setElectric(event.target.value)}
          />
      </label><br/><hr/>

      <lable>What is your monthly gas bill?
          <input 
              type='number'
              value={gas}
              style={{ marginLeft: '30px', width: '100px' }}
              onChange={(event) =>
              setGas(event.target.value)}
          />
      </lable><br/><hr/>

      <lable>What is your monthly oil bill?
          <input 
              type='number' 
              value={oil}
              style={{ marginLeft: '30px', width: '100px' }}
              onChange={(event) =>
              setOil(event.target.value)}
          />
      </lable><br/><hr/>

      <lable>What is your yearly mileage on your car?
          <input 
              type='number'
              value={mileage}
              style={{ marginLeft: '30px', width: '100px' }}
              onChange={(event) =>
              setMileage(event.target.value)}
          />
      </lable><br/><hr/>

      <p>How many flights have you taken in the past year that are shorter than 4 hours?</p>
      <lable>
          <input 
              type='radio' 
              value={0}
              name='short_flights'
              onChange={(event) =>
              setShortFlights(event.target.value)}
          />None
      </lable>
      <lable>
          <input 
              type='radio' 
              value={1}
              name='short_flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setShortFlights(event.target.value)}
          />One
      </lable>
      <lable>
          <input 
              type='radio' 
              value={2}
              name='short_flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setShortFlights(event.target.value)}
          />Two
      </lable>
      <lable>
          <input 
              type='radio' 
              value={3}
              name='short_flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setShortFlights(event.target.value)}
          />Three
      </lable>
      <lable>
          <input 
              type='radio' 
              value={4}
              name='short_flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setShortFlights(event.target.value)}
          />Four or more
      </lable><br/><hr/>

      <p>How many flights have you taken in the past year that are longer than 4 hours?</p>
      <lable>
          <input 
              type='radio' 
              value={0}
              name='long-flights'
              onChange={(event) =>
              setLongFlights(event.target.value)}
          />None
      </lable>
      <lable>
          <input 
              type='radio' 
              value={1}
              name='long-flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setLongFlights(event.target.value)}
          />One
      </lable>
      <lable>
          <input 
              type='radio' 
              value={2}
              name='long-flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setLongFlights(event.target.value)}
          />Two
      </lable>
      <lable>
          <input 
              type='radio' 
              value={3}
              name='long-flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setLongFlights(event.target.value)}
          />Three
      </lable>
      <lable>
          <input 
              type='radio' 
              value={4}
              name='long-flights'
              style={{ marginLeft: '15px' }}
              onChange={(event) =>
              setLongFlights(event.target.value)}
          />Four or more
      </lable><br/><hr/>
      
      <lable>Do you recycle paper?
          <input 
            type='checkbox'
            checked={paper}
            onChange={(e) => setPaper(e.target.checked)}
            />
      </lable><br/><hr/>

      <lable>Do you recycle cans and foil?
      <input 
            type='checkbox'
            checked={tin}
            onChange={(e) => setTin(e.target.checked)}
            />
      </lable><br/><hr/>
      
      <h2>Total Carbon Footprint Per Year: {totalFootprint} kg CO2</h2>
    </form>
  )
}


export default App;
