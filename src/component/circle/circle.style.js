import styled from 'styled-components';

export const StyledCircle = styled.div`
  background-color: #94632c;
  border-radius: 50%;
  height: ${({ side }) => `${side}px`};
  width: ${({ side }) => `${side}px`};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
    background-color: #faa918;
    border-radius: 50%;
  }
`;
