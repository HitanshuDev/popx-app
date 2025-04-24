import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [SUname, setSUname] = useState("Marry Dou");
  const [SUphone, setSUphone] = useState("913234532");
  const [SUemail, setSUemail] = useState("marrydou@gmail.com");

  const handleSignup = (e) => {
    e.preventDefault();
    // Optionally store email here too
    localStorage.setItem('SUname', SUname);
    localStorage.setItem('SUphone', SUphone);
    localStorage.setItem('SUemail', SUemail);
    navigate('/profile');
  };

  return (
    <>
      <h2>Create your <br /> PopX account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Full Name*</label>
          <input 
          type="text" 
          placeholder="Full name" 
          onChange={(e) => setSUname(e.target.value)}
          value= {SUname}
          />
        </div>
        <div className="form-group">
          <label>Phone number*</label>
          <input 
          type="text" 
          placeholder="Phone number" 
          onChange={(e) => setSUphone(e.target.value)}
          value={SUphone}
          />
        </div>
        <div className="form-group">
          <label>Email address*</label>
          <input 
          type="email" 
          placeholder="Email address" 
          onChange={(e) => setSUemail(e.target.value)}
          value={SUemail}
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Company name" />
        </div>
        <div className="form-group">
          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <label><input type="radio" name="agency" value="yes" /> Yes</label>
            <label><input type="radio" name="agency" value="no" /> No</label>
          </div>
        </div>
        <button className="btn create-btn" type="submit">Create Account</button>
      </form>
      <button className="btn back-btn" onClick={() => navigate(-1)}>← Back</button>
    </>
  );
}

export default Signup;
