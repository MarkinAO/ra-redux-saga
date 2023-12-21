import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewsfeedList from "./NewsfeedList";

export default function Newsfeed() {
    return(
        <Provider store={store}>
            <NewsfeedList />
        </Provider>        
    )
}