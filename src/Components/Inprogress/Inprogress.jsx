import "./Inprogress.css";
import dots from "../../Assets/dots.svg";
import { useContext,useState } from "react";
import { AppContext } from "../../context";
import DotModal from "../Pending/DotModal";

const Inprogress = () => {
  const { inprogress } = useContext(AppContext);
  const [showDotModal, setDotModal] = useState([]);
  const count = inprogress.length;
   let data = [...showDotModal];


    const OpenDotModal = (ind) => {
    let res = data.indexOf(ind)
    console.log("res",res);
    if (res===-1)
    {
        data.splice(ind, 0, ind);
    }
    else
    {
      data[res] = -2;
    }
   
    setDotModal([...data]);

    
  }
  return (
    <>
      <div className="pending">
        <div className="pending__uppersection">
          <p className="pending__uppersection-count">{ count}</p>
          <p className="pending__uppersection-text">Inprogress</p>
        </div>

        {inprogress.map((item, index) => {
          return (
            <div className="pending__uppersection-content" key={index}>
              {showDotModal[index] === index ? (<DotModal type="inprogress" id={ index} />) : ""}
              <img
                src={dots}
                alt="dots"
                className="pending__uppersection-content-option"
                onClick={() => OpenDotModal(index)}
              />
              <div className="pending__uppersection-content-text">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Inprogress;
