import { useEffect, useState } from 'react';

export const useValidation = (value: any, validations: any): any => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isString, setIsString] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isEmailError, setIsEmailError] = useState(true);
  const [inpValid, setInpValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isString':
          typeof value === 'string' ? setIsString(true) : setIsString(false);
          break;
        case 'isEmail':
          const res =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          res.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || isString || isEmailError) {
      setInpValid(false);
    } else {
      setInpValid(true);
    }
  }, [isEmpty, minLengthError, isEmailError]);

  return { isEmpty, minLengthError, isString, isEmailError, inpValid };
};

export const useInput = (initialValue: string | number, validations: any): any => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const validate = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    setIsDirty(true);
  };

  return { value, isDirty, onChange, onBlur, ...validate };
};
