import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LogoIcon from './LogoIcon'

export default {
  title: 'Icons/Github',
  components: LogoIcon,
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
} as ComponentMeta<typeof LogoIcon>

const Template: ComponentStory<typeof LogoIcon> = (args) => <LogoIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: 24,
}
