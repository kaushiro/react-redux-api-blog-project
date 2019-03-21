// add List to our imports
import { Map, List } from "immutable";

// need to track the last ID used
// we've got two dummy items, so start at 2
let lastID = 3;


// create a function that returns a new article Map
const createArticle = ({ title, article, tags }) => {

    return Map({
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// use the createArticle function
const addArticle = (state, data) => state.update("articles", articles => articles.push(createArticle(data)));
const deleteArticle = (state, {id}) => state.update("articles", articles => articles.filter(article => article.get("id") !== id));
const editArticle = (state, {id, title, article, tags}) => state.update("articles", articles => (
	articles.map(article => {
        if (article.get("id") === +id) {
            console.log('match');
            return article.set(
            "id": id,
            "title": title,
            "article": article,
            "tags": tags
          
        );

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
const setArticles = (state, { articles }) => state.set("articles", articles);


const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "commentArticle": return commentArticle(state, action);
        case "setArticles": return setArticles(state, action);
        default: return state;
    }
}

export default reducer;
