export const addArticle = ({ title, article, tags }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags,
    };
};

export const deleteArticle = (id) => {
    return {
        type: "deleteArticle",
        id: id,
    };
};

export const editArticle = ( { title, article, tags }) => {
    return {
        type: "editArticle",
        title: title,
        article: article,
        tags: tags,
    };
};