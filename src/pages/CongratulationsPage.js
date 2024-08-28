import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1500px;
`;

const Title = styled.h1`
  color: orange;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #6C3AD0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5930a0;
  }
`;

const CongratulationsPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'path-to-your-resume.pdf'; // Replace with the actual path to the resume file
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Card>
        <Title>Congratulations!</Title>
        <Text>Your resume has been successfully created. You can download it now.</Text>
        <Button onClick={handleDownload}>Download Resume</Button>
      </Card>
    </Container>
  );
};

export default CongratulationsPage;
