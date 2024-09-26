import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 13rem;
  width: 14rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/HotelHub.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
