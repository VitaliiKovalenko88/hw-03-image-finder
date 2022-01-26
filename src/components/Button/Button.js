import { StyledButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <StyledButton type="submite" onClick={onLoadMore}>
      Load More
    </StyledButton>
  );
};
