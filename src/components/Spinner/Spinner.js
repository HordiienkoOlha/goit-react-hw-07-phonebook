import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={30}
      width={30}
      strokeWidth={5}
      strokeWidthSecondary={1}
      color="blue"
      secondaryColor="white"
    />
  );
};

export default Spinner;
