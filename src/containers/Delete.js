import { connect } from "react-redux";
// import React from "react";
import Delete from "../components/Delete";


const mapStateToProps = (state, { id, title }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

    if (article) {
    	const fields = [
	    { name: "title", label: "Title", value: article.get("title") },
	    { name: "article", label: "Article", value: article.get("article") },
	    { name: "tags", label: "Tags", value: article.get("tags").join(", ") },
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
    


export default connect(mapStateToProps)(Delete);