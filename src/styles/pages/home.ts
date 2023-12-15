import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  // espaçamento interfere no keen slider, use a prop spacing no index.tsx
  //gap: '3rem',
  marginLeft: 'auto',

  minHeight: 656,
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

  // pra não "grudar" no fundo
  marginBottom: 120,
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor: 'pointer',

  //espaçamento interfere no keen slider, use a prop spacing no index.tsx
  //padding: '0.25rem',

  position: 'relative',
  overflow: 'hidden',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,

    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(32, 32, 36, 0.90)',
    padding: '2rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.4s ease-in-out',

    strong: {
      color: '$gray100',
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});