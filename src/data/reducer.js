// add List to our imports
// import initial from "./initial";
// create a function that returns a new article Map

const addArticle = (state, {article}) => {
    return {
    ...state,
    articles: [
        ...state.articles,
        {
            article: article.article,
            tags: article.tags,
        }
    ]
    };
};

const setTitles = (state, { articles }) => {
    return {
        ...state,
       articles: articles, 
    }
};
const setArticle = (state, { article, id }) => {
    let addedArticle = state.articles.map(a=>{
        if(a.id === +id) {
            return article;
        } else {
            return a;
        }
    })
    return {
    ...state,
    articles: addedArticle,
    };
};
const removeArticle = (state, { id }) => {
    let removedArticleFromArray = state.articles.filter(articles=>articles.id !== +id);
    console.log(id, removedArticleFromArray);
    return {
        ...state,
        articles: removedArticleFromArray,
    }
}

const editArticle = (state, { article, id }) => {
    console.log(article, id);
    const articlesWithEdits = state.articles.map(a => {
        if(a.id === id) {
            return article;
        } else {
            return a;
        }
    })
    console.log(articlesWithEdits);
    return {
        ...state,
        articles: articlesWithEdits
    }
}
const addComment = (state, { id, updatedArticle }) => {
    let addCommentToArticle = state.articles.map(a => {
        if(a.id === +id) {
            return updatedArticle; 
        } else {
            return a;
        }
    })
    return {
        ...state,
       articles: addCommentToArticle,
     }

};
const setComments = (state, { article, id }) => {
    let addedComments = state.articles.map(a=>{
        if(a.id === +id) {
            return article;
        } else {
            return a;
        }
    })
    return {
    ...state,
    articles: addedComments,
    };
};
const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "setArticle": return setArticle(state, action);
        case "removeArticle": return removeArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        case "setComments": return setComments(state, action);
        case "setTitles": return setTitles(state, action);
        default: return state;
    }
}

export default reducer;

// selectors
