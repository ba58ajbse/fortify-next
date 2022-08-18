import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Button from '@/components/uiParts/Button'
import Label from '@/components/uiParts/Label'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

type InputValueType = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

const inputClassName =
    'block mt-1 w-full p-2 text-slate-200 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

const Register = () => {
    const { register, handleSubmit } = useForm<InputValueType>()
    const onSubmit: SubmitHandler<InputValueType> = data => {
        const { name, email, password, passwordConfirmation } = data
        console.log('submit: ', { name, email, password, passwordConfirmation })
    }
    return (
        <GuestLayout>
            <AuthCard>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <input
                            id="name"
                            type="text"
                            autoFocus
                            className={inputClassName}
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <input
                            id="email"
                            type="email"
                            className={inputClassName}
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <input
                            id="password"
                            type="password"
                            className={inputClassName}
                            autoComplete="new-password"
                            {...register('password', { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>
                        <input
                            id="passwordConfirmation"
                            type="password"
                            className={inputClassName}
                            {...register('passwordConfirmation', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </a>
                        </Link>
                        <Button type="submit" className="ml-4">
                            Register
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
