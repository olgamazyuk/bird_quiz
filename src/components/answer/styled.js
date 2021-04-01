import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BirdsListGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 35%;
  height: fit-content;
`;

export const BirdsList = styled.ul`
  display: block;
`;

export const BirdDetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 60%;
`;
