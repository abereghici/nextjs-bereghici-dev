import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => (
  <Button
    onClick={() => {
      // console.log('Test');
    }}
  >
    Button
  </Button>
);
