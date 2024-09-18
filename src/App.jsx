import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">HotelHub</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("CheckIn")}>Check In</Button>
              <Button
                onClick={() => alert("CheckOut")}
                size="small"
                variation="secondary"
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h2">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
