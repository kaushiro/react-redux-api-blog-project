import { connect } from "react-redux";
import React, { Component } from "react";
import FourOhFour from "../components/FourOhFour";
import Edit from "../components/Edit";


// the fields the form should have
const fields = [
    { name: "title", label: "Title", value: "" },
    { name: "article", label: "Article", value: "" },
];

// Wrap <Edit> in a container component so that you can
// pass in the correct article's title and article properties to display in the form
const mapStateToProps = (state, { id, title }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

   
}
    


export default connect(mapStateToProps)(Edit);