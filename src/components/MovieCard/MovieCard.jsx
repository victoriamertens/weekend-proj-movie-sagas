import { useDispatch } from 'react-redux';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const detailsPage = () => {
    console.log('Selected id:', movie.id);
    dispatch({ type: 'GET_MOVIE_DETAILS', payload: movie.id });
  };
  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={detailsPage} />{' '}
    </div>
  );
}

export default MovieCard;
