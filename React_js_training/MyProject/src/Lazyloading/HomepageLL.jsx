import React, { lazy, Suspense } from 'react'
// import HeaderpageLL from './HeaderpageLL'
// import BannerpageL from './BannerpageL'
// import SectionpageLL from './SectionpageLL'

const HeaderpageLL = lazy(()=>import("./HeaderpageLL"))
const BannerpageL = lazy(()=>import("./BannerpageL"))
const SectionpageLL = lazy(()=>import("./SectionpageLL"))

export default function HomepageLL() {
  return (
    <div>
        <h1>Home page </h1>
        <Suspense fallback={<h3>please wait .... its loading</h3>}>
            <HeaderpageLL/>
        </Suspense>
        <Suspense fallback={<h3>please wait... its loading..</h3>}>
            <BannerpageL/>
            <SectionpageLL/>
        </Suspense>
    </div>
  )
}
