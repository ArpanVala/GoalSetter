import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice'
import {FaWindowClose} from 'react-icons/fa'
import { toast } from "react-toastify"

const GoalItem = ({goal}) => {
  const dispatch = useDispatch()
  const onDelete = () => {
    if(window.confirm('Are you sure you want to delete this goal?')) {
      dispatch(deleteGoal(goal._id))
      toast.success('Goal deleted successfully')
    }

  }
  return (
    <div className='goal'>
        <div>{goal.user.name}</div>
        <div>{new Date(goal.createdAt).toLocaleString('en-US').split(',')[0]}</div>
        <h2>{goal.text}</h2>
        <button onClick={onDelete} className="close"> <FaWindowClose size={20}/></button>
       
    </div>
  )
}

export default GoalItem
