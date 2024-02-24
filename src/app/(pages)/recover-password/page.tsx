import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'
import Link from 'next/link'
import Image from 'next/image'
import classes from './index.module.scss'
import { RenderParams } from '../../_components/RenderParams'

export default async function RecoverPassword() {
  return (
    <section className={classes.RecoverPassword}>
    <div className={classes.heroImg}>
      
    </div>
    <div className={classes.formWrapper}>
      <div className={classes.formContainer}>
        <RenderParams className={classes.params}/>
        <Link href="/login" className={classes.backLink}>
          <Image src="/assets/icons/arrow-left.svg" alt="left-arrow" width={24} height={24}/>
          <p>Back</p>
        </Link>
        <div className={classes.formTitle}>
          <h3>Forgot Password</h3>
        </div>
        <p>Please login here</p>
        <RecoverPasswordForm />
       
      </div>
    </div>
  </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}