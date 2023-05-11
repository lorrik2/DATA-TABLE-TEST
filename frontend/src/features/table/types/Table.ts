export type PersonAddress = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type TableData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: PersonAddress;
  description: string;
};
