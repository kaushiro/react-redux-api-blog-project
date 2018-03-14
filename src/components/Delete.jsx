import React from "react";


// the Edit article component
const Delete = ({onClick}) => (
    <div>
        <h3>Are you sure you want to delete this article?</h3>

        <button onClick={ onClick }>Delete Article</button>
    </div>
);

export default Delete;