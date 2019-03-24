// import our axios config file
import axios from "../../axios";
import history from "../../history";
// import the fromJS function from immutable
// this allows us to convert regular JS values into Immutable values
import { fromJS } from "immutable";

// import the setArticles action
import { 
    setTitles, 
    addArticle,
} from "./state";



export const getTitles = () => dispatch => {
    axios.get("/articles").then(response => {
        const articles = response.data;
        console.log(articles);
        dispatch(setTitles(articles));
    });
};

export const postArticle = (data) => dispatch => {
    // data.tags = data.tags.split(/,\s+/);
    axios.post("/articles", data).then(response => {
        const article = data;
        console.log(article);
        dispatch(addArticle(article));
        history.push("/");
    });
};