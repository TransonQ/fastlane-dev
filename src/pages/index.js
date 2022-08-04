import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import React from 'react'
import clsx from 'clsx'
import fastlane from '../../static/img/fastlane1.png'
import styles from './index.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className='container'>
        {/* <h1 className='hero__title'>{siteConfig.title}</h1> */}
        <img src={fastlane} alt='fastlane' height='76px' style={{ marginBottom: 20 }} />
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/intro'>
            Start with fastlane dev
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='fastlane developers'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
