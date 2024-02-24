'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/green-gadget-white.png" alt="logo" width={120} height={50} className={classes.logo} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent












// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import { noHeaderFooterUrls } from '../../../constants'
// import { usePathname } from 'next/navigation'
// import { Header } from '../../../../payload/payload-types'
// import { Gutter } from '../../Gutter'
// import { HeaderNav } from '../Nav'
// import MobileNav from '../MobileNav'
// import classes from './index.module.scss'
// const HeaderComponent = ({ header }: { header: Header }) => {
//   const pathname = usePathname()
//   return (
//     <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
//       <Gutter className={classes.wrap}>
//         <Link href="/">
//           <img  className={classes.logo }src="/logo-greengadget.jpeg" alt="logo" />
//         </Link>
//         <HeaderNav header={header} />
//         <MobileNav header={header}/>
//       </Gutter>
//     </nav>
//   )
// }

// export default HeaderComponent
