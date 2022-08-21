import axios from '@/lib/axios'
import { InputValueType as RegisterValue } from '@/pages/register'
import { useRouter } from 'next/router'

const useAuth = () => {
    const router = useRouter()

    const csrf = () =>
        axios
            .get('/sanctum/csrf-cookie')
            .then()
            .catch(err => console.log(err))

    const register = async ({
        name,
        email,
        password,
        password_confirmation,
    }: RegisterValue) => {
        await csrf()
        await axios
            .post('/api/register', {
                name,
                email,
                password,
                password_confirmation,
            })
            .then(res => {
                if (res?.status === 201) {
                    router.push('/dashboard')
                } else {
                    throw new Error('register failed.')
                }
            })
            .catch(err => console.log(err))
    }

    return { register }
}

export default useAuth
