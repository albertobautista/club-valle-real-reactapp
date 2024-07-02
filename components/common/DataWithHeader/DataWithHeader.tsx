import React, { FC } from 'react';

import { IDataWithHeader } from './interfaces';

const DataWithHeader: FC<IDataWithHeader> = ({ title, body }) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-lg font-bold text-cvr-green">{title}</h3>
      <p className="font-light ">{body}</p>
    </div>
  );
};

export default DataWithHeader;
