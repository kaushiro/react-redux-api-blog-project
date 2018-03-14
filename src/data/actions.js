export const addArticle = ({ title, article, tags }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags,
    };
};