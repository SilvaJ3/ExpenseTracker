import styled from "styled-components";

type TextPropsStyle = {
  color?: string,
}

export const Text = styled.p<TextPropsStyle>`
  color: ${props => (props.color)};
`