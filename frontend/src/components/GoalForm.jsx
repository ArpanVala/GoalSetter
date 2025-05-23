import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import { toast } from 'react-toastify'

const GoalForm = () => {
    const [text,setText] = useState('');

    const dispatch = useDispatch()

    const onSubmit= e => {
        e.preventDefault()
        if(text === '') {
            toast.error('Please add a goal')
            return
        }
        dispatch(createGoal({text}))
        toast.success('Goal added successfully')
        setText('')
    }
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            value={text}
            placeholder='Enter goal...'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
