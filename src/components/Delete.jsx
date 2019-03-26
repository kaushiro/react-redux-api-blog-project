import React from "react";


// the Edit article component
const Delete = ({onClick, id}) => (
    <div>
        <h3>Are you sure you want to delete this article?</h3>
        <button onClick={ onClick } className="btn btn-danger">Delete Article</button>
    </div>
);

export default Delete;