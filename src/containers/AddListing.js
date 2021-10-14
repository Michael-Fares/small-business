import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing, removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListing : (listing) => dispatch(addListing(listing)),
    removeListing : (index) => dispatch(removeListing(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)