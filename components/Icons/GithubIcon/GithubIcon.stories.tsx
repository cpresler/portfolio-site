import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GithubIcon from './GithubIcon'

export default {
  title: 'Icons/Github',
  components: GithubIcon,
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
} as ComponentMeta<typeof GithubIcon>

const Template: ComponentStory<typeof GithubIcon> = (args) => <GithubIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: 24,
}
