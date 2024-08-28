import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: orange;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
       Resume Builder
    </HeaderContainer>
  );
}

export default Header;
