import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [(story) => <div style={{ margin: "3rem", maxWidth: "20rem" }}>{story()}</div>]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
}

export const Standalone = Template.bind({})
Standalone.args = {
  children: 'Standalone',
  standalone: true,
}

export const Icon = Template.bind({})
Icon.args = {
  children: <span><span>To Do</span> Icon</span>,
}

export const Grayed = Template.bind({})
Grayed.args = {
  children: 'Grayed',
  grayedOut: true,
}

export const Submit = Template.bind({})
Submit.args = {
  children: 'Submit',
  type: 'submit',
  primary: true,
}

export const Link = Template.bind({})
Link.args = {
  children: 'Internal Link',
  linkType: 'internal',
  href: '#internal-link'
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  children: 'External Link',
  linkType: 'external',
  href: 'https://etherscan.io/'
}

