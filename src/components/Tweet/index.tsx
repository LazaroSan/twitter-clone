import React from 'react';

import { Container,
         Retweeted,
         VivoIcon,
         Body,
         Avatar,
         Content,
         Header,
         Description,
         ImageContent,
         Icons,
         Status,
         CommentIcon,
         RetweetIcon,
         LikeIcon,
         Dot  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <VivoIcon />
            Você retuitou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>Vivo</strong>
                    <span>@vivo</span>
                    <Dot />
                    <time>11 de novembro</time>
                </Header>

                <Description>tem pra tudo</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        20
                    </Status>
                    <Status>
                        <RetweetIcon />
                        20
                    </Status>
                    <Status>
                        <LikeIcon />
                        200
                    </Status>
                </Icons>

            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;