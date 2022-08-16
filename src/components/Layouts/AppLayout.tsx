import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"></div>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
