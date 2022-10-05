import "./theCatList.scss";
import { useSelector, useDispatch } from "react-redux";
import { FaBattleNet } from "react-icons/fa";
import { removeItemInArray } from "../../redux/slices/getPostsSlice";

const TheCatList = () => {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.rootReducer.cats.cats);

  return (
    <div id="containerOfAllListOfCats">

      {data.map((item) => (
        <div
          key={item.id}
          id="containerOfImgesAndDescription"
        >
          <div
            id="deleteItem"
            onClick={(e) => {
              dispatch(removeItemInArray(item.id));
            }}
          >
            <FaBattleNet fill="white" size="30px" />
          </div>

          <div id="imgContainer">
            <img src={item.image.url} alt={item.name} />
          </div>

          <div id="descriptionContainer">
            <h3>{item.name}</h3>
            <h4> temperament ${item.temperament} </h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TheCatList;
