export default function Footer() {
    return (
        <footer className='py-16 bg-neutral-100'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm text-gray-500'>
                    <div className='lg:col-span-1'>
                        <p>© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
                    </div>
                    <div className='lg:col-span-2'>
                        <p className=''>
                            Quốc gia & Khu vực: Singapore Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines |
                            Brazil | México Colombia | Chile | Đài Loan
                        </p>
                    </div>
                </div>
                <div className='my-6 flex items-center justify-center'>
                    <img
                        src='https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png'
                        width='200'
                        alt=''
                    />
                </div>
                <div className='text-center text-[12px] mt-10 text-gray-600'>
                    <div className='mt-3'>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba
                        Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                    </div>
                    <div className='mt-3'>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                    </div>
                    <div className='mt-3'>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                    </div>
                    <div className='mt-3'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                </div>
            </div>
        </footer>
    )
}
