import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const TestMembers = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">TestMembers</CardTitle>
          <CardSubtitle className="mb-3">
            This is the TestMembers page.
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default TestMembers;
