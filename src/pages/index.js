import React, {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // Redirect homepage to documentation with baseUrl
  return <Redirect to={`${siteConfig.baseUrl}docs/getting-started/introduction`} />;
}