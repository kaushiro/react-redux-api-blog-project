// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Articles from "../components/Articles/Articles";

// import in the getArticles API action
import { getArticles } from "../data/actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        articles: state.get("titles"),
    };
};

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getArticles()),
    };
};

// make sure we add mapDispatchToProps to the connect call
export default connect(mapStateToProps, mapDispatchToProps)(Articles);