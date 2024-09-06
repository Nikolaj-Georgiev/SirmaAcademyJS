export default function PlayerMini({ cssClass, player }) {
  return (
    <div className={cssClass}>
      <p>{player.teamnumber}</p>
      <p>{player.fullname}</p>
    </div>
  );
}
