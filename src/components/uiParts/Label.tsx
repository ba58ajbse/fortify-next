import { FC, ReactNode } from 'react'

type Props = {
    className?: string
    htmlFor: string
    children: ReactNode
}
const Label: FC<Props> = ({ className, htmlFor, children }) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        htmlFor={htmlFor}>
        {children}
    </label>
)

export default Label
