import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeListing } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing : (index) => dispatch(removeListing(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)