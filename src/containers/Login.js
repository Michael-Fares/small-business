import { connect } from 'react-redux'
import Login from '../components/Login'


const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}


export default connect(mapStateToProps)(Login)