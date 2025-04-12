import { useNavigate } from "react-router-dom";

function Home()
{
    let navigate=useNavigate();

    let reg=()=>{
        navigate('/Reg')
    }
    let login=()=>{
        navigate('/LoginForm')
    }
    let admin=()=>{
        navigate('/AdminLogin')
    }
    return(
        <>
        
        <center>
        <h2 style={{'background':'black' ,'width':'100%', 'height':'80px' ,'padding':'20px','color':'white'}}>Secure Task Management System</h2>
        </center>
        <br />
        <center>
        <h3 style={{'color':'teal'}}>Welcome to Task management system</h3>
        </center>
        <br />
        <p style={{'padding':'20px', 'margin':'10px' ,'marginLeft':'20px','marginRight':'20px'}}>A task management system helps you organize, prioritize, and track your work.
        It keeps all your tasks in one place, making it easy to stay focused and productive.</p>
        <br />
        <center>
  <button
    onClick={reg}
    style={{
      margin: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}
  >
    Register
  </button>

  <button
    onClick={login}
    style={{
      margin: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}
  >
    Login
  </button>

  <button
    onClick={admin}
    style={{
      margin: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}
  >
    Admin Login
  </button>
</center>


        </>
    )
}
export default Home;