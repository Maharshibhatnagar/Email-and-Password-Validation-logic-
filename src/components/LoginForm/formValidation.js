import { validate } from 'email-validator';


// Email validation


export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  if (!validate(email)) {
    return 'Invalid email format';
  }
  return '';
};


  
  //Password validation logic

  export const validatePassword = (password) => {
    if (!password || password.trim() === '') {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password should be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      return 'Password should contain both uppercase and lowercase letters';
    }
    if (!/\d/.test(password)) {
      return 'Password should contain at least one numerical digit';
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return 'Password should contain at least one special character';
    }
    return '';
  };
  