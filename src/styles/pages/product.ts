import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  alignItems: 'stretch',
  display: 'grid',
  gap: '4rem',
  gridTemplateColumns: '1fr 1fr',

  margin: '0 auto',
  maxWidth: 1180,
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  
  height: 656,
  maxWidth: 576,
  width: '100%',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    color:'$green300',
    display: 'block',
    fontSize: '$2xl',
    marginTop: '1rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: '2.5rem',
  },

  button: {
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: 'auto', // já joga ele lá pra baixo
    padding: '1.25rem',
    transition: '0.4s',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },
})