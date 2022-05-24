import { useState } from 'react';

import { desserts } from './desserts';

export type Dessert = {
  flavor: string;
  id: number;
  topping: string;
  uid: string;
  variety: string;
};

export const useDesserts = () => {
  const [data, setData] = useState<Dessert>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  desserts
    .then((response) => {
      setData(response);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });

  return { data, isLoading, error };
};
