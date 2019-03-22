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
        // wrap the response.data with fromJS to convert it into an Immutable List
        // should not need to change thing toJS in components
        const titles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(setTitles(titles));
    });
};

export const postArticle = (data) => dispatch => {
    axios.post("/articles", data).then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        // should not need to change thing toJS in components
        const article = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(addArticle(article));
        history.push("/");
    });
};
