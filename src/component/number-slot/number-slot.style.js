import styled from 'styled-components';

export const StyledNumberSlot = styled.div`
  height: 175px;
  /* width: 55px; */
  position: relative;
  display: inline-block;
  margin-left: 165px;

  &::after {
    content: '1';
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;
