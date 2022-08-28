import { combineReducers } from "redux";
import reducerOfPosts from "../redux/slices/getPostsSlice";

const rootReducer = combineReducers({
      cats: reducerOfPosts,
})
export default rootReducer;

















