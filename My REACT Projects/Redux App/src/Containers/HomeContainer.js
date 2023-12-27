import { connect } from 'react-redux'

import Home from '../Components/Home'
import addToCart from '../Services/Actions/Action'

const mapStateToProps = state => ({})
const mapdispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapdispatchToProps)(Home)