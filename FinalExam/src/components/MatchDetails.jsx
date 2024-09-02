import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import Loader from './Loader';

export default function MatchDetails() {
  const { matchesData, flagUrls, teamsData, playersData, recordsData } =
    useData();

  const { matchId } = useParams();
  console.log(matchId);

  // TODO:
  // 1. add logic for extracting the teams and players with their records
  // 2. visualize teams on both size of the fields with names and records
  // 3. add data to visualize the players on their corresponding fields

  if (
    matchesData.loading ||
    flagUrls.loading ||
    playersData.loading ||
    teamsData.loading ||
    recordsData.loading
  ) {
    return <Loader text='Match details are loading..' />;
  }

  console.log(matchesData);
  console.log(flagUrls);
  console.log(playersData);
  console.log(teamsData);
  console.log(recordsData);

  return (
    <section className='match'>
      <div className='match__container'>
        <h1 className='match__heading-primary'>This is Match details page</h1>
        <div className='match__details'>
          <div className='match__team-info'>
            <div className='match__team-name'>Pesho</div>
            <div className='match__team-flag'></div>
            <ul className='match__team-a'>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
              <li className='match__team-a-players'>1</li>
            </ul>
          </div>
          <div className='match__field-view'>
            <div className='match__field-view--team1'></div>
            <div className='match__field-view--team2'></div>
          </div>
          <div className='match__team-info'>
            <div className='match__team-name'>Gosho</div>
            <div className='match__team-flag'></div>
            <ul className='match__team-b'>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
              <li className='match__team-b-players'>2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
