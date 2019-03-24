import { connect } from "react-redux";
import Article from "../components/Delete";
import { removeArticle } from "../data/actions/state";

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onClick: () => dispatch(removeArticle(id)),
    };
};


// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(null, mapDispatchToProps)(Article);