import React from "react";

import Form from "./Forms/Form";

import FourOhFour from "./FourOhFour";


// the Edit article component
const Delete = ({id, article}) =>  !fields ? <FourOhFour /> : (
    <div>
        <h2>Are you sure you want to delete article { id }?</h2>

        <button onSubmit={ this.submit }>Delete</button>

    </div>
);

export default Delete;