import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateGoal} from '../features/goals/goalSlice'
import { toast } from 'react-toastify'

const UpdateGoal = ({goal,setIsOpen}) => {
    const [text,setText] = useState(goal.text);
    const dispatch = useDispatch()

    const onSubmit= e => {
        e.preventDefault()
        if(text === '') {
            toast.error('Please add a goal')
            return
        }
        dispatch(updateGoal({_id: goal._id,text: text}))
        toast.success('Goal updated successfully')
        setIsOpen(false)
    }
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            value={text}
            placeholder='edit goal...'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            update Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default UpdateGoal
