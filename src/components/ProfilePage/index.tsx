import React from 'react';

import Feed from '../Feed';

import { Container, 
         Banner, 
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton
        } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined={false}>Editar perfil</EditButton>

            <h1>Lázaro Sanson</h1>
            <h2>@lazarosan</h2>

            <p>
                Developer at VIVO
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em dezembro de 1993
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>100</strong>
                </span>
                <span><strong>100 </strong>seguidores</span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  );
}

export default ProfilePage;