import { connect } from "react-redux";
import Article from "../components/Articles/Article";
import { getArticle, deleteArticle } from "../data/actions/api";


// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state,  { id } ) => {
	let displayArticle = state.articles.filter(a =>a.id === +id);
    return {
        article: displayArticle[0],
    };
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