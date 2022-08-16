import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children: ReactNode
}

const GuestLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
