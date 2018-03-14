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

// use the createArticle function
const addArticle = (state, data) => state.update("articles", articles => articles.push(createArticle(data)));
const deleteArticle = (state, data) => state.update("articles", articles => articles.splice(lastID, 1));


const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        default: return state;
    }
}

export default reducer;
