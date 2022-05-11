import React from 'react';

import styled from '@emotion/styled';

type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  const MainStyled = styled.main({
    backgroundColor: 'sky',
    padding: '1rem',
    color: 'black',
    width: '100%',
    height: '100%'
  });

  return <MainStyled>{children}</MainStyled>;
};
