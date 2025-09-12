import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🎨 Visual Graph Editor',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Create complex animations using our intuitive node-based editor. 
        No coding required, but full programmatic control when you need it.
      </>
    ),
  },
  {
    title: '⚡ High Performance',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Optimized for mobile and desktop with efficient animation execution. 
        Built with performance in mind for smooth 60fps animations.
      </>
    ),
  },
  {
    title: '🔧 Programmatic Control',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Full API access for advanced users who need script control. 
        Integrate seamlessly with your existing codebase.
      </>
    ),
  },
  {
    title: '🎯 Production Ready',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Used by professional game developers worldwide. 
        Battle-tested in real projects and constantly updated.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
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
