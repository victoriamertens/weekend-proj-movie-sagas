import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Details.css';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getDetails();
    console.log('Running Get details');
  }, []);

  const getDetails = () => {
    console.log('Get Details not needed');
    dispatch({ type: 'GET_MOVIE_DETAILS', payload: id });
  };
  const reduxStore = useSelector((store) => store);

  const details = reduxStore.details[0];
  const genres = reduxStore.genres;
  console.log('details:', details);
  console.log('genres:', genres);
  console.log('hi');
  const returnPage = () => {
    history.push('/');
  };

  const loading = !details;
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="details">
      <div class="text">
        <h2>{details.title}</h2>

        <p>{details.description}</p>
        <h3>Genres:</h3>
        <ul>
          {genres.map((genre) => {
            return <li>{genre.name}</li>;
          })}
        </ul>
        <button onClick={returnPage}>Return to Main Page</button>
      </div>
      <div class="poster">
        <img src={details.poster} alt={details.title} />
      </div>
    </div>
  );
}
export default Details;
