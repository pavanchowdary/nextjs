import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Read <Link href="/posts/first-post"><a>this page updated!</a></Link>
    </div>
  );
}
