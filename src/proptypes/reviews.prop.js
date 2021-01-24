import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    rating: PropTypes.num,
    date: PropTypes.string
  })
);
