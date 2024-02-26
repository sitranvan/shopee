import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 lg:mt-8'>
            <div className='w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow'>
                <h2 className='text-2xl font-bold text-gray-900 '>Đăng ký tài khoản</h2>
                <form className='mt-8 space-y-6' action='#'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
                            Email
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                            placeholder='name@company.com'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
                            Mật khẩu
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='••••••••'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 '
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 '>
                            Nhập lại mật khẩu
                        </label>
                        <input
                            type='password'
                            name='confirm-password'
                            id='confirm-password'
                            placeholder='••••••••'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                            required
                        />
                    </div>
                    <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                            <input
                                id='remember'
                                aria-describedby='remember'
                                name='remember'
                                type='checkbox'
                                className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
                                required
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
                        type='button'
                        className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-400 sm:w-auto'
                    >
                        Đăng ký ngay
                    </button>
                    <div className='text-sm font-medium text-gray-500 '>
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
