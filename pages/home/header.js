import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

const header = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const profileBtn = (e) => {
        e.preventDefault()
        router.push('profile')
    }
    const homeBtn = (e) => {
        e.preventDefault()
        router.push('home')
    }

  return (
    <div className={styles.description}>
            <a href="#" onClick={homeBtn} ><p>Home</p></a>
            <a href="#" onClick={profileBtn} ><p>Profile</p></a>
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