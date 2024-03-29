'use client';

import styled from 'styled-components';
import { CascadeText } from '@/components/CascadeText';

export const Title = styled(CascadeText)`
  font-family: var(--bebas-neue-font);
  font-size: calc(12vw + 1.2rem);
  margin: 0;
  padding: 0;
  white-space: nowrap;
  --d: 1.1s;
`;
