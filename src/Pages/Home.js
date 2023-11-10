import Layout from "../layouts/Layout";
import Hero from "../layouts/home/Hero";
import Transaction from "../components/Transaction";
import AllFeature from "../layouts/home/AllFeature";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Transaction />
      <AllFeature />
    </Layout>
  );
};

export default Home;
