import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import spacex from '../public/spacex2.jpg'
import Home from '../components/Home'

const Index: NextPage = () => {
  return (
    <div className={''}>
      <Head>
        <title>Space-X-Api</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        className='z-0'
        src={spacex}
        alt='Picture of the author'
        layout='fill'
        placeholder='blur'
        priority={true}
        loading='eager'
      />
      <div className='relative z-1  '>
        <Home />
      </div>
    </div>
  )
}

export default Index
