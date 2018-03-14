import { connect } from "react-redux";
import Article from "../components/Delete";
import { deleteArticle } from "../data/actions";

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onClick: () => dispatch(deleteArticle(id)),
    };
};


// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(null, mapDispatchToProps)(Article);