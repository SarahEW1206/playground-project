import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
};

// Why not use Header: React.FC<HeaderProps>, you ask?
// https://stackoverflow.com/questions/59348989/react-prop-types-eslint-error-in-typescript-react-component
export const Header = ({ title }: HeaderProps) => {
  const HeaderStyled = styled.header({
    top: 0,
    padding: 10,
    backgroundColor: 'orchid',
    color: 'black',
    width: '100%'
  });

  return <HeaderStyled>{title}</HeaderStyled>;
};

Header.defaultProps = { title: 'Default Title2' }; // if we declare default this way, TS won't complain if you omit when implementing the component (vs defautl in props destruct)
