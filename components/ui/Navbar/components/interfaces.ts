import { Dispatch, SetStateAction } from 'react';

export interface IMobileNavProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
