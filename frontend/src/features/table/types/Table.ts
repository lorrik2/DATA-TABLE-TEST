export type PersonAdress = {
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
  address: PersonAdress;
  isActive: string;
};
