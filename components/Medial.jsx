import React from 'react'

const Medial = () => {
  return (
    <section className='mt-32 min-h-screen mx-auto items-center justify-center w-full'>
        {/* ------------------top side ---------------- */}
        <div className='flex flex-row-reverse space-x-10 px-16'>
            <a href="#" className='inline-flex md:mx-10  text-center  bg-gradient-to-r from-red-500 to-red-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover'>در یک نگاه</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover'>بورس اوراق بهادار تهران</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover'>فرابورس ایران</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover'>بورس انرژی ایران</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover'>شبکه کدال</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover'>صندوق های سرمایه گذاری</a>
            <a href="#" className='inline-block   bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover'>بورس کالا</a>
        </div>
        {/* ----------------------center side -------------------- */}
        <div className='grid '>
            <div className='w-full text-right bg-gray-600 rounded-t-lg p-1 -mt-0.5 '>بورس اوراق بهادار تهران</div>
            
            <div className='grid grid-cols-2 gap-1'>
                <div className=''>
                    <p className='bg-gray-600'>بازار نقدی بورس در یک نگاه</p>
                    <table className='table-auto text-right'>
                        <tbody>
                            <tr>
                                <td>بسته 14:14:27</td>
                                <td>وضعیت بازار	</td>
                            </tr>
                            <tr>
                                <td>2,212,642.97 <span className='flex text-xs text-green-600'>11256.51</span></td>
                                <td>شاخص کل</td>
                            </tr>
                            <tr>
                                <td>687,897.91 <span className='flex text-xs text-green-600'>11352.43</span></td>
                                <td>(هم وزن)شاخص کل</td>
                            </tr>
                            <tr>
                                <td>81,951,635.223 B</td>
                                <td>ارزش بازار</td>
                            </tr>
                            <tr>
                                <td>14:22:35 02/01/20</td>
                                <td>اطلاعات قیمت</td>
                            </tr>
                            <tr>
                                <td>1.101 M</td>
                                <td>تعداد معاملات</td>
                            </tr>
                            <tr>
                                <td>138,202,493 B</td>
                                <td>ارزش معاملات</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className='col-span-2'>
                    <p className='bg-gray-600'>شاخص های منتخب</p>
                    <table className='table-fixed'>
                        <thead>
                            <tr>
                                <th>کمترین</th>
                                <th>بیشترین</th>
                                <th>درصد</th>
                                <th>تغییر</th>
                                <th>مقدار</th>
                                <th>انتشار</th>
                                <th>شاخص</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>2,203797.65</td>
                                <td>2,214,493.54</td>
                                <td className='text-green-600'>0.47</td>
                                <td className='text-green-600'>10256.51</td>
                                <td>2,212,642.97</td>
                                <td>15:00</td>
                                <td>شاخص کل</td>
                            </tr>
                            <tr>
                                <td>498,14.38</td>
                                <td>500,562.07</td>
                                <td className='text-green-600'>0.47</td>
                                <td className='text-green-600'>2318.37</td>
                                <td>500,143.77</td>
                                <td>15:00</td>
                                <td>شاخص قيمت(وزني-ارزشي)</td>
                            </tr>
                            <tr>
                                <td>679,395.29</td>
                                <td>687,898.06</td>
                                <td className='text-green-600'>1.68</td>
                                <td className='text-green-600'>11352.43</td>
                                <td>687,897.91</td>
                                <td>15:00</td>
                                <td>شاخص كل (هم وزن)</td>
                            </tr>
                            <tr>
                                <td>401,243.77</td>
                                <td>406,265.42</td>
                                <td className='text-green-600'>1.68</td>
                                <td className='text-green-600'>6704.63</td>
                                <td>406,265.33</td>
                                <td>15:00</td>
                                <td>شاخص قيمت (هم وزن)</td>
                            </tr>
                            <tr>
                                <td>2,818,380.99</td>
                                <td>2,828,517.82</td>
                                <td className='text-green-600'>0.31</td>
                                <td className='text-green-600'>8820.85</td>
                                <td>2,826,082.80</td>
                                <td>15:00</td>
                                <td>شاخص آزاد شناور</td>
                            </tr>
                            <tr>
                                <td>1,683,005.55</td>
                                <td>1,693,234.05</td>
                                <td className='text-green-600'>0.56</td>
                                <td className='text-green-600'>9393.10</td>
                                <td>1,691,840.26</td>
                                <td>15:00</td>
                                <td>شاخص بازار اول</td>
                            </tr>
                            <tr>
                                <td>4,223,558.83</td>
                                <td>4,238,195.15</td>
                                <td className='text-green-600'>0.35</td>
                                <td className='text-green-600'>14944.68</td>
                                <td>4,234,223.14</td>
                                <td>15:00</td>
                                <td>شاخص بازار دوم</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='text-green-600'></td>
                                <td className='text-green-600'></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <div className=''>
                    <p className='bg-gray-600'>تاثیر در شاخص</p>

                </div>

                <div className='col-span-2 '>
                    <p className='bg-gray-600'>نماد های پر تراکنش</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Medial