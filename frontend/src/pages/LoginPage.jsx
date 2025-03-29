import  {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { login, reset } from '../features/Auth/authSlice'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const {email, password} = formData

    
  const dispatch = useDispatch()
  const navigate = useNavigate()

 
    const {user, isLoading, isError, isSuccess, message} = useSelector(
      (state) => state.auth
    )

     useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
          email,
          password
        }

        dispatch(login(userData))
    }

    if(isLoading){return <Spinner/>}
  return (
    <>
     <section className="heading">
        <h4><FaSignInAlt/>Login</h4>
        <p>Login and make goals !</p>
     </section>

     <section className="form">
        <form onSubmit={onSubmit}>
    
            <div className="form-group">
            <input type='text' className='form-control' id='email' name='email' value={email} placeholder='Enter email'  required
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter Password'  required
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
