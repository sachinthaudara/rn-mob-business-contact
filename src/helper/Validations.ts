const isEmpty = (value: string) => {
  if (value) {
    if (value.trim() === '') {
      return true;
    }
    return false;
  }
  return true;
};

const isValidText = (value: string) => {
  if (isEmpty(value)) {
    return false;
  }

  const pattern = /^[a-zA-Z ]+$/;
  return pattern.test(value);
};

const isValidMobileNumber = (value: string) => {
  if (isEmpty(value)) {
    return false;
  }

  const pattern = /^[0-9+]+$/;
  return pattern.test(value);
};

const isValidEmail = (value: string) => {
  if (isEmpty(value)) {
    return false;
  }

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(value).toLowerCase());
};

const isValidUrl = (value: string) => {
  const pattern =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

  return pattern.test(String(value));
};

export { isEmpty, isValidText, isValidMobileNumber, isValidEmail, isValidUrl };
