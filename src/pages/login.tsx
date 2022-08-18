import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Button from '@/components/uiParts/Button'
import Label from '@/components/uiParts/Label'
import { SubmitHandler, useForm } from 'react-hook-form'

type InputValueType = {
    email: string
    password: string
    rememberMe: boolean
}
const inputClassName =
    'block mt-1 p-2 w-full rounded-md shadow-sm border-gray-300 text-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

const Login = () => {
    const { register, handleSubmit } = useForm<InputValueType>()

    const onSubmit: SubmitHandler<InputValueType> = data => {
        const { email, password, rememberMe } = data
        console.log('submit', { email, password, rememberMe })
    }

    return (
        <GuestLayout>
            <AuthCard>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <input
                            id="email"
                            type="email"
                            className={inputClassName}
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <input
                            id="password"
                            type="password"
                            className={inputClassName}
                            autoComplete="current-password"
                            {...register('password', { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <Label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                {...register('rememberMe')}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </Label>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <Button type="submit" className="ml-3">
                            Login
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
