export default function Loader({ text = 'Loading...' }) {
  return (
    <div className='loader__container'>
      <span className='loader'></span>
      <p className='loader__text'>{text}</p>
    </div>
  );
}
