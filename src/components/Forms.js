
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup  } from '@themesberg/react-bootstrap';
import { TeamMembersWidget } from "../components/Widgets";


export const GeneralInfoForm = (props) => {
  const [eventDate, setEventDate] = useState(new Date());
  const [inputs, setInputs] = useState({});
  const [members, setMembers] = useState([]);
 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(eventDate);
    console.log(props.selectedFile);
   // setInputs(values => ({ ...values, file: props.selectedFile }));
    setInputs(values => ({ ...values, eventDate: eventDate }));
    console.log(inputs);
    
    
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="EventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control required type="text"  name="eventname" onChange={handleChange} placeholder="Name your Event" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="EventDisplyaName">
                <Form.Label>Event Display Name</Form.Label>
                <Form.Control required type="text" name="eventDisplayName" onChange={handleChange} placeholder="Event Display Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Datetime
                  timeFormat={false}
                  name="eventDate"
                  onChange={handleChange}
                  Datetime="DD/MM/YYYY"
                 // value={eventDate}
                  // renderInput={(props, openCalendar) => (
                  //   <InputGroup>
                  //     <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                  //     <Form.Control
                  //       required
                  //       type="text"
                  //       value={eventDate ? moment(eventDate).format("MM/DD/YYYY") : ""}
                  //       placeholder="mm/dd/yyyy"
                  //       onFocus={openCalendar}
                  //       onChange={setEventDate} />
                  //   </InputGroup>
                  // )} 
                  />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Event Type</Form.Label>
                <Form.Select defaultValue="0" name="eventType" onChange={handleChange}>
                  <option value="0">Conference</option>
                  <option value="1">Wedding</option>
                  <option value="2">Exehibition</option>
                  <option value="3">Competition</option>
                  <option value="4">Cultural Shows</option>
                  <option value="5">Musical</option>
                  <option value="5">Online</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <textarea name="description" onChange={handleChange} class="form-control" placeholder="Leave a comment here" id="description"></textarea>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>No of Participents</Form.Label>
                <Form.Control required type="number" name="participents" onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter the event address" name="address" onChange={handleChange}/>
              </Form.Group>
            </Col>
            {/* <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form. required type="number" placeholder="No." />
              </Form.Group>
            </Col> */}
          </Row>
          {/* <Row>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Event Logo </Form.Label>
                <Form.Control type="file" 
                  onChange={(e) => }
                />
              </Form.Group>
            </Col>
          </Row> */}

         
          {/* <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group id="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control required type="tel" placeholder="ZIP" />
              </Form.Group>
            </Col>
          </Row> */}
          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
