import { images } from '~/assets/images';

const backgroundImage = `url(${images['beers']})`;
const Third = () => {
  return (
    <div className=" bg-red- h-screen p-10 ">
      <div
        style={{ backgroundImage: backgroundImage }}
        className="h-screen object-contain"
      ></div>
      okay
    </div>
  );
};

export default Third;
