// Education.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  padding: 20px;
  background-color: #f5f5f5;
  flex: 1;
`;

const SidebarContainer = styled.div`
  width: 300px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-right: 20px;
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
  padding: 40px;
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
  width: calc(50% - 10px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-left: 5px;
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

const Education = () => {
  const navigate = useNavigate();
  const handleBuildResumeClick = () => {
    navigate('/experience');
  };  // Define navigate

  return (
    <Container>
      <HeaderContainer>
        <div> Resume Builder</div>
        <Link href="#">Change Template</Link>
      </HeaderContainer>
      <MainContainer>
        <SidebarContainer>
          <NavItem onClick={() => navigate('/personal-info')}>Personal Information</NavItem>
          <NavItem active onClick={() => navigate('/education')}>Education</NavItem>
          <NavItem onClick={() => navigate('/experience')}>Experience</NavItem>
          <NavItem onClick={() => navigate('/contact-info')}>Contact Information</NavItem>
          <NavItem onClick={() => navigate('/awards')}>Award/Certification</NavItem>
        </SidebarContainer>
        <FormContainer>
          <FormHeader>
            <Title>Experience</Title>
            <AddInfo href="#">Add Info</AddInfo>
          </FormHeader>
          <FormField>
            <Label>School Name</Label>
            <Input type="text" placeholder="School Name" />
          </FormField>
          <FormField>
            <Label>Degree</Label>
            <Input type="text" placeholder="Degree" />
          </FormField>
          <FormField>
            <Label>Field of Study</Label>
            <Input type="text" placeholder="Field of Study" />
          </FormField>
          <FormField>
            <Label>Start Year</Label>
            <Input type="text" placeholder="Start Year" />
          </FormField>
          <FormField>
            <Label>End Year</Label>
            <Input type="text" placeholder="End Year" />
          </FormField>
          <Button>Save</Button>
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default Education;
