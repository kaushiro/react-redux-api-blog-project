import { connect } from "react-redux";
import Comments from "../components/Articles/Comments";
import { postComment } from "../data/actions/api";


const mapDispatchToProps = (dispatch, {id}) => {
    return {
        addComment: data => dispatch(postComment(data, id)),
    };
};

export default connect(null, mapDispatchToProps)(Comments);