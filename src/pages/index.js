import React from 'react'
import Hero from '../components/Hero';
import LatestArticles from '../components/LatestArticles';
import Layout from "../components/Layout";
import ValueProps from '../components/ValueProps';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <ValueProps />
        <LatestArticles />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
