import React, { useEffect } from "react";
import "./FlowerScene.css";

const FlowerScene = () => {
  useEffect(() => {
    document.body.classList.remove("container");
  }, []);

  return (
    <div className="flower-scene">
      <div className="night"></div>
      <div className="flowers">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`flower flower--${num}`}>
            <div className={`flower__leafs flower__leafs--${num}`}>
              {[1, 2, 3, 4].map((leaf) => (
                <div
                  key={leaf}
                  className={`flower__leaf flower__leaf--${leaf} blooming-leaf-${
                    leaf % 2 === 0 ? "right" : "left"
                  }`}
                ></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flower__light flower__light--${i + 1}`}
                ></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4, 5, 6].map((leaf) => (
                <div
                  key={leaf}
                  className={`flower__line__leaf flower__line__leaf--${leaf} blooming-leaf-${
                    leaf % 2 === 0 ? "right" : "left"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}

        <div className="growing-grass">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className={`flower__grass flower__grass--${num}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((leaf) => (
                <div
                  key={leaf}
                  className={`flower__grass__leaf flower__grass__leaf--${leaf} blooming-leaf-${
                    leaf % 2 === 0 ? "right" : "left"
                  }`}
                ></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          ))}
        </div>

        <div className="long-grass">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
            <div key={num} className={`long-g long-g--${num}`}>
              {[1, 2, 3, 4, 5, 6, 7].map((leaf) => (
                <div
                  key={leaf}
                  className={`grow-ans blooming-leaf-${
                    leaf % 2 === 0 ? "right" : "left"
                  }`}
                  style={{ "--d": `${1.2 + num * 0.2}s` }}
                >
                  <div className={`leaf leaf--${leaf}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerScene;
