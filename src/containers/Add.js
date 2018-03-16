import { connect } from "react-redux";
import Add from "../components/Articles/Add";
import { postArticle } from "../data/actions/api";

const mapStateToProps = state => {
    return {
    	titles: state.get("titles"),
        articles: state.get("articles"),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch(postArticle(data)),
    };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Add);