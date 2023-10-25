import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import Post from "./components/pages/Post";
import { Container } from 'react-bootstrap';
import Categories from "./components/pages/Categories";
import PostList from "./components/pages/PostList";



const App = () => {
  return (
    <main> 
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryName" element={<PostList />} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
