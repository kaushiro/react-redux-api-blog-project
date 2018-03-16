// add List to our imports
import { Map, List } from "immutable";


// need to track the last ID used
// we've got two dummy items, so start at 2
let lastID = 2;

// create a function that returns a new article Map
const createArticle = ({ title, article, tags }) => {
    // up the ID by 1 every time
    lastID += 1;

    return Map({
        id: lastID,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// const createComment = ({ email, comment }) => {
//     return Map({
//         email: email,
//         comment: comment,
//     });
// };

// use the createArticle function
const addArticle = (state, action) => state.update("articles", articles => articles.push(createArticle(action)));
const deleteArticle = (state, {id}) => state.update("articles", articles => articles.filter(article => article.get("id") !== id));
const editArticle = (state, {id, title, article, tags}) => state.update("articles", articles =>
	articles.map(a => {
        if (a.get("id") === id) {
            return a.set("title", title).set("article", article);
        } else {
            return a;
        }
    }
))
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

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "commentArticle": return commentArticle(state, action);
        default: return state;
    }
}

export default reducer;
