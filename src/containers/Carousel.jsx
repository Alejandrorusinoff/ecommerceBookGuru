import React, { useEffect } from "react";
import { getRandomBooks } from '../methods/axiosRequests';
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

const Carousel1 = () => {
  const [rndBooks, setRndBooks] = React.useState([]);

  useEffect(() => {
    getRandomBooks()
    .then(({ data }) => setRndBooks(data));
  }, []);

  return (
    <div className="car">
      <h6>Latest Releases</h6>
      Discover the very latest titles from the worlds of fiction, non-fiction
      and children’s. These great volumes are all out now.
      <Carousel>
        <Carousel.Item>
          <div className="slideImagediv">
            <img
              src={rndBooks[0] ? rndBooks[0].img : null}
               alt="..."
            />
            <img
              src={rndBooks[1] ? rndBooks[1].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[2].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[3].img : null}
               alt="..."
            />
            <img
              src={rndBooks[4] ? rndBooks[4].img : null}
               alt="..."
            />
            <img
              src={rndBooks[5] ? rndBooks[5].img : null}
               alt="..."
            />
            <img
              src={rndBooks[6] ? rndBooks[6].img : null}
               alt="..."
            />
            <img
              src={rndBooks[7] ? rndBooks[7].img : null}
               alt="..."
            />
            <img
              src={rndBooks[8] ? rndBooks[8].img : null}
               alt="..."
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slideImagediv">
            {" "}
            <img
              src={rndBooks[2] ? rndBooks[9].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[10].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[11].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[12].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[13].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[14].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[15].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[16].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[17].img : null}
               alt="..."
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slideImagediv">
            {" "}
            <img
              src={rndBooks[4] ? rndBooks[18].img : null}
               alt="..."
            />
            <img
              src={rndBooks[5] ? rndBooks[19].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[20].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[21].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[22].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[23].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[24].img : null}
               alt="..."
            />
            <img
              src={rndBooks[3] ? rndBooks[25].img : null}
               alt="..."
            />
            <img
              src={rndBooks[2] ? rndBooks[26].img : null}
               alt="..."
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;
