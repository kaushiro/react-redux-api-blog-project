import { connect } from "react-redux";
import Comments from "../components/Articles/Comments";
import { commentArticle } from "../data/actions/state";


const mapDispatchToProps = (dispatch, {id}) => {
    return {
        onSubmit: data => dispatch(commentArticle(data, id)),
    };
};

export default connect(null, mapDispatchToProps)(Comments);