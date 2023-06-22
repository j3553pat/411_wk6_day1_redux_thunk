import { fetchMakes, deleteMake } from "../redux/actions"
import { connect } from "react-redux"
import Import from "../components/Import"

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: (index) => dispatch(deleteMake(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Import)
