import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/CarouselItem';
import Layout from '../../components/Layout';

import './styles.scss';

const Home = ({ myList, trends, originals }) => (
  <div className="home_page">
    <Layout>
      <>
        <Search />
        {myList.length > 0 && (
          <Categories title="Mi Lista">
            <Carousel>
              {myList.map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              ))}
            </Carousel>
          </Categories>
        )}

        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>

        <Categories title="Originales de PlatziVideo">
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      </>
    </Layout>
  </div>
);

Home.propTypes = {
  myList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      language: PropTypes.string,
      year: PropTypes.number,
      contentRating: PropTypes.string,
      duration: PropTypes.number,
      cover: PropTypes.string,
      description: PropTypes.string,
      source: PropTypes.string,
    }),
  ).isRequired,
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      language: PropTypes.string,
      year: PropTypes.number,
      contentRating: PropTypes.string,
      duration: PropTypes.number,
      cover: PropTypes.string,
      description: PropTypes.string,
      source: PropTypes.string,
    }),
  ).isRequired,
  originals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      language: PropTypes.string,
      year: PropTypes.number,
      contentRating: PropTypes.string,
      duration: PropTypes.number,
      cover: PropTypes.string,
      description: PropTypes.string,
      source: PropTypes.string,
    }),
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Home);
