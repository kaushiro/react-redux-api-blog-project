export const setTitles = articles => {
    return {
        type: "setTitles",
        articles: articles,
    };
};

export const setArticle = (article, id) => {
    return {
        type: "setArticle",
        article: article,
        id: id
    };
};

export const addArticle = (article) => {
    return {
        type: "addArticle",
        article: article,
    };
};

export const removeArticle = id => {
    return {
        type: "removeArticle",
        id: id,
    };
};

export const addComment = (id, updatedArticle) => {
    return {
        type: "addComment",
        id: id,
        updatedArticle: updatedArticle,
    };
};
export const setComments = (id, article) => {
    return {
        type: "setComments",
        id: id,
        article: article,
    };
};
export const editArticle = (article, id) => {
    return {
        type: "editArticle",
        article: article,
        id: id
    };
};