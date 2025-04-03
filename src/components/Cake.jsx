import { useState, useEffect } from "react";
import "../assets/css/cake.css";
import { CakeSVG, confetti } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);
  const [showButton, setShowButton] = useState(false); // State to control button visibility

  // Delay the button's appearance to match the flame animation timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Show the button after the flames are fully visible
    }, 8000); // Match the flame animation delay (7.5s) + a small buffer

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const blowOutCandles = () => {
    setCandlesBlownOut(true);
  };

  return (
    <div className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative">
      {/* Confetti background when candles are blown out */}
      {candlesBlownOut && (
        <div
          className="absolute inset-0 bg-cover bg-center z-50"
          style={{
            backgroundImage: `url(${confetti})`,
          }}
        />
      )}

      {/* Happy Birthday message and Next Page button */}
      {candlesBlownOut && (
        <motion.div
          className="absolute top-20 text-white text-3xl font-bold z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg width="800" height="200" viewBox="0 0 400 200">
            <defs>
              <path
                id="curve"
                d="M50,150 Q200,50 350,150"
                fill="transparent"
                stroke="white"
              />
            </defs>
            <text fontSize="40" fill="white" textAnchor="middle">
              <textPath href="#curve" startOffset="50%">
                Happy Birthday!
              </textPath>
            </text>
          </svg>
          <Link to="/present" className="flex justify-center items-center">
            <p className="absolute top-[30rem] xs:top-[36rem] s:top-[40rem] px-7 py-3 bg-customBlue text-white rounded-full hover:bg-blue-600 font-medium text-base text-center ">
              Next Page
            </p>
          </Link>
        </motion.div>
      )}

      {/* Cake with flames */}
      <div className="relative z-10">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
          <div className="candle">
            {!candlesBlownOut && (
              <div>
                <div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CakeSVG />
      </div>

      {/* Blow Out Candles button */}
      {!candlesBlownOut && showButton && (
        <motion.button
          onClick={blowOutCandles}
          className="absolute bottom-10 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-medium text-lg z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blow Out Candles
        </motion.button>
      )}
    </div>
  );
}

export default Cake;