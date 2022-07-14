import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: '标题一',
    Svg: require('@site/static/img/Code.svg').default,
    description: (
      <ol>
        <li>测试文案</li>
        <li>测试文案</li>
        <li>测试文案</li>
        <li>测试文案</li>
        <li>测试文案</li>
      </ol>
    ),
  },
  {
    title: '标题二',
    Svg: require('@site/static/img/Start.svg').default,
    description: (
      <>
        高考出分了，刚刚查完，意料之外却又情理之中的考砸了。言语无法形容我的失落。和一模二模的分数有不少的差距，
        理想的大学应该是再也没有希望了。满满的期待和信心在对完答案之后的那一刻被磨灭殆尽，
        耳朵也突然嗡的一下开始了耳鸣。真的很对不起父母的培养以及亲人的期待，也不知道自己是不是应该再来一次。心情真的很糟糕。
        如果你同情我的话，v我50让我买今天的肯德基疯狂星期四帮我舒缓一下心情谢谢
      </>
    ),
  },
  {
    title: '标题三',
    Svg: require('@site/static/img/New.svg').default,
    description: (
      <>
        你是个明白人，我明白你明白的意思，我也是明白人，明白人就应该明白我明白你明白的意思，
        只要大家都明白明白应该明白我明白你明白的意思，这样网络环境就是充满明白人希望下次见到你是在下次你这说的，
        跟说话一样我长话短说，但是说来话长。
      </>
    ),
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
      <p>{description}</p>
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
