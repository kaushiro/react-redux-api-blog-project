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

export const editArticle = ( { title, article, tags }, id ) => {
    return {
        type: "editArticle",
        id: id,
        title: title,
        article: article,
        tags: tags,
    };
};