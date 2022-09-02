import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import BGCard from "./img/card-bg.jpg";
//import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";
//import { HolidaysContextProvider } from "./context/holidayContext";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const App = () => {
  return (
    <div style={wrapper}>
      {/* <HolidaysContextProvider> */}
        <ImgContextProvider>
          {/* <TextContextProvider> */}
            <Header />
            <Card img_src={BGCard} />
            <Footer />
          {/* </TextContextProvider> */}
        </ImgContextProvider>
      {/* </HolidaysContextProvider> */}
    </div>
  );
};

export default App;
