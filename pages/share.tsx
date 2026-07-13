import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Share() {
  const [data, setData] = React.useState<{ inputs: Record<string, string>; result: string } | null>(null)
  React.useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q')
    if (q) {
      try {
        setData(JSON.parse(decodeURIComponent(atob(q))))
      } catch {
        setData(null)
      }
    }
  }, [])
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <Head><title>Shared result</title></Head>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-semibold mb-4">Shared result</h1>
        {!data && <p className="text-gray-500">No shared data found.</p>}
        {data && (
          <pre className="whitespace-pre-wrap text-gray-700 text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">{data.result}</pre>
        )}
        <div className="mt-4"><Link href="/" className="text-brand hover:opacity-80">← Back</Link></div>
      </div>
    </div>
  )
}
