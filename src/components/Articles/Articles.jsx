import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tags from "./Tags";

class Articles extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { articles } = this.props;

        return (
            <div>
                { /* check there are articles to show */ }
                { articles.length ?
                    <ul className="list-group">
                        { /* map over each article and display a list item for each one */ }
                        { articles.map(article => (
                            <li className="list-group-item" key={ article.id }>
                                { /* link to the article using its id */ }
                                <Link to={ "/articles/" + article.id }>{ article.title }
                                </Link>
                                <div className="pull-right">
                                    <Tags tags={ article.tags } />
                                </div>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No articles found</p>
                }
            </div>
        );
    }
}

export default Articles;