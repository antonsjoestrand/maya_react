import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./sass/app.scss";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Accolades from "./components/Accolades.jsx";
import Contact from "./components/Contact.jsx";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";
import Success from "./components/Success";
import HomeUpdate from "./components/HomeUpdate";
import WorkCreate from "./components/WorkCreate";
import WorkUpdate from "./components/WorkUpdate";
import AboutUpdate from "./components/AboutUpdate";
import SkillCreate from "./components/SkillCreate";
import SkillUpdate from "./components/SkillUpdate";
import AwardCreate from "./components/AwardCreate";
import AwardUpdate from "./components/AwardUpdate";
import ArticleCreate from "./components/ArticleCreate";
import ArticleUpdate from "./components/ArticleUpdate";
import TestimonialCreate from "./components/TestimonialCreate";
import TestimonialUpdate from "./components/TestimonialUpdate";
import PhoneUpdate from "./components/PhoneUpdate";
import EmailUpdate from "./components/EmailUpdate";
import CityUpdate from "./components/CityUpdate";

function App() {
  return (
    <Router>
      <div className='container'>
        {/* CONTENT ROUTES */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/accolades' element={<Accolades />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home/update' element={<HomeUpdate />} />
          <Route path='/work/create' element={<WorkCreate />} />
          <Route path='/work/update' element={<WorkUpdate />} />
          <Route path='/about/update' element={<AboutUpdate />} />
          <Route path='/skill/create' element={<SkillCreate />} />
          <Route path='/skill/update' element={<SkillUpdate />} />
          <Route path='/award/create' element={<AwardCreate />} />
          <Route path='/award/update' element={<AwardUpdate />} />
          <Route path='/article/create' element={<ArticleCreate />} />
          <Route path='/article/update' element={<ArticleUpdate />} />
          <Route path='/testimonial/create' element={<TestimonialCreate />} />
          <Route path='/testimonial/update' element={<TestimonialUpdate />} />
          <Route path='/phone/update' element={<PhoneUpdate />} />
          <Route path='/email/update' element={<EmailUpdate />} />
          <Route path='/city/update' element={<CityUpdate />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
