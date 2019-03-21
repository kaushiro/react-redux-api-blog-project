// import our axios config file
import axios from "../../axios";
// import the fromJS function from immutable
// this allows us to convert regular JS values into Immutable values
import { fromJS } from "immutable";

// import the setArticles action
import { setArticles } from "./state";
import { addArticle } from "./state";


export const getArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        // should not need to change thing toJS in components
        const articles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};

export const postArticle = (data) => dispatch => {
    axios.post("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        // should not need to change thing toJS in components
        const articles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(addArticle(articles));
    });
};
