import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponivel - 1</Role>
      <UserRow nickname="Queiroz Santana" />

      <Role> Offline - 18</Role>
      <UserRow nickname="Tembo Alice" isBot />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
      <UserRow nickname="Queiroz Santana" />
    </Container>
  );
};

export default UserList;
