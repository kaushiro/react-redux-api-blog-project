import { connect } from "react-redux";
import Article from "../components/Articles/Article";
import { getArticle, deleteArticle, postComment } from "../data/actions/api";
import { toJS } from "immutable";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
	let article = state.articles.filter(article => article.id === id);
	return {
		article: article
	}
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onLoad: () => dispatch(getArticle(id)),
        onDelete: () => dispatch(deleteArticle(id)),
    };
};


// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);