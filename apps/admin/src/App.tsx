import Button from '@bereghici/button';

import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.container}>🚧 Admin App Coming Soon!🚧</div>
      <Button
        style={{
          marginTop: 16,
        }}
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('Test!');
        }}
      >
        Test button
      </Button>
    </>
  );
}

export default App;
