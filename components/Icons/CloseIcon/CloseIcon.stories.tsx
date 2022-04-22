import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CloseIcon from './CloseIcon'

export default {
  title: 'Icons/Close',
  components: CloseIcon,
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
} as ComponentMeta<typeof CloseIcon>

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: 24,
}
