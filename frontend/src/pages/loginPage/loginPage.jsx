import React, { useState } from 'react'
import './loginPage.css'
import axios from 'axios'


const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5500/user/getOne",
     {
      email,
      password,
    }).then(res => {
      console.log(res.data.message)
      window.alert(res.data.message)
      window.location.href='/'})
      .catch(err => {
        console.log(err.response.data.message)
        window.alert(err.response.data.message)
      });
  };
  
  return (
  
   <div>
     <form className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form >
                
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" placeholder='Enter your Email ID' required
                  value={email}
                  onChange={ e => setEmail(e.target.value)} />
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>

               
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='Enter You Password' required
                  value={password}
                  onChange={e => setPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
               
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

               
                <button type="submit" className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>Log in</button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a className="btn btn-primary btn-lg w-100" style={{background: "#3b5998"}} href="#!"
                  role="button">
                  <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg w-100 mt-2" style={{background: "#55acee"}} href="#!"
                  role="button">
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

              </form>
            </div>
          </div>
        </div>
      </form>
   </div>

  )
}

export default LoginPage;