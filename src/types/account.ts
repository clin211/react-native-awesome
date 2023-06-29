export type AccountType = 'games' | 'platform' | 'bank cards' | 'others';
export interface AccountGroup {
  id: string;
  type: AccountType;
  name: string;
  account: string;
  password: string;
}

export interface AccountList {
  type: AccountType;
  data: AccountGroup[];
}

export type Icons = {
  [key in AccountType]: string;
};

export type SectionState = {
  [key in AccountType]: boolean;
};
