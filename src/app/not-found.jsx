import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist</p>
        <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFound