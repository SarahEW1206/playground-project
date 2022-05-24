import { useRef, useState } from 'react';

import styled from '@emotion/styled';

const DialogStyled = styled.dialog`
  border-radius: 8px;
  border: 1px solid #888;

  ::backdrop {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const DialogContent = styled.div({
  padding: '1.5rem',
  display: 'flex',
  width: '20rem',
  height: '20vh',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>(null);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          ref?.current?.showModal();
        }}>
        Open Dialog
      </button>
      <DialogStyled ref={ref} open={isOpen}>
        <DialogContent>
          Hello
          <input />
          <button
            onClick={() => {
              setIsOpen(false);
              ref?.current?.close();
            }}>
            Close Dialog
          </button>
        </DialogContent>
      </DialogStyled>
    </>
  );
};
