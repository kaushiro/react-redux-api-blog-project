import { connect } from "react-redux";
// import React from "react";
import Edit from "../components/Edit";
import { putArticle, getArticle } from "../data/actions/api";


const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onLoad:() => dispatch(getArticle(id)),
        onEdit: (data) => dispatch(putArticle(id, data)),
    };
};


const mapStateToProps = (state, { id }) => {
    let article = state.articles.filter(a =>a.id === +id)[0];
    if (article) {
    	const fields = [
    	    { name: "title", label: "Title", value: article.title },
    	    { name: "article", label: "Article", value: article.article },
    	    { name: "tags", label: "Tags", value: article.tags },
		];

		return {
	   		fields: fields,
		}

    } else {
    	return {
    		fields: null,
    	}
    }
	
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Edit);