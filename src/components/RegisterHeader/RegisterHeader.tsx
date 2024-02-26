import { Link } from 'react-router-dom'
import { LogoIcon } from '~/assets/svgs/svgs'

export default function RegisterHeader() {
    return (
        <header className='py-5'>
            <div className='max-w-7xl mx-auto px-4'>
                <nav className='flex items-end'>
                    <Link to='/'>
                        <LogoIcon />
                    </Link>
                    <div className='ml-5 text-xl lg:text-2xl'>Đăng ký</div>
                </nav>
            </div>
        </header>
    )
}
