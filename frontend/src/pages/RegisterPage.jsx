import  {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData

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
        <h4><FaUser/>Registration</h4>
        <p>Create an account</p>
     </section>

     <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter your name' 
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type='text' className='form-control' id='email' name='email' value={email} placeholder='Enter email' 
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter Password' 
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type='password' className='form-control' id='password2' name='password2' value={password2} placeholder='confirm Password' 
            onChange={onChange}/>
            </div>

            <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Register
            </button>
          </div>
        </form>
     </section>
    </>
  )
}

export default RegisterPage
