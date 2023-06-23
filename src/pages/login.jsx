import Header from '../components/header'
import Login from '../components/login'
import Logo from './tiketku.png'
import { Image } from 'primereact/image';

export default function LoginPage() {
    return (
        <div className="flex items-center h-screen w-screen">
            <div className='w-5/6 hidden md:block h-screen'>
                <Image className="image object-cover " src={Logo} alt="Image" width=''  />
            </div>
            <div className='flex flex-col  w-screen items-center  '>
                <label className="text-3xl md:text-center font-extrabold text-gray-900 ">Masuk</label>
                <Login />
                <Header
                    paragraph="Belum punya akun? "
                    linkName="Daftar di sini"
                    linkUrl="/register"
                />
            </div>
        </div>
    )
}