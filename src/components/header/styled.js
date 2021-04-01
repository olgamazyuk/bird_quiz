import styled from "styled-components";

export const Header = styled.div`
  margin-top: 1rem;
  flex-direction: column;
`;

export const TopPanel = styled.div`
  margin: .5rem;
  display: flex;
  justify-content: space-between;
`;

export const Score = styled.span`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600
`;

export const Pagination = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
`;

export const PageItem = styled.li`
  flex: auto;
  text-align: center;
  padding: .5rem .75rem;
`;