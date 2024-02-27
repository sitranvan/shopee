import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import MyInput from '~/components/MyInput'

import { AuthSchema, authSchema } from '~/utils/rules'

type FormData = Pick<AuthSchema, 'email' | 'password' | 'confirm_password'>
const registerSchema = authSchema.pick(['email', 'password', 'confirm_password'])
export default function Register() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(registerSchema),
    })

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const onSubmit = handleSubmit(
        (data) => {
            console.log(data)
        },
        () => {
            const password = getValues('password')
            console.log(password)
        },
    )
    return (
        <div className='flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 lg:mt-8'>
            <div className='w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg lg:shadow'>
                <h2 className='text-2xl font-bold text-gray-900 '>Đăng ký tài khoản</h2>
                <form className='mt-8' onSubmit={onSubmit} noValidate>
                    <MyInput
                        type='email'
                        name='email'
                        register={register}
                        errorMessages={errors.email?.message}
                        placeholder='name@company.com'
                        label='Email của bạn'
                    />

                    <MyInput
                        className='my-3'
                        type='password'
                        name='password'
                        register={register}
                        errorMessages={errors.password?.message}
                        placeholder='••••••••'
                        label='Mật khẩu'
                    />
                    <MyInput
                        type='password'
                        name='confirm_password'
                        register={register}
                        errorMessages={errors.confirm_password?.message}
                        placeholder='••••••••'
                        label='Nhập lại mật khẩu'
                    />
                    <div className='flex items-start mt-5'>
                        <div className='flex items-center h-5'>
                            <input
                                id='remember'
                                aria-describedby='remember'
                                name='remember'
                                type='checkbox'
                                className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
                            />
                        </div>
                        <div className='ml-3 text-sm'>
                            <label htmlFor='remember' className='font-medium text-gray-900 '>
                                Tôi đồng ý với{' '}
                                <a href='#' className='text-primary-700 hover:underline '>
                                    Các điều khoản
                                </a>
                            </label>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-400 sm:w-auto mt-6'
                    >
                        Đăng ký ngay
                    </button>
                    <div className='text-sm font-medium text-gray-500 mt-6'>
                        Bạn đã có tài khoản?{' '}
                        <Link to='/login' className='text-primary-700 hover:underline '>
                            Đăng nhập ngay
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
