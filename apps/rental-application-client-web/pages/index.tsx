import styles from './index.module.scss';
import { useSelector } from 'react-redux'
import { RootState } from '@rch/store';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';
import {pb,currentUser} from '@rch/pocketbase';

export function Index() {
  const test = useSelector((store: RootState)=>store.counter.value);
  const login  = async () : Promise<void> => {
    await pb.collection('users').authWithPassword('nacef','97084602');
  }
  return (
    <div className={styles.page}>
        <Alert severity="error">{test}</Alert>
        <h1 className="bg-indigo-500 p-2 font-mono text-white">Login with a click</h1>
        <Button onClick={login}>Click me</Button>
        
    </div>
  );
}

export default Index;
