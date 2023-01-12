import React, { FC } from 'react';
import { IContainerProps } from './interfaces';

export const Container: FC<IContainerProps> = ({ children }) => {
  return <div className="container px-5 m-auto mb-8 md:mb-20">{children}</div>;
};
