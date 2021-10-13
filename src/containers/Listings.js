import { connect } from 'react-redux'
import Listings from '../components/Listings'


const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}


export default connect(mapStateToProps)(Listings)