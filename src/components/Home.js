  import React, { useState, useRef} from "react";
  import data from "./data.json";
  import "../App.css"
  const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const rightSideRef = useRef(null);
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    const onItemClick = (itemIndex) => {
      setSelectedItem(itemIndex);
      setBackgroundColor('aliceblue'); // Change background color
      const itemHeight = 220;
      const offsetTop = itemIndex * itemHeight;
      if (rightSideRef.current) {
        rightSideRef.current.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      // Reset background color after 5 seconds
      setTimeout(() => {
        setBackgroundColor('transparent');
      }, 1000);
    };


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 text-start">
            <ul className="list-group list-unstyled" style={{ overflowY: "scroll", maxHeight: "calc(100vh - 100px)" }}>
              {data.data.map((item, index) => (
                <div className="showLiftSide">
                <li
                  key={index}
                  className={
                    selectedItem === index ? "mb-0" : "mb-0"
                  }
                  onClick={() => onItemClick(index)}
                > <p className="mb-0">{item.title}</p>
                  
                </li>
                <li
                key={index}
                className={
                  selectedItem === index ? " active" : ""
                }
                onClick={() => onItemClick(index)}
              > <p className="ms-3">{item.type}</p> 
              </li>
              </div>
              ))}
            </ul>
          </div>
          <div className="col-10 text-start" style={{ overflowY: "scroll", maxHeight: "calc(100vh - 100px)" }} ref={rightSideRef}>
            {data.data.map((item, index) => (
              <div
                key={index}
                className={`right-side-item`}
                style={{ minHeight: "100px", borderBottom: "1px solid #ccc", padding: "10px", backgroundColor: index === selectedItem ? backgroundColor : 'transparent'}}
              >{console.log()}
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <h5>{item.type}</h5>
                <p>{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Home;

