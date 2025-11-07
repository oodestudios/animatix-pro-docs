import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  // Redirect homepage to documentation
  return <Redirect to="docs/welcome/what-is-animatix-pro" />;
}
