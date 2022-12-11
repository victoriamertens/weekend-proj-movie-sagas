import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const history = useHistory();
  const detailsPage = () => {
    history.push(`/details/${movie.id}`);
  };
  return (
    <div class="card" key={movie.id}>
      <div class="title">
        <h3>{movie.title}</h3>
      </div>
      <img src={movie.poster} alt={movie.title} onClick={detailsPage} />{' '}
    </div>
  );
}

export default MovieCard;
