import { connect } from "react-redux";
import Article from "../components/Articles/Article";
import { getArticle, deleteArticle, postComment } from "../data/actions/api";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
	const article = state.articles;
    return {
        article: article.id,
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onLoad: () => dispatch(getArticle(id)),
        onDelete: () => dispatch(deleteArticle(id)),
        addComment: data => dispatch(postComment(id, data)),
    };
};


// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);