import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Event = {
  id: 1,
  title: "Umuco iwacu",
  location: "Kigali",
  dateAndTime: "2/12/2022",
  description:
    "This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description ",
};

const ViewEvent = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Event Name: {Event.title}
          </CardTitle>
          <CardBody>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{
                marginRight: "20px"
              }}>
                <p>Event Location: {Event.location}</p>
                <p>Event date and time: {Event.dateAndTime}</p>
                <p>Description: {Event.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to={`/editFederation/${id}`}>
                    <Button color="primary" className="mr-5">
                      Edit
                    </Button>
                  </Link>
                  <Button color="danger">Delete</Button>
                </div>
              </div>
              <div>
                <img
                  width={200}
                  height={200}
                  src={
                    "https://pbs.twimg.com/media/Dfd9sHtXUAEhTzm?format=jpg&name=large"
                  }
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewEvent;
