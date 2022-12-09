import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Details from '../pages/Details';
import ToDoList from '../pages/ToDoList';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="details" element={<Details />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
