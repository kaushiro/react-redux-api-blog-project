import { connect } from "react-redux";
// import React from "react";
import Edit from "../components/Edit";


// the fields the form should have


// Wrap <Edit> in a container component so that you can
// pass in the correct article's title and article properties to display in the form
const mapStateToProps = (state, { id, title }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

    if (article) {

    	const fields = [
	    { name: "title", label: "Title", value: article.get("title") },
	    { name: "article", label: "Article", value: article.get("article") },
	    { name: "tags", label: "Tags", value: article.get("tags") },
		];

	   return {
	   	fields: fields,
	   }

    }
	
}
    


export default connect(mapStateToProps)(Edit);