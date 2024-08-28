import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: orange;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? 'white' : '#6C3AD0')};
  color: ${props => (props.primary ? '#6C3AD0' : 'white')};
  padding: 10px 20px;
  border: ${props => (props.primary ? '1px solid #6C3AD0' : 'none')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: ${props => (props.primary ? '#f0f0f0' : '#5930a0')};
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #6C3AD0;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: ${props => (props.selected ? '2px solid #6C3AD0' : 'none')};

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.footer`
  background-color: #6C3AD0;
  color: white;
  padding: 10px;
  text-align: center;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  position: relative;
`;

const FormCloseButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: #999;
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  color: #6C3AD0;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  color: #333;
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
  border-radius: 5px;
`;

const FormError = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const FormButton = styled.button`
  background-color: #6C3AD0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #5930a0;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const FormFooterText = styled.span`
  font-size: 14px;
  color: #333;
`;

const FormFooterLink = styled.button`
  background: none;
  border: none;
  color: #6C3AD0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const HomePage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const navigate = useNavigate();

  const openSignupForm = () => {
    setShowSignup(true);
  };

  const closeSignupForm = () => {
    setShowSignup(false);
    resetForm();
  };

  const openLoginForm = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
    resetLoginForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  const resetLoginForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setLoginEmailError('');
    setLoginPasswordError('');
  };

  const validateEmail = (inputEmail) => {
    if (!inputEmail) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputEmail)) {
      return 'Email is invalid';
    }
    return '';
  };

  const validatePassword = (inputPassword) => {
    if (!inputPassword) {
      return 'Password is required';
    } else if (inputPassword.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const validateConfirmPassword = (inputConfirmPassword) => {
    if (!inputConfirmPassword) {
      return 'Confirm Password is required';
    } else if (inputConfirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setEmailError(emailError);
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);

    if (!emailError && !passwordError && !confirmPasswordError) {
      alert('Form submitted successfully!');
      closeSignupForm();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = validateEmail(loginEmail);
    const passwordError = validatePassword(loginPassword);

    setLoginEmailError(emailError);
    setLoginPasswordError(passwordError);

    if (!emailError && !passwordError) {
      alert('Logged in successfully!');
      closeLoginForm();
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password link sent to your email.');
  };

  const handleTemplateSelect = template => {
    setSelectedTemplate(template);
    // You can navigate to the corresponding page for building resume here
    console.log(`Selected template: ${template}`);
  };

  const handleBuildResumeClick = () => {
    navigate('/personal-info'); // Navigate to the personal-info route
  };

  return (
    <Container>
      <Header>
        <div><h1>Resume Builder</h1></div>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Build Resume</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">About</NavLink>
        </NavLinks>
        <AuthButtons>
          <Button onClick={openLoginForm}>Login</Button>
          <Button primary onClick={openSignupForm}>Sign Up</Button>
        </AuthButtons>
      </Header>
      <MainContent>
        <Title>Welcome to Resume Builder</Title>
        <Text>Build your resume with our easy-to-use online resume builder. Choose a template and start filling in your details.</Text>
        <ImagesContainer>
          <Image src="data:image/jpeg;base64,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" alt="Template 1" selected={selectedTemplate === 'template1'} onClick={() => handleTemplateSelect('template1')} />
          <Image src="data:image/jpeg;base64,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" alt="Template 2" selected={selectedTemplate === 'template2'} onClick={() => handleTemplateSelect('template2')} />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMsqHvTWN_80RLMB-_YTSfG-ZlBmmxS6flQ&s" alt="Template 3" selected={selectedTemplate === 'template3'} onClick={() => handleTemplateSelect('template3')} />
        </ImagesContainer>
      </MainContent>
      <Button onClick={handleBuildResumeClick}><h1>Build Resume</h1></Button> {/* Build Resume button */}
      
      {showSignup &&
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormCloseButton onClick={closeSignupForm}>X</FormCloseButton>
            <FormTitle>Sign Up</FormTitle>
            <FormField>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <FormError>{emailError}</FormError>}
            </FormField>
            <FormField>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {passwordError && <FormError>{passwordError}</FormError>}
            </FormField>
            <FormField>
              <FormLabel>Confirm Password</FormLabel>
              <FormInput type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {confirmPasswordError && <FormError>{confirmPasswordError}</FormError>}
            </FormField>
            <FormButton type="submit">Sign Up</FormButton>
            <FormFooter>
              <FormFooterText>Already have an account? <FormFooterLink onClick={openLoginForm}>Log In</FormFooterLink></FormFooterText>
            </FormFooter>
          </Form>
        </FormContainer>
      }
      {showLoginForm &&
        <FormContainer>
          <Form onSubmit={handleLogin}>
            <FormCloseButton onClick={closeLoginForm}>X</FormCloseButton>
            <FormTitle>Login</FormTitle>
            <FormField>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              {loginEmailError && <FormError>{loginEmailError}</FormError>}
            </FormField>
            <FormField>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              {loginPasswordError && <FormError>{loginPasswordError}</FormError>}
            </FormField>
            <FormButton type="submit">Log In</FormButton>
            <FormFooter>
              <FormFooterText>Forgot your password? <FormFooterLink onClick={handleForgotPassword}>Reset here</FormFooterLink></FormFooterText>
              <FormFooterText>Don't have an account? <FormFooterLink onClick={openSignupForm}>Sign Up</FormFooterLink></FormFooterText>
            </FormFooter>
          </Form>
        </FormContainer>
      }
      
    </Container>
  );
};

export default HomePage;
