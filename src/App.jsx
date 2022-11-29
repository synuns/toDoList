import React from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';
import InputForm from './components/InputForm';

function App() {
  return (
    <Layout>
      <Container>
        <TopBar />
        <InputForm />
      </Container>
    </Layout>
  );
}

export default App;
