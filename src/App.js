import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div>
      <Helmet>
        <title>Jeffery M Klein Law | Worker's Compensation Attorney</title>
        <meta name="description" content="Jeffery Klein has 34 years of experience in the industry on both sides. He is an agressive, efficient, and loyal attorney who negotiates top dollar settlements for his clients. He has also received judgments for his clients of 1.7M+" />
      </Helmet>
      <Layout />
    </div>
  );
}

export default App;
