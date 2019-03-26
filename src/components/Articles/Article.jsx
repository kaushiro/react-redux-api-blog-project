import React, {Component} from "react";

import FourOhFour from "../FourOhFour";

import Actions from "./Actions";
import Tags from "./Tags";
import Comments from "../../containers/Comments";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Article extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const { id, article, onDelete } = this.props;
        return !article ? <FourOhFour /> : (
            <div>
                { /* the edit/delete buttons  */ }
                <Actions article={ article } onDelete={ onDelete } id = { id } />

                <h2>{ article.title }</h2>

                { /* allows us to set HTML inside an element */ }
                <div dangerouslySetInnerHTML={{ __html: article.article }} />

                { /* use the Tags component to show the tags 
            
                */ }
                <Tags tags={ article.tags } />

                <hr />

                { /* use the comments component */ }
                <Comments comments={ article.comments } id={id}/>
            </div>
        );
    }
}

export default Article;
