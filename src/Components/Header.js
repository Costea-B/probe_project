import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Home from '../pages/Home'


export default function Header() {
  return (
    <div>
      <div>
        <Link to="/">Acasă</Link>
        <Link to="/blogs">Bloguri</Link>
        <Link to="/about">Despre noi</Link>
      </div>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
        </>
      </Routes>
    </div>
  )
}
