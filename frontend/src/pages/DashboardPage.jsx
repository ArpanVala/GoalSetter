import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const DashboardPage = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      toast.error('You are not logged in')
      navigate('/login')
    }
  }
  , [user, navigate])
 
  return (
    <div>
      Dashboard page
    </div>
  )
}

export default DashboardPage
