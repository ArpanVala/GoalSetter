import {FaUser, FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logout, reset } from '../features/Auth/authSlice'


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <>
     <section className="header">
    <div className="logo">
        <Link to='/' >GoalSetter</Link>
    </div>

    <ul>
    {user?( <li>
        <button onClick={onLogout} className='btn'>
        <FaSignOutAlt/>Logout
        </button>
        </li>)
        :
        (<>
       <li>
        <Link to='/login'>
        <FaSignInAlt/>Login
        </Link>
        </li>

         <li>
        <Link to='/register'>
        <FaUser/>Register
        </Link>
        </li>
    </>) }
       
    </ul>
     </section> 
    </>
  )
}

export default Header
