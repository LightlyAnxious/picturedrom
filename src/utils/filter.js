const getUniqueGenres = (targetFilms) => {
  const nonUniqueGenres = targetFilms.reduce(
    (total, film) => {
      film.genre.split(', ').forEach((genre) => {
        total.push(genre);
      });
      return total;
    },
    ['All genres']
  );

  const uniqueGenres = new Set(nonUniqueGenres);
  return Array.from(uniqueGenres);
};

function findMovieById(id, movies) {
  return movies.find((movie) => movie.id === id);
}

export {getUniqueGenres, findMovieById};
