import React from "react";
import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => {
	const allTags = tags.split(",");
	return (
		<div>
    		{ allTags.map((tag, i) => (
            <Link to={ "/tags/" + tag } 
                key={ i }
                className="label label-primary">
                { tag }
            </Link>
        ))}	
    	</div>
	)
}

export default Tags;
