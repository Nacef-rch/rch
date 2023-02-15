import styles from './index.module.scss';
import { useSelector } from 'react-redux'
import { RootState } from '@rch/store';


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
        <h1>value of count is {test}</h1>
    </div>
  );
}

export default Index;
