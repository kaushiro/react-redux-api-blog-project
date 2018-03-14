import React from "react";

import Form from "./Forms/Form";

import FourOhFour from "./FourOhFour";


// the Edit article component
const Edit = ({fields, article, onSubmit}) =>  !fields ? <FourOhFour /> : (
    <div>
        <h2>Edit Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />

    </div>
);

export default Edit;