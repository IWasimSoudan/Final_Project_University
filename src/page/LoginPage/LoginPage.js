// import React from "react";
import React, { useRef, useState } from "react";
// import "../assets/css/test.css";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Navbar from "../../component/Navbar/Navbar";
const initialRequired = {
  username: null,
  password: null,
  invalidAccount: null,
};
export default function LoginPage() {
  const navigate = useNavigate();
  // const buttonRef = useRef(null)

  const [requiredText, setRequiredText] = useState(initialRequired);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  localStorage.clear();
  const centerDivStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensures the div takes up the full viewport height
  };
  return (
    <div
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${require("../../assets/img/imge.jpg")})`,
        backgroundSize: "cover",
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    {/* <p className="text-medium-emphasis">Sign In to your account</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        {/* <CIcon icon={cilUser} /> */}
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        // onKeyDown={handleKeyDown}
                      />
                    </CInputGroup>
                    {requiredText.username && (
                      <span className="text-danger mb-3">
                        {requiredText.username}
                      </span>
                    )}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        {/* <CIcon icon={cilLockLocked} /> */}
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // onKeyDown={handleKeyDown}
                      />
                    </CInputGroup>
                    {requiredText.password && (
                      <span className="text-danger mb-2">
                        {requiredText.password}
                      </span>
                    )}
                    {requiredText.invalidAccount && (
                      <span className="text-danger mb-2">
                        {requiredText.invalidAccount}
                      </span>
                    )}

                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          // onClick={handleSubmit}
                          // ref={buttonRef}
                          disabled={disableButton}
                        >
                          {!disableButton ? "Login" : <CSpinner size="sm" />}
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
            {/* <div
              className="ms-auto"
              style={{
                textAlign: 'center',
                fontSize: '15px',
                backgroundColor: '#d8dbe0',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 2,
              }}
            >
              {/* <div>
                <span className="me-1">Powered by</span>
                <a href="https://iconsjo.com/" target="_blank" rel="noopener noreferrer">
                  Icons Software
                </a>
              </div> 
              <div>
                {/* <span style={{ fontSize: '11px' }}>V{appVersion}</span> 
              </div>
            </div> */}
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );

  //   return (
  // <>
  //     <Navbar page={5} />
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center min-vh-100" >
  //           <form className="border border-dark pt-5 pr-5 pl-5 pb-5">
  //             {/* <!-- Email input --> */}
  //             <div className="form-outline mb-4">
  //               <input type="email" id="form2Example1" className="form-control" />
  //               <label className="form-label" for="form2Example1">
  //                 Email address
  //               </label>
  //             </div>

  //             {/* <!-- Password input --> */}
  //             <div className="form-outline mb-4">
  //               <input type="password" id="form2Example2" className="form-control" />
  //               <label className="form-label" for="form2Example2">
  //                 Password
  //               </label>
  //             </div>

  //             {/* <!-- 2 column grid layout for inline styling --> */}
  //             <div className="row mb-4">
  //               <div className="col d-flex justify-content-center">
  //                 {/* <!-- Checkbox --> */}
  //                 <div className="form-check">
  //                   <input
  //                     className="form-check-input"
  //                     type="checkbox"
  //                     value=""
  //                     id="form2Example31"
  //                     checked
  //                   />
  //                   <label className="form-check-label" for="form2Example31">
  //                     {" "}
  //                     Remember me{" "}
  //                   </label>
  //                 </div>
  //               </div>

  //               <div className="col">
  //                 {/* <!-- Simple link --> */}
  //                 <a href="#!">Forgot password?</a>
  //               </div>
  //             </div>

  //             {/* <!-- Submit button --> */}
  //             <button type="button" className="btn btn-primary btn-block mb-4">
  //               Sign in
  //             </button>

  //             {/* <!-- Register buttons --> */}
  //              <div className="text-center">
  //               <p>
  //                 Not a member? <a href="#!">Register</a>
  //               </p>
  //               <p>or sign up with:</p>
  //               <button type="button" className="btn btn-link btn-floating mx-1">
  //                 <i className="fab fa-facebook-f"></i>
  //               </button>

  //               <button type="button" className="btn btn-link btn-floating mx-1">
  //                 <i className="fab fa-google"></i>
  //               </button>

  //               <button type="button" className="btn btn-link btn-floating mx-1">
  //                 <i className="fab fa-twitter"></i>
  //               </button>

  //               <button type="button" className="btn btn-link btn-floating mx-1">
  //                 <i className="fab fa-github"></i>
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //     </>
  //   );
}
