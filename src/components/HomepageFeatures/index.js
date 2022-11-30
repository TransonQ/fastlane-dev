import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'React',
    Svg: require('@site/static/img/React.svg').default,
    description: (
      <div className='text--center'>用于构建用户界面的 JavaScript 库。</div>
    ),
  },
  {
    title: 'Polaris',
    Svg: require('@site/static/img/shopify.svg').default,
    description: (
      <div className='text--center'>
        <p> Polaris 是 Shopify 后台的设计系统。 </p>
      </div>
    ),
  },
  {
    title: 'Blogs',
    Svg: require('@site/static/img/Online.svg').default,
    description: <div className='text--center'>集思广益, 无限可能。</div>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg
          className={styles.featureSvg}
          role='img'
        />
      </div>
      <div className='text--center  padding-horiz--md'>
        <h3>{title}</h3>
      </div>
      <>{description}</>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
