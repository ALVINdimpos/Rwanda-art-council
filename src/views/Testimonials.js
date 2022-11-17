import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Button,
} from "reactstrap";
import Testimonial from "../components/dashboard/Testimonial";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "This is a testimonial.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "This is a testimonial.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "This is a testimonial.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "This is a testimonial.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "This is a testimonial.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h5>Testimonials</h5>
        <Link to="/addTestimonial">
          <Button color="primary">Add Testimonial</Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {data.map((item) => {
          return (
            <Testimonial
              key={item.id}
              image={item.image}
              text={item.text}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
