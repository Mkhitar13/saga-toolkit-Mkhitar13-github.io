import "./theSelectSection.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCatsFetch, changeCountOfCatsList, removeItemInArray } from "../../redux/slices/getPostsSlice";

const TheSelectSection = () => {

      const dispatch = useDispatch();
      const [count, setCount] = useState(0);

      const callOfChangeCountOfCatsList = () => {
            dispatch(getCatsFetch());
            dispatch(changeCountOfCatsList(count));
      }

      const removeItemOfCatsList = () => {
            dispatch(removeItemInArray());
      }

      useEffect(() => {
            dispatch(getCatsFetch())
      }, [])

      return (
            <div id="theSelectSectionContainer">
                  <div id="insideTheSelectSectionContainer">
                        <label htmlFor="uantity"> Quantity (between 1 and 30): </label>
                        <input
                              type="number"
                              placeholder="write count and press the button"
                              onChange={e => setCount(e.target.value)}
                              min="1"
                              max="30"
                              maxLength="30"
                              name="quantity"
                        />
                        <input
                              type="button"
                              value="change count of cats"
                              onClick={callOfChangeCountOfCatsList}
                        />

<input
                              type="button"
                              value="delete"
                              onClick={removeItemOfCatsList}
                        />

                  </div>
            </div>
      )
}
export default TheSelectSection;