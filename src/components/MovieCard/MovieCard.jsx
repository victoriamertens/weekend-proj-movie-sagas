import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const detailsPage = () => {
    console.log('Selected id:', movie.id);
    history.push(`/details/${movie.id}`);
    //dispatch({ type: 'GET_MOVIE_DETAILS', payload: movie.id });
  };
  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={detailsPage} />{' '}
    </div>
  );
}

export default MovieCard;
