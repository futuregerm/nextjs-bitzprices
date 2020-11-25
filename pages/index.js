import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = ({ bpi }) => {
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      <p>Check the current BitCoin rate</p>
      <Prices bpi={bpi} />
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
