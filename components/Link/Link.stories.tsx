import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from './Link'

export default {
  title: 'Links/Link',
  component: Link,
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>]
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const DefaultLink = Template.bind({})
DefaultLink.args = {
  href: '#',
  children: 'default link'
}