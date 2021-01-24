export default function validateReview(values) {
  let validationErrors = {
    invalidText: true
  };
  const {review} = values;

  if (!review.trim()) {
    validationErrors.invalidText = true;
  }

  if (review.length >= 50 && review.length <= 400) {
    validationErrors.invalidText = false;
  }

  return validationErrors;
}
