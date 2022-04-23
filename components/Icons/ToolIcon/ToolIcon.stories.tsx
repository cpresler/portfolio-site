import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ToolIcon from './ToolIcon'

export default {
  title: 'Icons/Tool',
  components: ToolIcon,
  decorators: [(story) => <div style={{ 
    margin: "3rem",
    width: "4rem",
    height: "4rem",
    background: "white",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".25rem",
  }}>{story()}</div>]
} as ComponentMeta<typeof ToolIcon>

const Template: ComponentStory<typeof ToolIcon> = (args) => <ToolIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: 24,
}
