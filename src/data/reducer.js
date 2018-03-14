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

const changeArticle = ({ id, title, article, tags }) => {

    return Map({
        id: id,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// use the createArticle function
const addArticle = (state, action) => state.update("articles", articles => articles.push(createArticle(action)));
const deleteArticle = (state, {id}) => state.update("articles", articles => articles.filter(article => article.get("id") !== id));
const editArticle = (state, {id}) => state.update("articles", articles =>
	articles.get(article => article.get("id") === id))
	.set(changeArticle());

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        case "editArticle": return editArticle(state, action);
        default: return state;
    }
}

export default reducer;
