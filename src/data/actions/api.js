// import our axios config file
import axios from "../../axios";
import history from "../../history";
// import the fromJS function from immutable
// this allows us to convert regular JS values into Immutable values

// import the setArticles action
import { 
    setTitles, 
    addArticle,
    removeArticle,
    addComment,
    editArticle,
    setArticle,
    setComments
} from "./state";



export const getTitles = () => dispatch => {
    axios.get("/articles").then(response => {
        const articles = response.data;
        dispatch(setTitles(articles));
    });
};

export const postArticle = (data) => dispatch => {
    // data.tags = data.tags.split(/,\s+/);
    axios.post("/articles", data).then(response => {
        const article = response.data;
        dispatch(addArticle(article));
        history.push("/");
    });
};
export const getArticle = ( id ) => dispatch => {
    axios.get("/articles/" + id).then(response => {
        const article = response.data;
        dispatch(setArticle(article, id));
        dispatch(getComments(id));
    });
};
export const getComments = id => dispatch => {
    axios.get("/articles/" + id + "/comments").then(response => {
        const comments = response.data;
        dispatch(setComments(id, comments));
    });
};
export const deleteArticle = id => dispatch => {
    axios.delete("/articles/" + id).then(response => {
        dispatch(removeArticle(id));
        history.push("/")
    });
};

export const postComment = (id, data) => dispatch => {
    console.log(id, data);
    axios.post("/articles/" + id + "/comments", data).then(response=> {
        const comment = data;
        console.log(comment);
        dispatch(addComment(id, comment));
        history.push("/")
    })
} 

export const putArticle = (id, data )=> dispatch => {
    axios.put("/articles/" + id, data).then(response => {
        console.log(response.data);
        const article = response.data;
        dispatch(editArticle(id, article));
        history.push("/")
    });
};