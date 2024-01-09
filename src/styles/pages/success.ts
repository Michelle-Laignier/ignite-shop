import { styled } from "@stitches/react";

export const SuccessContainer = styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',

  height: 656,
  justifyContent: 'center',
  margin: '0 auto',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',

    '@media (max-width: 768px)': {
      fontSize: '$xl',
    },
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    marginTop: '2rem',
    maxWidth: 560,
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '$lg',
    },
  },

  a: {
    color: '$green500',
    display: 'block',
    fontSize: '$lg',
    fontWeight: 'bold',
    marginTop: '5rem',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },

    '@media (max-width: 768px)': {
      fontSize: '$md',
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  height: 145,
  marginTop: '4rem',
  maxWidth: 130,
  padding: '0.25rem',
  width: '100%',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})