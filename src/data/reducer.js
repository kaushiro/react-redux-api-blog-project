// add List to our imports
import { Map, List } from "immutable";
import history from "../history";
// import initial from "./initial";
// create a function that returns a new article Map

const addArticle = (state, {article}) => {
    return {
    ...state,
    articles: state.articles.concat(article)
    };
};

const setTitles = (state, { articles }) => {
    return {
        ...state,
       articles: articles, 
    }
}
const setArticle = (state, { article }) => state.update("articles", articles =>
    articles.set(article.get("id"), article.set("comments", List()))
);
const removeArticle = (state, {id}) => state.update("articles", articles => articles.filter(article => article.get("id") !== id));

// const editArticle = (state, {id, title, article, tags}) => state.update("articles", articles => (
// 	articles.map(article => {
//         if (article.get("id") === +id) {
//             console.log('match');
//             return article.set(
//             "id": id,
//             "title": title,
//             "article": article,
//             "tags": tags
//           )
//         }
//     })
//     )
// );

const editArticle = (state, article) => state.update("articles", articles =>
	articles.set(article.get("id"), article)
    );

const addComment = (state, { id, comment }) => state.update("articles", articles =>
    articles.update(id, article => article.update("comments", comments => comments.push(comment)))
);

const setComments = (state, { id, comments }) => state.update("articles", articles =>
    articles.update(id, article => article.set("comments", comments))
);
// take the articles we've been given and set them as articles
// note: this will be expecting an Immutable List
// const setTitles = (state, { titles }) => state.set("titles", titles);

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "removeArticle": return removeArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        case "setComments": return setComments(state, action);
        case "setTitles": return setTitles(state, action);
        default: return state;
    }
}

export default reducer;
