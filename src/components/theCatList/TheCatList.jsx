import "./theCatList.scss";
import { useSelector } from "react-redux";

const TheCatList = () => {
      const data = useSelector(item => item.rootReducer.cats.cats);
      return (
            <div id="containerOfAllListOfCats">
                  {data.map(item =>
                        <div key={item.id} id="containerOfImgesAndDescription">

                              <div id="imgContainer">
                                    <img
                                          src={item.image.url}
                                          alt={item.name}
                                    />
                              </div>

                              <div id="descriptionContainer">
                                    <h3>{item.name}</h3>
                                    <h4>`temperament ${item.temperament}`</h4>
                                    <p>{item.description}</p>
                              </div>

                        </div>
                  )}
            </div>
      )
}
export default TheCatList;