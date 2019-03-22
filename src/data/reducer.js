// add List to our imports
import { Map, List } from "immutable";
import history from "../history";

// create a function that returns a new article Map
const addArticle = (state, { article }) => state.update("articles", articles =>
    articles.set(article.get("id"), article.set("tags", List()))
);

const deleteArticle = (state, {id}) => state.update("articles", articles => articles.filter(article => article.get("id") !== id));

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

const editArticle = (state, {id, title, article, tags}) => state.update("articles", articles =>
	articles.map(a => {
        if (a.get("id") === id) {
            return a.set("title", title).set("article", article);

        } else {
            return a;
        }
    }
    ));

const commentArticle = (state, { id, email, comment }) => state.update("articles", articles =>
    articles.map(a => {
        if (a.get("id") === id) {
            return a.update("comments", comms =>
                comms.push(Map({
                    "email": email,
                    "comment": comment,
                })))
        } else {
            return a;
        }
    })
);
// take the articles we've been given and set them as articles
// note: this will be expecting an Immutable List
const setTitles = (state, { titles }) => state.set("articles", titles);


const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "commentArticle": return commentArticle(state, action);
        case "setTitles": return setTitles(state, action);
        default: return state;
    }
}

export default reducer;
