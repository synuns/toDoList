import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
