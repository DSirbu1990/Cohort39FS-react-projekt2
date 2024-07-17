import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";

// Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";

// Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homewotk_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";

// Consultations
import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element="Page Not Found!!!" />
        </Routes>
      </Layout>
      {/* <Consultation_03 /> */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_11 /> */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}
    </BrowserRouter>
  );
}

export default App;