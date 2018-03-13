import React, { Component } from "react";

import Form from "./Forms/Form";

import Input from "./Forms/Input";

// import Edit from "./containers/Edit";



// the Edit article component
const Edit = ({fields}) => (
    <div>
        <h2>Edit Article</h2>

        <Form className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);

export default Edit;