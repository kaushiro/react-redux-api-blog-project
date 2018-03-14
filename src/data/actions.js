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

export const editArticle = ( id, { title, article, tags }) => {
    return {
        type: "editArticle",
        id: id,
        title: title,
        article: article,
        tags: tags,
    };
};