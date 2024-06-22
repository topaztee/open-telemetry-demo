// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  background-color: ${({ theme }) => theme.colors.msYellow};
  color: white;
  display: inline-block;
  border: solid 1px ${({ theme }) => theme.colors.msYellow};
  padding: 8px 16px;
  outline: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  border-radius: 10px;
  height: 62px;
  cursor: pointer;

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.msYellow};
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.msYellow};
      border: none;
    `};
`;

export default Button;
