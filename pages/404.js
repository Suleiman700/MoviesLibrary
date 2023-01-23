import Head from 'next/head'
import Link from 'next/link'
import {env} from "../next.config";

export default function Custom404() {
  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <Head>
        <title>Page Not Found | {env.APP_NAME}</title>
      </Head>
      <h1 className='my-20 text-xl md:text-4xl'>Page Not Found</h1>
      <Link href='/' passHref>
        <button className='rounded-md bg-app-greyish-blue p-2 px-4 hover:bg-app-pure-white hover:text-app-dark-blue'>
          Go Home
        </button>
      </Link>
    </div>
  )
}
