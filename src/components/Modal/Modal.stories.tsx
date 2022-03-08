import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from "./Modal"
import EditForm from "../EditForm";

export interface ItemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => 
  <Modal {...args}>
  </Modal>
;

export const Default = Template.bind({});

const item = {
  description: "Test",
  value: 42,
  date: "22-10-22",
  category: "Autres"
}

Default.args = {
  children: <div>
    <EditForm item={item}/>
  </div>
}
