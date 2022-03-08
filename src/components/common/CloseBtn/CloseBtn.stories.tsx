import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloseBtn from './CloseBtn';

export default {
  title: 'CloseBtn',
  component: CloseBtn,
} as ComponentMeta<typeof CloseBtn>;

export const Primary: ComponentStory<typeof CloseBtn> = () => <CloseBtn>CloseBtn</CloseBtn>;