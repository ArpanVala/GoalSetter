import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import GoalForm from '../components/GoalForm'


const DashboardPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals, isError, isSuccess, message,isLoading} = useSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    } 
    if (isSuccess) {
      toast.success('Goal created successfully')
    }
    if (!user) {
      toast.error('You are not logged in')
      navigate('/login')
    }

  }
  , [user, navigate, isError, isSuccess, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }
 
  return (
    <>
    <section className="heading">
      <h3>Welcome {user && user.name}</h3>
      <p>Goals Dashboard</p>
    </section>

    <GoalForm/>
    </>
  )
}

export default DashboardPage
