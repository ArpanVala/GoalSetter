import  {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

    const onSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
     <section className="heading">
        <h4><FaSignInAlt/>Login</h4>
        <p>Login and make goals !</p>
     </section>

     <section className="form">
        <form onSubmit={onSubmit}>
    
            <div className="form-group">
            <input type='text' className='form-control' id='email' name='email' value={email} placeholder='Enter email' 
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter Password' 
            onChange={onChange}/>
            </div>

            <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Login
            </button>
          </div>
        </form>
     </section>
    </>
  )
}

export default LoginPage
