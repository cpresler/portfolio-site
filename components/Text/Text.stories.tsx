import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'

export default {
  title: 'Text',
  component: Text,
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>]
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Body = Template.bind({})
Body.args = {
  children: 'Body text',
}

export const H1 = Template.bind({})
H1.args = {
  children: 'Title Text',
  tag: 'h1',
}

export const H2 = Template.bind({})
H2.args = {
  children: 'Subtitle Text',
  tag: 'h2',
}

export const H3 = Template.bind({})
H3.args = {
  children: 'H3 Text',
  tag: 'h3',
}

export const H4 = Template.bind({})
H4.args = {
  children: 'H4 Text',
  tag: 'h4',
}

export const H5 = Template.bind({})
H5.args = {
  children: 'H5 Text',
  tag: 'h5',
}

export const H6 = Template.bind({})
H6.args = {
  children: 'H6 Text',
  tag: 'h5',
}
