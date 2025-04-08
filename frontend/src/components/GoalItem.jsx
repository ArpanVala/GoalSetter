import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice'
import {FaWindowClose,FaExclamationCircle} from 'react-icons/fa'
import { toast } from "react-toastify"
import { useState } from "react"
import UpdateGoal from "./UpdateGoal"

const GoalItem = ({goal}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const onDelete = () => {
    if(window.confirm('Are you sure you want to delete this goal?')) {
      dispatch(deleteGoal(goal._id))
      toast.success('Goal deleted successfully')
    }
  }
   const openUpdate = () =>{
       setIsOpen(!isOpen)
    }
  return (
    <div className='goal'>
        {(isOpen) && (<UpdateGoal goal={goal} setIsOpen={setIsOpen}/>)}
        <h2>{!isOpen && goal.text}</h2>
        <p>{new Date(goal.updatedAt).toLocaleString('en-US')}</p>
        <button onClick={onDelete}  className="close"> <FaWindowClose size={20}/></button>
        <button onClick={openUpdate} className='update'><FaExclamationCircle size={20}/></button>
    </div>
  )
}

export default GoalItem
