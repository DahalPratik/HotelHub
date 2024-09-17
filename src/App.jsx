import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: red;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: aqua;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>HotelHub</H1>
        <Button onClick={() => alert("CheckIn")}>Check In</Button>
        <Button onClick={() => alert("CheckOut")}>Check Out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
