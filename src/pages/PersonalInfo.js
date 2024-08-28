import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
`;

const HeaderContainer = styled.div`
  background-color: orange;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap; /* Allow items to wrap to next line on smaller screens */
`;

const SidebarContainer = styled.div`
  width: 100%; /* Full width on small screens */
  max-width: 300px; /* Limit width on larger screens */
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px; /* Add margin to bottom */
`;

const NavItem = styled.div`
  padding: 10px 0;
  font-size: 16px;
  color: ${props => (props.active ? '#6C3AD0' : '#333')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    color: #6C3AD0;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const AddInfo = styled.a`
  color: #6C3AD0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FormField = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap; /* Allow fields to wrap on smaller screens */
`;

const Label = styled.label`
  flex: 1; /* Take full width */
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  flex: 1; /* Take full width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px; /* Add margin bottom */
`;

const FullWidthInput = styled.input`
  width: 100%; /* Take full width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px; /* Add margin bottom */
`;

const Button = styled.button`
  background-color: #6C3AD0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #5930a0;
  }
`;

const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleBuildResumeClick = () => {
    navigate('/education');
  };

  return (
    <Container>
      <HeaderContainer>
        <div> Resume Builder</div>
        <Link href="Education.js">Change Template</Link>
      </HeaderContainer>
      <MainContainer>
        <SidebarContainer>
          <NavItem active onClick={() => navigate('/personal-info')}>Personal Information</NavItem>
          <NavItem onClick={() => navigate('/education')}>Education</NavItem>
          <NavItem onClick={() => navigate('/experience')}>Experience</NavItem>
          <NavItem onClick={() => navigate('/contact-info')}>Contact Information</NavItem>
          <NavItem onClick={() => navigate('/awards')}>Award/Certification</NavItem>
        </SidebarContainer>
        <FormContainer>
          <FormHeader>
            <Title>Personal Information</Title>
            <AddInfo href="#">Add Info</AddInfo>
          </FormHeader>
          <FormField>
            <Label>First Name</Label>
            <Input type="text" placeholder="First Name" />
            <Label>Last Name</Label>
            <Input type="text" placeholder="Last Name" />
          </FormField>
          <FormField>
            <Label>Email</Label>
            <FullWidthInput type="email" placeholder="Email" />
          </FormField>
          <FormField>
            <Label>Phone Number</Label>
            <FullWidthInput type="text" placeholder="Phone Number" />
          </FormField>
          <FormField>
            <Label>Address</Label>
            <FullWidthInput type="text" placeholder="Address" />
          </FormField>
          <FormField>
            <Label>City</Label>
            <Input type="text" placeholder="City" />
            <Label>State</Label>
            <Input type="text" placeholder="State" />
          </FormField>
          <FormField>
            <Label>Country</Label>
            <FullWidthInput type="text" placeholder="Country" />
          </FormField>
          <Button>Save</Button>
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default PersonalInfo;
