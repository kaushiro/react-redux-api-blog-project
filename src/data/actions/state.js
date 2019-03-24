export const setTitles = articles => {
    return {
        type: "setTitles",
        articles: articles,
    };
};

export const setArticle = article => {
    return {
        type: "setArticle",
        article: article,
    };
};

export const addArticle = article => {
    return {
        type: "addArticle",
        article: article,
    };
};


export const deleteArticle = (id) => {
    return {
        type: "deleteArticle",
        id: id,
    };
};

export const editArticle = ( { title, article, tags }, id ) => {
    return {
        type: "editArticle",
        id: id,
        title: title,
        article: article,
        tags: tags,
    };
};

export const commentArticle = ( { email, comment }, id ) => {
    return {
        type: "commentArticle",
        id: id,
        email: email,
        comment: comment,
    };
};

export const setArticles = articles => {
    return {
        type: "setArticles",
        articles: articles,
    };
};

// export const getArticle = id => dispatch => {

//     // now we can dispatch an API request
//     axios.get("/articles/" + id).then({ data } => {

//         // when we get a response back, we dispatch an action to update the state
//         const article = data;
//         dispatch(addArticle(article));
//     });
// };