import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reg() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_id: "",
    txt_email: "",
    txt_pass: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1000/create', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      alert('User registered successfully!');
    } catch (error) {
      alert('Error during registration!');
      console.error(error);
    }

    setForm({
      user_id: "",
      txt_email: "",
      txt_pass: "",
    });
  };

  const navigateToLogin = () => {
    navigate("/LoginForm");
  };

  return (
    <>
      <header className="bg-black text-white text-center py-4 mb-4">
        <h2>Secure Task Management System</h2>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light p-4 rounded shadow-sm">
            <h3 className="text-center mb-4">Registration Form</h3>
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label className="form-label">User ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="user_id"
                  value={form.user_id}
                  placeholder="Enter your ID"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="txt_email"
                  value={form.txt_email}
                  placeholder="Enter email"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="txt_pass"
                  value={form.txt_pass}
                  placeholder="Enter password"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                <button type="submit" className="btn btn-success px-4">
                  <i className="bi bi-person-plus-fill me-2"></i>Register
                </button>
                <button
                  type="button"
                  onClick={navigateToLogin}
                  className="btn btn-outline-primary px-4"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reg;
