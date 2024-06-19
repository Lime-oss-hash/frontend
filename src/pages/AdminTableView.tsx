import {Button, Col, Form, ListGroup, ListGroupItem, Modal, Pagination, Row, Table} from "react-bootstrap";
import {useCallback, useEffect, useState} from "react";
import {Bookings as BookingModel, BookingsPagesProps} from "../models/bookings";
import * as WebsitesApi from "../network/websites_api";
import {useParams} from "react-router-dom";

interface itemProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  pickup: string;
  destination: string;
  wheelchair: string;
  passenger: string;
  purpose: string;
  trip: string;
  date: string;
  pickupTime: string;
  dropoffTime: string;
  additionalNotes: string;
  _id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}


function AdminTableView() {

  const [OrderNumber, setOrderNumber] = useState('');
  const [LastName, setLastName] = useState('');
  const [Date, setDate] = useState('');
  const [lgShow, setLgShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState<BookingModel>();
  const [mockdatas, setMockdatas] = useState<itemProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const [bookings, setBookings] = useState<BookingModel[]>([]);
  const [bookingLoading, setBookingLoading] = useState(true);
  const [showBookingLoadingError, setShowBookingLoadingError] = useState(false);

  const params = useParams();


  useEffect(() => {
    if (params.date){
      setDate(params.date);
      console.log(params.date)
    }
    loadBookings();
  }, [page, LastName, Date]);

  const loadBookings = async () => {
    try {
      setShowBookingLoadingError(false);
      setBookingLoading(true);
      const bookings = await WebsitesApi.fetchAllBookings({page, limit: 10, name: LastName, date: Date});
      setTotalPages(Math.ceil(bookings.total / 10));
      setPage(bookings.page);
      setBookings(bookings.bookings);
    } catch (error) {
      console.error(error);
      setShowBookingLoadingError(true);
    } finally {
      setBookingLoading(false);
    }
  }

  async function deleteBooking(booking: BookingModel) {
    try {
      await WebsitesApi.deleteStaffBooking(booking._id);
      setBookings(bookings.filter(existingBooking => existingBooking._id !== booking._id));
      loadBookings();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  useEffect(() => {
    // setMockdatas(mockdata.slice((page - 1) * 10, page * 10));
  }, [page]);


  const tableHeader: string[] = ['firstName', 'lastName', 'phoneNumber', 'email', 'pickup', 'destination', 'wheelchair', 'passenger', 'purpose', 'trip', 'date', 'pickupTime', 'dropoffTime', 'additionalNotes', 'Opration'];
  return <>
    <Form className={`m-3`}>
      <Row>
        {/*<Col md={{span: 2, offset: 0}}>*/}
        {/*  <Form.Control placeholder="Order Number" value={OrderNumber} onChange={(e) => setOrderNumber(e.target.value)*/}
        {/*  }/>*/}
        {/*</Col>*/}
        <Col md={{span: 2, offset: 0}}>
          <Form.Control placeholder="Last name" value={LastName} onChange={(e) =>
            setLastName(e.target.value)
          }/>
        </Col>

        <Col md={{span: 2, offset: 0}}>
          <Form.Control placeholder="Last name" value={Date} type="Date" onChange={(e) =>
            setDate(e.target.value)
          }/>
        </Col>


        {/*<Col md={{span: 3, offset: 0}}>*/}
        {/*  <Button variant="primary" onClick={loadBookings}>Search</Button>*/}
        {/*  <Button style={{marginLeft: '10px'}} variant="light" onClick={() => {*/}
        {/*    setLastName("")*/}
        {/*    setOrderNumber("")*/}
        {/*  }}>Reset</Button>*/}
        {/*</Col>*/}
      </Row>
    </Form>

    <Table className="table-hover m-10" bordered={true} responsive>
      <thead>
      <tr>
        <th>Number</th>
        {tableHeader.map((item, index) => (
          <th key={index}>{item.toUpperCase()}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      <>
        {bookings.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {
              Object.keys(item).map((key, index, array) => (
                key != '_id' && key != '__v' && key != 'userId' && key != 'createdAt' &&
                <td key={key}>
                  {key == "updatedAt" ? <>
                    <Button variant="light" onClick={() => {
                      setSelectedRow(item);
                      setLgShow(true);
                    }}>Detail</Button>
                    &nbsp;
                    <Button variant="danger" onClick={() => {
                      deleteBooking(item);
                    }}>Delete</Button>
                  </> : `${item[key as keyof typeof item]}`}
                </td>
              ))
            }
          </tr>
        ))}
      </>
      </tbody>
    </Table>

    <div className="mb-2" style={{display: 'flex', flexDirection: "row-reverse"}}>
      <Pagination>
        <Pagination.Prev onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}/>
        {Array.from({length: totalPages}, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === page}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => {
          if (page < 2) {
            setPage(page + 1);
          }
        }}/>
      </Pagination>
    </div>

    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Booking Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroupItem><strong>First Name:</strong> {selectedRow?.firstName}</ListGroupItem>
          <ListGroupItem><strong>Last Name:</strong> {selectedRow?.lastName}</ListGroupItem>
          <ListGroupItem><strong>Phone Number:</strong> {selectedRow?.phoneNumber}</ListGroupItem>
          <ListGroupItem><strong>Email:</strong> {selectedRow?.email}</ListGroupItem>
          <ListGroupItem><strong>Pickup Location:</strong> {selectedRow?.pickup}</ListGroupItem>
          <ListGroupItem><strong>Destination:</strong> {selectedRow?.destination}</ListGroupItem>
          <ListGroupItem><strong>Wheelchair:</strong> {selectedRow?.wheelchair}</ListGroupItem>
          <ListGroupItem><strong>Passenger:</strong> {selectedRow?.passenger}</ListGroupItem>
          <ListGroupItem><strong>Purpose:</strong> {selectedRow?.purpose}</ListGroupItem>
          <ListGroupItem><strong>Trip Type:</strong> {selectedRow?.trip }</ListGroupItem>
          <ListGroupItem><strong>Date:</strong> {selectedRow?.date}</ListGroupItem>
          <ListGroupItem><strong>Pickup Time:</strong> {selectedRow?.pickupTime}</ListGroupItem>
          <ListGroupItem><strong>Dropoff Time:</strong> {selectedRow?.dropoffTime}</ListGroupItem>
          <ListGroupItem><strong>Additional Notes:</strong> {selectedRow?.additionalNotes}</ListGroupItem>

        </ListGroup>

      </Modal.Body>
    </Modal>

  </>
}


export default AdminTableView;
