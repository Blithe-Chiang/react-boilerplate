import { useCallback, useState } from 'react';
import styles from './app.module.css'

function App() {

  return (
    <div>
      <div className='w-[400px] h-[200px] bg-indigo-300'>你好</div>
      <div className={styles.t}>traditional styles</div>
    </div>
  );
}

export default App;
