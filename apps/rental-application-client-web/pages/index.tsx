import styles from './index.module.scss';
import { useSelector } from 'react-redux'
import { RootState } from '@rch/store';
import Alert from '@mui/material/Alert';

export function Index() {
  const test = useSelector((store: RootState)=>store.counter.value)
  return (
    <div className={styles.page}>
        <Alert severity="error">{test}</Alert>
        <h1 className="bg-indigo-500 p-2 font-mono text-blue-600">TEST</h1>
    </div>
  );
}

export default Index;
