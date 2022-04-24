import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LinkedInIcon from './LinkedInIcon'

export default {
  title: 'Icons/LinkedIn',
  components: LinkedInIcon,
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
} as ComponentMeta<typeof LinkedInIcon>

const Template: ComponentStory<typeof LinkedInIcon> = (args) => <LinkedInIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: 24,
}
