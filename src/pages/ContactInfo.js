import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
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
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
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

const ContactInfo = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Logic to save contact information goes here

    // Example: navigate to the next page (e.g., '/education') after saving
    navigate('/education');
  };

  return (
    <Container>
      <HeaderContainer>
        <div>Resume Builder</div>
        <Link href="#">Change Template</Link>
      </HeaderContainer>
      <MainContainer>
        <SidebarContainer>
          <NavItem>Personal Information</NavItem>
          <NavItem>Education</NavItem>
          <NavItem>Experience</NavItem>
          <NavItem active>Contact Information</NavItem>
          <NavItem>Award/Certification</NavItem>
        </SidebarContainer>
        <FormContainer>
          <FormHeader>
            <Title>Contact Information</Title>
            <AddInfo href="#">Add Info</AddInfo>
          </FormHeader>
          <FormField>
            <Label>Email address</Label>
            <Input type="text" placeholder="Email address" />
            <Label>Phone number</Label>
            <Input type="text" placeholder="Phone number" />
          </FormField>
          <FormField>
            <Label>LinkedIn Profile link</Label>
            <Input type="text" placeholder="LinkedIn Profile link" />
            <Label>Twitter Profile link</Label>
            <Input type="text" placeholder="Twitter Profile link" />
          </FormField>
          <FormField>
            <Label>Instagram Profile link</Label>
            <Input type="text" placeholder="Instagram Profile link" />
            <Label>Portfolio link</Label>
            <Input type="text" placeholder="Portfolio link" />
          </FormField>
          <FormField>
            <Label>Github profile link</Label>
            <Input type="text" placeholder="Github profile link" />
          </FormField>
          <Button onClick={handleSave}>Save</Button>
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default ContactInfo;
