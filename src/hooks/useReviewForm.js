import React, {useState} from 'react';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import {sendComment} from 'root/store/actions/api-action';
import browserHistory from '../browser-history';
import {getCurrentFilm} from 'root/store/selectors';
import {responceCodeToError} from 'root/const';

const useReviewForm = (validate) => {
  const [values, setValues] = useState({
    rating: 0,
    review: '',
    isDisabled: true
  });
  let [networkErrors, setNetworkErrors] = useState({
    request: false
  });
  const {review, rating} = values;
  const validationErrors = validate(values);
  const {invalidText} = validationErrors;
  const dispatch = useDispatch();
  const getFilmId = () => {
    const {id = 1} = useSelector(
      (state) => getCurrentFilm(state),
      shallowEqual
    );

    return id;
  };

  const pushComment = (id, comment, onSuccess, onError) => {
    dispatch(sendComment(id, comment, onSuccess, onError));
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setValues({
      ...values,
      [name]: value
    });

    if (!invalidText) {
      setValues({...values, isDisabled: false});
    }
  };

  const handleSuccess = () => {
    setValues({...values, isDisabled: false});

    browserHistory.goBack();
  };

  const handleError = (code) => {
    const errorKey = responceCodeToError[code];
    const newError = {[errorKey]: true};
    setNetworkErrors({...networkErrors, newError});
    setValues({...values, isDisabled: false});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const comment = {
      rating,
      comment: review.trim()
    };

    const filmId = getFilmId();

    setValues({...values, isDisabled: true});
    pushComment(
      comment,
      filmId,
      handleSuccess,
      handleError
    );
  };

  return {
    handleChange,
    handleSubmit,
    values,
    networkErrors,
    validationErrors
  };
};

export default useReviewForm;
