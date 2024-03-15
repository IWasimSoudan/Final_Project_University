import React from "react";
import { postData } from "../../backend/postData";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function Social1(posts) {
  return (
    <>
      {postData.map((post) => (
        <MDBContainer key={post.id} className="align-items-center d-flex">
          <MDBCard style={{ maxWidth: "60rem" }}>
            <MDBCardBody>
              <div className="d-flex mb-3">
                <a href="#!">
                  <img
                    src={post.user_img}
                    className="border rounded-circle me-2"
                    alt="Avatar"
                    style={{ height: "40px" }}
                  />
                </a>
                <div>
                  <a href="#!" className="text-dark mb-0">
                    <strong>{post.name}</strong>
                  </a>
                  <a
                    href="#!"
                    className="text-muted d-block"
                    style={{ marginTop: "-6px" }}
                  ></a>
                </div>
              </div>
              <div>
                <p>{post.post_content}</p>
              </div>
            </MDBCardBody>
            <MDBRipple
              className="bg-image hover-overlay ripple rounded-0"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={post.post_img} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <div className="d-flex justify-content-between mb-3">
                <p>
                  <a className="text-dark" href="#">
                    {post.post_from}
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      ))}
    </>
  );
}
