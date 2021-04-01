import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BirdImage = styled.img`
  width: 150px;
  height: 125px;
  border-radius: .25rem;
`;

export const ListGroup = styled.ul`
  width: 40%;
  margin: 0;
`;

export const ListGroupItem = styled.li`
  display: block;
  border-bottom: 1px solid rgba(0,0,0,.125);
`;

export const BirdDescription = styled.span`
  width: 100%;
`;