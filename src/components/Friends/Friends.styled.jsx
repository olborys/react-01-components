import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: yellow;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  backgriund-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #333;
`;
