import validator from 'validator';

const checkEmail = (value) => {
  if (!validator.isEmail(value, { ignore_whitespace: false })) return 'Enter valid Email';
  else return false;
};

const checkEmpty = (value) => {
  if (validator.isEmpty(value, { ignore_whitespace: false })) return 'Required';
  else return false;
};

const checkOnlyNumber = (value) => {
  if (validator.isEmpty(value, { ignore_whitespace: false })) return 'Required';
  if (!validator.isNumeric(value)) return 'Only Number';
  else return false;
};

const checkOnlyChar = (value) => {
  if (validator.isEmpty(value, { ignore_whitespace: false })) return 'Required';
  if (!value.match(/^[a-zA-Z\s-, ]+$/)) return 'Only character';
  else return false;
};

export default { checkEmail, checkEmpty, checkOnlyNumber, checkOnlyChar };
