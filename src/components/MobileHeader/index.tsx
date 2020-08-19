import React from 'react';

import { 
  Container,
  ProfileCircle,
  SearchInput,
  MessageIcon,
} from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars3.githubusercontent.com/u/62676057"/>
      <SearchInput placeholder='Pesquisar' />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;