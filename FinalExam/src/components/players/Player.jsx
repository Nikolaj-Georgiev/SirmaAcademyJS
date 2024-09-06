export default function Player({ player, cssClass }) {
  return (
    <li className={cssClass}>
      <p>{player.teamnumber}</p>
      <p>{player.fullname}</p>
      <p>{player.position}</p>
    </li>
  );
}
