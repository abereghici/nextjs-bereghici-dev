import styled from '@emotion/styled';

import { sizing, Sizing as SizingType } from './sizing';

export default {
  title: 'Primitives',
};

const sizeOptions = {
  options: Object.keys(sizing),
  control: {
    type: 'select',
  },
};

type SizingValue = keyof SizingType;

type SizingArgs = {
  all: SizingValue;
  top: SizingValue;
  right: SizingValue;
  bottom: SizingValue;
  left: SizingValue;
};

const Background = styled.div`
  display: inline-block;
  background-color: #f8cb9c;
`;

const Button = styled.button<Partial<SizingArgs>>(props => ({
  background: 'white',
  padding: 24,
  border: '1px solid black',
  borderRadius: 16,
  ...(props.all && {
    margin: sizing[props.all],
  }),
  ...(props.left && {
    marginLeft: sizing[props.left],
  }),
  ...(props.right && {
    marginRight: sizing[props.right],
  }),
  ...(props.top && {
    marginTop: sizing[props.top],
  }),
  ...(props.bottom && {
    marginBottom: sizing[props.bottom],
  }),
}));

const Stack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  '@media screen and (min-width: 600px)': {
    flexDirection: 'row',
  },
});

export const Sizing = ({ all, top, left, bottom, right }: SizingArgs) => (
  <Stack>
    <Background>
      <Button {...{ all }}>All sides</Button>
    </Background>
    <Background>
      <Button {...{ top, left, bottom, right }}>Individual sides</Button>
    </Background>
  </Stack>
);

Sizing.argTypes = {
  all: sizeOptions,
  top: sizeOptions,
  right: sizeOptions,
  bottom: sizeOptions,
  left: sizeOptions,
};

Sizing.args = {
  all: 'scale100',
  top: 'scale400',
  right: 'scale400',
  bottom: 'scale400',
  left: 'scale400',
};
