import ScrollSVG from '~/components/body/ScrollSVG';

const videoBg =
  'https://www.luckyfolks.fr/wp-content/uploads/2022/03/lucky-folks-pub-2021-v2-1.mp4';
const First = () => {
  return (
    <div className="h-screen overflow-hidden">
      <video
        className="h-full w-full object-cover brightness-90 "
        autoPlay
        loop
        muted
        src={videoBg}
      />
      <ScrollSVG />
    </div>
  );
};

export default First;
