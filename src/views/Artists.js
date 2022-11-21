import React, { useState } from "react";
import { Table, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        Artists
      </CardTitle>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>123456789</td>
              <td>mark@gmail.com</td>
              <td>
                <Link to={`/dashboard/viewArtist/1`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                    className="mr-5"
                  >
                    View Artist
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Peter</td>
              <td>John</td>
              <td>123456789</td>
              <td>peter@gmail.com</td>
              <td>
                <Link to={`/dashboard/viewArtist/1`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                    className="mr-5"
                  >
                    View Artist
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>James</td>
              <td>Okoye</td>
              <td>123456789</td>
              <td>james@gmail.com</td>
              <td>
                <Link to={`/dashboard/viewArtist/1`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                    className="mr-5"
                  >
                    View Artist
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Jacques</td>
              <td>McDaniel</td>
              <td>123456789</td>
              <td>jacques@gmail.com</td>
              <td>
                <Link to={`/dashboard/viewArtist/1`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                    className="mr-5"
                  >
                    View Artist
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>123456789</td>
              <td>jacon@gmail.com</td>
              <td>
                <Link to={`/dashboard/viewArtist/1`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                    className="mr-5"
                  >
                    View Artist
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Artists;
