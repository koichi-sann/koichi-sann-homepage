import dynamic from 'next/dynamic'
import React from 'react'

// @ts-ignore
const NoSsr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
