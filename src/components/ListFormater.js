import React from "react";
import styled from "styled-components";

const FormatLink = ({ title, href, subtitle }) => (
  <Wrapper target="_blank" href={href}>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </Wrapper>
);

const LinkList = ({ children, isList = false }) => (
  <nav data-is-list={isList}>
    <ul>
      {React.Children.map(children, (child, idx) => (
        <li key={idx}>{child}</li>
      ))}
    </ul>
  </nav>
);

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  transition: 0.25s;
  will-change: transform;
  contain: content;
  color: white;
  overflow: hidden;
`;

const Subtitle = styled.span`
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.05em;
  font-weight: 400;
  opacity: 0.5;
`;

const Title = styled.strong`
  font-size: 3em;
  font-weight: 900;
  line-height: 0.9;
  margin-left: -0.05em;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  :after {
    /* content: "➜"; */
    font-size: 0.8em;
    margin-left: 1em;
    will-change: transform;
    transform: translateX(0);
    transition: 0.25s;
  }
  :hover {
    box-shadow: inset -1em 0 1em 0 red, 0 0.05em 0.5em rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    background: blue;
    transform: scale(1.05);
    z-index: 10;
    transform: translateX(0.125em);
  }
`;

export default LinkList;
export { FormatLink };
