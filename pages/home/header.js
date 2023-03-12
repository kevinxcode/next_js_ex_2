import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

const header = () => {
  return (
    <div className={styles.description}>
            <a href="#"><p>Home</p></a>
            <a href="#"><p>Profile</p></a>
            <a href="#"><p>Login</p></a>
        <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
        </div>
    </div>
  )
}

export default header