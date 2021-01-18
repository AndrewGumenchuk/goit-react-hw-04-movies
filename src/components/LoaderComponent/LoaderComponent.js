import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader
        type="Puff"
        color="##0051ff"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}

export default LoaderComponent;
