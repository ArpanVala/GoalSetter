import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import {getGoals, reset} from '../features/goals/goalSlice'


const DashboardPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals , isLoading, isError, message} = useSelector((state) => state.goals)


  useEffect(() => {
    if(isError) {
      toast.error(message)
      console.log(message)
    } 
    if(!user) {
      toast.error('Please login or signin ')
      navigate('/login')
    }
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }
  , [user, navigate, dispatch])


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

    <section className="content">
      {goals.length > 0 ? (
        <div className="goals">
          {goals.map((goal) => (
             <GoalItem key={goal._id} className='goal' goal={goal}/>
          ))}
        </div>
      ) : (
        <h3>You have not set any goals</h3>
      )}
    </section>
    </>
  )
}

export default DashboardPage
