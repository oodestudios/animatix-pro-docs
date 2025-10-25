import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '🎬 Visual Animation System',
    Svg: require('@site/static/img/icons/animation-modules.svg').default,
    description: (
      <>
        Create stunning UI, 3D, and cinematic animations with our powerful visual node-based system. 
        No coding required for complex animation sequences.
      </>
    ),
  },
  {
    title: '⚡ Professional Performance',
    Svg: require('@site/static/img/icons/core-concepts.svg').default,
    description: (
      <>
        Built for professional developers with enterprise-grade performance, memory management, 
        and mobile optimization. Scale from prototypes to production.
      </>
    ),
  },
  {
    title: '🔧 Advanced Integration',
    Svg: require('@site/static/img/icons/api-reference.svg').default,
    description: (
      <>
        Seamlessly integrate with Unity's systems, custom scripts, and third-party assets. 
        Full API access for runtime control and customization.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
