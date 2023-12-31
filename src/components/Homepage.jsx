import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
{/* Landing page CryptoNova icon with quote */}
      <div className="homepage-img flex-container">

        <div className="homepage-background">
          <Title level={3} className="homepage-slogan">Easy, Breezy, Beautiful Cryptocurrency.</Title>

          <img src="cryptocurrency.png" alt="Crypto Logo" />
          <Title level={3} className="homepage-slogan">Crypto made easy!!</Title>

        </div>
      </div>
      
{/* Top 10 cryptos display  */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Cryptocurrencies by MarketCap</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      
{/*Crypto News display  */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>

      <News simplified />

{/* Global crypto stats Component */}
      <Title level={2} className="heading stats-heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
    </>
  );
};

export default Homepage;
