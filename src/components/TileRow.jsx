import tile from '../images/tiles.jpg'


export default function TileRow() {
  const tileStyle = {
    backgroundImage: `url(${tile})`,
    backgroundRepeat: 'repeat-x', // Repeats the image horizontally
    backgroundSize: 'auto 100px', // Ensures the height is 100px
    height: '100px',
    width: '100%', // Takes up the full width of the device
  };

  return (
    <div style={tileStyle}></div>
  );
}