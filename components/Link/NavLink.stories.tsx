import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavLink } from './Link'

export default {
  title: 'Links/NavLink',
  component: NavLink,
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>]
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

// configuring Next Router for storybook with storybook-addon-next-router https://storybook.js.org/addons/storybook-addon-next-router
Template.story = {
  parameters: {
    nextRouter: {
      path: "/",
      asPath: "/",
      query: {},
    }
  }
}

export const DefaultNavLink = Template.bind({})
DefaultNavLink.args = {
  href: '#',
  children: 'Default nav link',
}

export const ActiveNavLink = Template.bind({})
ActiveNavLink.args = {
  href: '#',
  children: 'Active nav link',
  exact: true,
}