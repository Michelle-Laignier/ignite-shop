import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: "$green500",
  border: 0,
  borderRadius: "5px",
  padding: "4px 8px",

  span: {
    fontWeight: "bold"
  },

  "&:hover": {
    filter: "brightness(0.8)"
  },
})

export default function Home() {
  return(
    <Button>
      <span>Teste</span>
      Hello World!
    </Button>
  )
}