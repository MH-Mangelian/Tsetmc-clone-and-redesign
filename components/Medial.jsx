import React from 'react'

const Medial = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
        <div className='my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full'>
            {/* ------------------top side Mobile ---------------- */}
            <div className="grid grid-cols-4 gap-1 mx-2 text-center md:hidden">
            <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-red-500 to-red-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>در یک نگاه</a>
                <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس اوراق بهادار تهران</a>
                <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>فرابورس ایران</a>
                <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس انرژی ایران</a>
                <a href="#" className='col-span-3 w-[133%] font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>صندوق های سرمایه گذاری</a>
                <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>شبکه کدال</a>
                <a href="#" className='col-span-2 font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس کالا</a>
            </div>
            {/* ------------------top side ---------------- */}
            <div className='grid grid-flow-col auto-cols-max px-16 gap-x-2 max-sm:hidden '>
            {/* flex flex-row-reverse space-x-10 px-16 */}
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس کالا</a>
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>صندوق های سرمایه گذاری</a>
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>شبکه کدال</a>
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس انرژی ایران</a>
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>فرابورس ایران</a>
                <a href="#" className='inline-block font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>بورس اوراق بهادار تهران</a>
                <a href="#" className='inline-flex font-medium text-center  bg-gradient-to-r from-red-500 to-red-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'>در یک نگاه</a>
            </div>
            {/* ----------------------center side -------------------- */}
            <div className='grid min-h-screen justify-center min-w-fit sm:grid-flow-row'>
                <div className=' text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-2'>بورس اوراق بهادار تهران</div>
                <div className='grid grid-cols-4 gap-10 sm:gap-4'>
                    <div className='col-span-3'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های منتخب</p>
                        <table className='min-w-full text-center text-base font-light'>
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-2 py-3">کمترین</th>
                                    <th scope="col" className="px-2 py-3">بیشترین</th>
                                    <th scope="col" className="px-2 py-3">درصد</th>
                                    <th scope="col" className="px-2 py-3">تغییر</th>
                                    <th scope="col" className="px-2 py-3">مقدار</th>
                                    <th scope="col" className="px-2 py-3">انتشار</th>
                                    <th scope="col" className="px-2 py-3">شاخص</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,203797.65</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,214,493.54</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.47</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>10256.51</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,212,642.97</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص کل</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">498,14.38</td>
                                    <td className="whitespace-nowrap px-2 py-3">500,562.07</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.47</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>2318.37</td>
                                    <td className="whitespace-nowrap px-2 py-3">500,143.77</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص قيمت(وزني-ارزشي)</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">679,395.29</td>
                                    <td className="whitespace-nowrap px-2 py-3">687,898.06</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1.68</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>11352.43</td>
                                    <td className="whitespace-nowrap px-2 py-3">687,897.91</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص كل (هم وزن)</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">401,243.77</td>
                                    <td className="whitespace-nowrap px-2 py-3">406,265.42</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1.68</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>6704.63</td>
                                    <td className="whitespace-nowrap px-2 py-3">406,265.33</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص قيمت (هم وزن)</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,818,380.99</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,828,517.82</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.31</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>8820.85</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,826,082.80</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص آزاد شناور</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">1,683,005.55</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,693,234.05</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.56</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>9393.10</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,691,840.26</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص بازار اول</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-2 py-3">4,223,558.83</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,238,195.15</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.35</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>14944.68</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,234,223.14</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap text-center px-2 py-3 font-prop-bolder">شاخص بازار دوم</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                    <div className=''>
                        <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بازار نقدی بورس در یک نگاه</p>
                        <table className='min-w-full text-center text-base font-light'>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3 font">بسته 14:14:27</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">وضعیت بازار	</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,212,642.97 <span className='text-xs text-green-600'>11256.51</span></td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص کل</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">687,897.91 <span className='text-xs text-green-600'>11352.43</span></td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">(هم وزن)شاخص کل</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">81,951,635.223 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">ارزش بازار</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">14:22:35 02/01/20</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">اطلاعات قیمت</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">1.101 M</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">تعداد معاملات</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-2 py-3">138,202,493 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">ارزش معاملات</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className='col-span-3 '>
                        <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>نماد های پر تراکنش</p>
                        <table className='min-w-full text-right text-base font-light'>
                            <thead className='border-b font-medium dark:border-neutral-500'>
                                <tr>
                                    <th scope="col" className="px-2 py-3">ارزش</th>
                                    <th scope="col" className="px-2 py-3">حجم</th>
                                    <th scope="col" className="px-2 py-3">تعداد</th>
                                    <th scope="col" className="px-2 py-3">بیشترین</th>
                                    <th scope="col" className="px-2 py-3">کمترین</th>
                                    <th scope="col" className="px-2 py-3">معامله</th>
                                    <th scope="col" className="px-2 py-3">آخرین</th>
                                    <th scope="col" className="px-2 py-3">پایانی</th>
                                    <th scope="col" className="px-2 py-3">قیمت</th>
                                    <th scope="col" className="px-2 py-3">نماد</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">4,683.872 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">173.742 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">89,209</td>
                                    <td className="whitespace-nowrap px-2 py-3">27,230</td>
                                    <td className="whitespace-nowrap px-2 py-3">25,260</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>4.97</td>
                                    <td className="whitespace-nowrap px-2 py-3">27,230</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>3.43</td>
                                    <td className="whitespace-nowrap px-2 py-3">26,830</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">وکغدیر-بین المللی توسعه معادن غدیر</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">4,158.461</td>
                                    <td className="whitespace-nowrap px-2 py-3">737.403 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">29,945</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,840</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,320</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>5.12</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,750</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>3.11</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,640</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خگستر-گسترش سرمایه گذاری ایران خودرو</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">4,158.461 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">737.403 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">21,795</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,376</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,338</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>0.65</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,373</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.66</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,359</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شستا-سرمایه گذاری تامین اجتماعی</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,263.337 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">405,656 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">19,693</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,697</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,463</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>4.23</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,694</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>2.12</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,579</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فباهنر-مس شهید باهنر</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,025.458 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">705.476 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">18,791</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,950</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,764</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>0.79</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,886</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.31</td>
                                    <td className="whitespace-nowrap px-2 py-3">2,871</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خساپا-سایپا</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">2,029.989 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">527.362 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">18,399</td>
                                    <td className="whitespace-nowrap px-2 py-3">3,930</td>
                                    <td className="whitespace-nowrap px-2 py-3">3,700</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.55</td>
                                    <td className="whitespace-nowrap px-2 py-3">3,869</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.03</td>
                                    <td className="whitespace-nowrap px-2 py-3">3,849</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خودرو-ایران خودرو</td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap px-2 py-3">1,351.724 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">170.710 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">14,961</td>
                                    <td className="whitespace-nowrap px-2 py-3">8,050</td>
                                    <td className="whitespace-nowrap px-2 py-3">7,870</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.86</td>
                                    <td className="whitespace-nowrap px-2 py-3">7,900</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.61</td>
                                    <td className="whitespace-nowrap px-2 py-3">7,920</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فملی-ملی صنایع مس ایران</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className=''>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تاثیر در شاخص</p>
                        <table className='min-w-full text-center text-base font-light'>
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-2 py-3">تاثیر</th>
                                    <th scope="col" className="px-2 py-3">قیمت پایانی</th>
                                    <th scope="col" className="px-2 py-3">نماد</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>4008.57</td>
                                    <td className="whitespace-nowrap px-2 py-3">6,920</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">کگل</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>3964.04</td>
                                    <td className="whitespace-nowrap px-2 py-3">13,410</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فارس</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1360.49</td>
                                    <td className="whitespace-nowrap px-2 py-3">16,060</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">رمپنا</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1140</td>
                                    <td className="whitespace-nowrap px-2 py-3">3,858</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خودرو</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1028.37</td>
                                    <td className="whitespace-nowrap px-2 py-3">14,670</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">حکشتی</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>994.26</td>
                                    <td className="whitespace-nowrap px-2 py-3">38,540</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">مبین</td>
                                </tr>
                                <tr>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>2110.14</td>
                                    <td className="whitespace-nowrap px-2 py-3">20,680</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">تاپیکو</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            {/* ------------------------------------------ seconde part fara bors  ----------------------------------------------------- */}
                <div className='w-full text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-semibold'>فرابورس ایران</div>

                <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-3'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های منتخب</p>
                        <table className='min-w-full text-right text-base font-light'>
                            <thead className='border-b font-medium dark:border-neutral-500'>
                                <tr>
                                    <th scope="col" className="px-2 py-3">کمترین</th>
                                    <th scope="col" className="px-2 py-3">بیشترین</th>
                                    <th scope="col" className="px-2 py-3">درصد</th>
                                    <th scope="col" className="px-2 py-3">تغییر</th>
                                    <th scope="col" className="px-2 py-3">مقدار</th>
                                    <th scope="col" className="px-2 py-3">انتشار</th>
                                    <th scope="col" className="px-2 py-3">شاخص</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">27,405.52</td>
                                    <td className="whitespace-nowrap px-2 py-3">27,708.47</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.53</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>146.91</td>
                                    <td className="whitespace-nowrap px-2 py-3">27,699.59</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص کل فرابورس</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">7,065.61</td>
                                    <td className="whitespace-nowrap px-2 py-3">7,143.72</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.57</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>37.87</td>
                                    <td className="whitespace-nowrap px-2 py-3">7,141.43</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص قیمت فرابورس</td>
                                </tr>

                                <tr class="border-b dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-2 py-3">119,304.36</td>
                                    <td class="whitespace-nowrap px-2 py-3">121,671.69</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.85</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1020.83</td>
                                    <td class="whitespace-nowrap px-2 py-3">121,671.69</td>
                                    <td class="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td class="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص کل هم وزن فرابورس</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">38,870.29</td>
                                    <td className="whitespace-nowrap px-2 py-3">39,641.59</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.85</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>332.59</td>
                                    <td className="whitespace-nowrap px-2 py-3">39,641.59</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص قیمت هم وزن فرابورس</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">9,057.42</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,133.71</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.59</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>53.59</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,124.66</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">بازار اول فرابورس</td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-2 py-3">10.840.56</td>
                                    <td className="whitespace-nowrap px-2 py-3">10,888.84</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.51</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>55.13</td>
                                    <td className="whitespace-nowrap px-2 py-3">10,888.84</td>
                                    <td className="whitespace-nowrap px-2 py-3">15:00</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">بازار دوم فرابورس</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className=' '>
                        <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بازار نقدی فرابورس در یک نگاه</p>
                        <table className='min-w-full text-right text-base font-light'>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">بسته 14:14:47</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">وضعیت بازار</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3"><span className='text-green-600 px-1'>146.91</span>27,699.59</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شاخص کل</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">15,588,238.830 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder"> ارزش بازار <span className='text-[10px]'>اول و دوم</span></td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">4,296,098.495 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">ارزش بازار <span className='text-[10px]'>پایه</span></td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">17:37:38 02/01/20</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">اطلاعات قیمت</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">505,531</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">تعداد معاملات</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">555,360,431 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">ارزش معاملات</td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-2 py-3">10.021 B</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">حجم معاملات</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='col-span-3'>
                        <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>نماد های پر تراکنش</p>
                        <table className='min-w-full text-right text-base font-light'>
                            <thead className='border-b font-medium dark:border-neutral-500'>
                                <tr>
                                    <th scope="col" className="px-2 py-3">ارزش</th>
                                    <th scope="col" className="px-2 py-3">حجم</th>
                                    <th scope="col" className="px-2 py-3">تعداد</th>
                                    <th scope="col" className="px-2 py-3">بیشترین</th>
                                    <th scope="col" className="px-2 py-3">کمترین</th>
                                    <th scope="col" className="px-2 py-3">معامله</th>
                                    <th scope="col" className="px-2 py-3">آخرین</th>
                                    <th scope="col" className="px-2 py-3">پایانی</th>
                                    <th scope="col" className="px-2 py-3">قیمت</th>
                                    <th scope="col" className="px-2 py-3">نماد</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">997.720 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">909.155 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">21,387</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,123</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,063</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>0.54</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,111</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.79</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,097</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">دی-بانک دی</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">1,077.919 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">718.435 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">16,168</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,570</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,430</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>5.19</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,560</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>1.15</td>
                                    <td className="whitespace-nowrap px-2 py-3">1,500</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">کرمان-س.توسعه استان کرمان</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">416.140 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">75.915 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">13,863</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,764</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,208</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>2.44</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,347</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.02</td>
                                    <td className="whitespace-nowrap px-2 py-3">5,482</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">وسپهر-سرمایه گذاری مالی سپهر صادرات</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">549.901 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">59.815 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">11,330</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,480</td>
                                    <td className="whitespace-nowrap px-2 py-3">8,980</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.6</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,240</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>2.13</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,190</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">گدنا-تهیه توزیع غذای دنا آفرین فدک</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">1,254.800 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">280,961 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,206</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,514</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,300</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>6.99</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,514</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>5.85</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,466</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خاور-ایران خودرو دیزل</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-2 py-3">924.019 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">44.535 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">8,636</td>
                                    <td className="whitespace-nowrap px-2 py-3">21,220</td>
                                    <td className="whitespace-nowrap px-2 py-3">19,500</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>6.96</td>
                                    <td className="whitespace-nowrap px-2 py-3">21,220</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>4.59</td>
                                    <td className="whitespace-nowrap px-2 py-3">20,750</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">غدیس-پاکدیس</td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-2 py-3">890.649 B</td>
                                    <td className="whitespace-nowrap px-2 py-3">57.971 M</td>
                                    <td className="whitespace-nowrap px-2 py-3">8,378</td>
                                    <td className="whitespace-nowrap px-2 py-3">15,840</td>
                                    <td className="whitespace-nowrap px-2 py-3">14,880</td>
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>0.32</td>
                                    <td className="whitespace-nowrap px-2 py-3">15,600</td>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>1.22</td>
                                    <td className="whitespace-nowrap px-2 py-3">15,360</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فرابورس-فرابورس ایران</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='grid '>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تاثیر در شاخص</p>
                        <table className='min-w-full text-right text-base font-light'>
                            <thead className='border-b font-medium dark:border-neutral-500'>
                                <tr>
                                    <th scope="col" className="px-2 py-3">تاثیر</th>
                                    <th scope="col" className="px-2 py-3">قیمت پایانی</th>
                                    <th scope="col" className="px-2 py-3">نماد</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>126.53</td>
                                    <td className="whitespace-nowrap px-2 py-3">206,750</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">مارون</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>37.91</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,466</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خاور</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-green-600 whitespace-nowrap px-2 py-3'>15.11</td>
                                    <td className="whitespace-nowrap px-2 py-3">30,500</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">انتخاب</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>13.72</td>
                                    <td className="whitespace-nowrap px-2 py-3">4,246</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">صبا</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>13.44</td>
                                    <td className="whitespace-nowrap px-2 py-3">113,250</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">آریا</td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>13.06</td>
                                    <td className="whitespace-nowrap px-2 py-3">9,960</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">هرمز</td>
                                </tr>

                                <tr>
                                    <td className='text-red-600 whitespace-nowrap px-2 py-3'>11.2</td>
                                    <td className="whitespace-nowrap px-2 py-3">8,550</td>
                                    <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فغدیر</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Medial