export default function Match({ match }) {
  return (
    <div>
      <p>{`Match: ${match.ateamid} vs ${match.bteamid}, Score: ${match.score}`}</p>
    </div>
  );
}
