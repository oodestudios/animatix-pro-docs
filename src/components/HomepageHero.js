import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHero.module.css';

export default function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="hero__title">
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle">
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/introduction">
                Get Started →
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/api-reference/overview">
                API Reference
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.heroImage}>
              <img 
                src="/img/animatix-pro-preview.png" 
                alt="Animatix Pro Interface"
                className={styles.previewImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
