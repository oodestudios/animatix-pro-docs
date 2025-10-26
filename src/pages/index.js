import React, {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  // Redirect homepage to documentation
  return <Redirect to="/docs/getting-started/introduction" />;
}