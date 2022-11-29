import React from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';

function App() {
  return (
    <Layout>
      <Container>
        <TopBar />
      </Container>
    </Layout>
  );
}

export default App;
