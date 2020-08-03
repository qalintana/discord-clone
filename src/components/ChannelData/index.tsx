import React, { useRef, useEffect } from 'react';

import { Container, Messages, Input, InputIcon, InputWrapper } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  });

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Queiroz Santana"
            content="Hoje é meu aniversário"
            date="21/06/2020"
          ></ChannelMessage>
        ))}
        <ChannelMessage
          author="Tembo Santana"
          content={
            <>
              <Mention>@Queiroz Santana</Mention> Trabalha duro, mas em silencio
            </>
          }
          hasMention
          isBot
          date="21/06/2020"
        ></ChannelMessage>
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
