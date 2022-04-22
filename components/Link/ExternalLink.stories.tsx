import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ExternalLink } from './Link'

export default {
  title: 'Links/External Link',
  component: ExternalLink,
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>]
} as ComponentMeta<typeof ExternalLink>

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args} />

export const DefaultLink = Template.bind({})
DefaultLink.args = {
  href: '#',
  children: 'Default external link'
}