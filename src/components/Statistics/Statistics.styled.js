import styled from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export const StatItem = styled.li`
  border-radius: 10px;
  background: #82f4e457;
  width: 100px;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const StatItemTotal = styled.li`
  border-radius: 10px;
  background: #82f4e457;
  width: 250px;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
`;
