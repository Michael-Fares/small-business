import { connect } from 'react-redux'
import Login from '../components/Login'

import { loginUser } from '../redux/actions'



const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser : (user) => dispatch(loginUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)