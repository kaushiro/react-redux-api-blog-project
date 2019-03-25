import React, { Component } from "react";
import { List } from "immutable";
import Form from "../Forms/Form";

// the fields to use for the comments form
const fields = [
    { name: "email", label: "Email", value: "" },
    { name: "comment", label: "Comment", value: "" },
];

const Comments = ({ comments, addComment, id }) => (
    <div>
        <h2>Comments</h2>
        
        <ul className="list-group">
            { /* loop over all the comments */ }
            { comments.map((comment, i) => (
                <li key={ i } className="list-group-item">
                    <h4 className="list-group-item-heading">{ comment.get("email") }</h4>
                    <p className="list-group-item-text">{ comment.get("comment") }</p>
                </li>
            )) }
        </ul>

        <div className="panel panel-default">
            <div className="panel-heading">Add Comment</div>
            { /* pass through fields, button and also a className prop */ }
            <Form className="panel-body" onSubmit={ addComment } fields={ fields } button="Add Comment" />
        </div>
    </div>
);

Comments.defaultProps = {
    comments: List(),
};

export default Comments;