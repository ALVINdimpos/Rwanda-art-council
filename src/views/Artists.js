import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getArtist } from "../redux/actions/artists";
import { ThreeDots } from "react-loader-spinner";

const Artists = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtist());
  }, []);

  const { artists, loading } = useSelector((state) => state.getArtist);

  console.log(artists);

  return (
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        Artists
      </CardTitle>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>RAC number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#C5801A"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            )}
            {artists?.map((artist) => (
              <tr>
                <td>{artist.artist_no}</td>
                <td>{artist.fname}</td>
                <td>{artist.lname}</td>
                <td>{artist.phone}</td>
                <td>{artist.email}</td>
                <td>
                  <Link to={`/dashboard/viewArtist/${artist.id}`}>
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
            ))}
          </tbody>
        </Table>
        <Button
          style={{
            backgroundColor: "#C5801A",
          }}
          className="mt-3"
        >
          <Link
            className="text-decoration-none text-light"
            to="/dashboard/registerArtist"
          >
            Add a new artist
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default Artists;
