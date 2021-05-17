import Button from '@bereghici/button';

function App() {
  return (
    <>
      <div>🚧 Admin App Coming Soon!🚧</div>
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
