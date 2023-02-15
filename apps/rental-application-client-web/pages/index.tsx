import styles from './index.module.scss';
import { useSelector } from 'react-redux'
import { RootState } from '@rch/store';
import Alert from '@mui/material/Alert';

export function Index() {
  const test = useSelector((store: RootState)=>store.counter.value)
  console.log(test);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
        <Alert severity="error">{test}</Alert>
    </div>
  );
}

export default Index;
