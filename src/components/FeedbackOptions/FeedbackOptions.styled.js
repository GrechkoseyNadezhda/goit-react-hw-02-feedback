import styled from 'styled-components';

export const Wrap = styled.ul`
  list-style: none;

  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export const Btn = styled.button`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  border-radius: 15px;
  border: none;
  background: #82f4e4cc;
  width: 100px;
  padding: 10px 0;
  font-size: 22px;
`;
