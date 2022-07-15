import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: '组件 ( UI-mix )',
    Svg: require('@site/static/img/Code.svg').default,
    description: <div className='text--center'> 基于 shopify-polaris 框架, ant 扩充其易用性. </div>,
  },
  {
    title: '复用逻辑 ( Hooks )',
    Svg: require('@site/static/img/Start.svg').default,
    description: (
      <div className='text--center'>
        <p> 提取常用逻辑实现复用 </p>
      </div>
    ),
  },
  {
    title: '博客',
    Svg: require('@site/static/img/New.svg').default,
    description: <div className='text--center'>技巧分享, 汇集 developer idea</div>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
