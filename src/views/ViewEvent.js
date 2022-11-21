import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleEvent } from "../redux/actions/events";

const ViewEvent = () => {
  const dispatch = useDispatch();
  const { id: eventId } = useParams();
  const state = useSelector((state) => state);
  const {
    singleEvent: { event },
  } = state;

  useEffect(() => {
    dispatch(getSingleEvent(eventId));
  }, [dispatch, eventId]);
  console.log(event);

  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Event Name: {event && event.title}
          </CardTitle>
          <CardBody>
            {event && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <p>Event Location: {event.location}</p>
                  <p>Event date and time: {event.at}</p>
                  <p>Description: {event.description}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to={`/editFederation/${eventId}`}>
                      <Button
                        style={{
                          backgroundColor: "#C5801A",
                        }}
                        className="mr-5"
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button color="danger">Delete</Button>
                  </div>
                </div>
                <div>
                  <img width={200} height={200} src={event.ev_image} />
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewEvent;
