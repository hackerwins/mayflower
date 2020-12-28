import React from 'react';
import { StoryPage } from '../../.storybook/preview';
import Header from '@massds/mayflower-react/dist/HeaderSlim';
import SiteLogo from '@massds/mayflower-react/dist/SiteLogo';
import logo from '@massds/mayflower-assets/static/images/logo/stateseal.png';
import '@massds/mayflower-assets/scss/03-organisms/_header-slim.scss';
import '@massds/mayflower-assets/scss/01-atoms/_site-logo.scss';
// import HeaderDocs from './Header.md';

import generateTitle from '../util/generateTitle';

export default {
  title: generateTitle('Header'),
  component: Header,
  parameters: {
    docs: {
      page: () => <StoryPage  />
    }
  }
};

const Template = (args) => <Header {...args} />;

export const Slim = Template.bind({});
Slim.args = {
  siteLogo: (
    <SiteLogo
      url={{
        domain: 'https://www.mass.gov/'
      }}
      image={{
        src: logo,
        alt: 'Massachusetts state seal',
        width: 45,
        height: 45
      }}
      siteName="Mass.gov"
      title="Mass.gov homepage"
    />
  )
};
