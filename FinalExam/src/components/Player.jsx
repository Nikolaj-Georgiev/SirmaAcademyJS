export default function Player({ player }) {
  return (
    <li>
      <p>{player.teamnumber}</p>
      <p>{player.fullname}</p>
      <p>{player.position}</p>
    </li>
  );
}
