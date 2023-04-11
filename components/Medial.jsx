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
                            
                        </tbody>
                    </table>
                </div>

                <div className=''>
                    <p className='bg-gray-600'>تاثیر در شاخص</p>
                    <table className='table-fixed'>
                        <thead>
                            <tr>
                                <td>تاثیر</td>
                                <td>قیمت پایانی</td>
                                <td>نماد</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-green-600'>4008.57</td>
                                <td>6,920</td>
                                <td>کگل</td>
                            </tr>
                            <tr>
                                <td className='text-red-600'>3964.04</td>
                                <td>13,410</td>
                                <td>فارس</td>
                            </tr>
                            <tr>
                                <td className='text-green-600'>1360.49</td>
                                <td>16,060</td>
                                <td>رمپنا</td>
                            </tr>
                            <tr>
                                <td className='text-green-600'>1140</td>
                                <td>3,858</td>
                                <td>خودرو</td>
                            </tr>
                            <tr>
                                <td className='text-green-600'>1028.37</td>
                                <td>14,670</td>
                                <td>حکشتی</td>
                            </tr>
                            <tr>
                                <td className='text-green-600'>994.26</td>
                                <td>38,540</td>
                                <td>مبین</td>
                            </tr>
                            <tr>
                                <td className='text-red-600'>2110.14</td>
                                <td>20,680</td>
                                <td>تاپیکو</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col-span-2 '>
                    <p className='bg-gray-600'>نماد های پر تراکنش</p>
                    <table className='table-fixed'>
                        <thead>
                            <tr>
                                <th>ارزش</th>
                                <th>حجم</th>
                                <th>تعداد</th>
                                <th>بیشترین</th>
                                <th>کمترین</th>
                                <th>آخرین معامله</th>
                                <th>قیمت پایانی</th>
                                <th>نماد</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4,683.872 B</td>
                                <td>173.742 M</td>
                                <td>89,209</td>
                                <td>27,230</td>
                                <td>25,260</td>
                                <td className='text-green-600'>4.97</td>
                                <td>27,230</td>
                                <td className='text-green-600'>3.43</td>
                                <td>26,830</td>
                                <td>وکغدیر-بین المللی توسعه معادن غدیر</td>
                            </tr>

                            <tr>
                                <td>4,158.461</td>
                                <td>737.403 M</td>
                                <td>29,945</td>
                                <td>5,840</td>
                                <td>5,320</td>
                                <td className='text-green-600'>5.12</td>
                                <td>5,750</td>
                                <td className='text-green-600'>3.11</td>
                                <td>5,640</td>
                                <td>خگستر-گسترش سرمایه گذاری ایران خودرو</td>
                            </tr>

                            <tr>
                                <td>4,158.461 B</td>
                                <td>737.403 M</td>
                                <td>21,795</td>
                                <td>1,376</td>
                                <td>1,338</td>
                                <td className='text-red-600'>0.65</td>
                                <td>1,373</td>
                                <td className='text-red-600'>1.66</td>
                                <td>1,359</td>
                                <td>شستا-سرمایه گذاری تامین اجتماعی</td>
                            </tr>

                            <tr>
                                <td>2,263.337 B</td>
                                <td>405,656 M</td>
                                <td>19,693</td>
                                <td>5,697</td>
                                <td>5,463</td>
                                <td className='text-green-600'>4.23</td>
                                <td>5,694</td>
                                <td className='text-green-600'>2.12</td>
                                <td>5,579</td>
                                <td>فباهنر-مس شهید باهنر</td>
                            </tr>

                            <tr>
                                <td>2,025.458 B</td>
                                <td>705.476 M</td>
                                <td>18,791</td>
                                <td>2,950</td>
                                <td>2,764</td>
                                <td className='text-red-600'>0.79</td>
                                <td>2,886</td>
                                <td className='text-red-600'>1.31</td>
                                <td>2,871</td>
                                <td>خساپا-سایپا</td>
                            </tr>

                            <tr>
                                <td>2,029.989 B</td>
                                <td>527.362 M</td>
                                <td>18,399</td>
                                <td>3,930</td>
                                <td>3,700</td>
                                <td className='text-green-600'>0.55</td>
                                <td>3,869</td>
                                <td className='text-green-600'>0.03</td>
                                <td>3,849</td>
                                <td>خودرو-ایران خودرو</td>
                            </tr>

                            <tr>
                                <td>1,351.724 B</td>
                                <td>170.710 M</td>
                                <td>14,961</td>
                                <td>8,050</td>
                                <td>7,870</td>
                                <td className='text-red-600'>1.86</td>
                                <td>7,900</td>
                                <td className='text-red-600'>1.61</td>
                                <td>7,920</td>
                                <td>فملی-ملی صنایع مس ایران</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        {/* ------------------------------------------ seconde part fara bors  ----------------------------------------------------- */}
            <div className='w-full text-right bg-gray-600 rounded-t-lg p-1 -mt-0.5 '>فرابورس ایران</div>

            <div className='grid grid-cols-2 gap-1'>
                <div className='grid col-span-2'>
                    <p className='bg-gray-600 p-2 rounded-t-md text-right'>شاخص های منتخب</p>
                    <table className='table-auto p-4'>
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
                                <td>27,405.52</td>
                                <td>27,708.47</td>
                                <td className='text-green-600'>0.53</td>
                                <td className='text-green-600'>146.91</td>
                                <td>27,699.59</td>
                                <td>15:00</td>
                                <td>شاخص کل فرابورس</td>
                            </tr>

                            <tr>
                                <td>7,065.61</td>
                                <td>7,143.72</td>
                                <td className='text-green-600'>0.57</td>
                                <td className='text-green-600'>37.87</td>
                                <td>7,141.43</td>
                                <td>15:00</td>
                                <td>شاخص قیمت فرابورس</td>
                            </tr>

                            <tr>
                                <td>119,304.36</td>
                                <td>121,671.69</td>
                                <td className='text-green-600'>0.85</td>
                                <td className='text-green-600'>1020.83</td>
                                <td>121,671.69</td>
                                <td>15:00</td>
                                <td>شاخص کل هم وزن فرابورس</td>
                            </tr>

                            <tr>
                                <td>38,870.29</td>
                                <td>39,641.59</td>
                                <td className='text-green-600'>0.85</td>
                                <td className='text-green-600'>332.59</td>
                                <td>39,641.59</td>
                                <td>15:00</td>
                                <td>شاخص قیمت هم وزن فرابورس</td>
                            </tr>

                            <tr>
                                <td>9,057.42</td>
                                <td>9,133.71</td>
                                <td className='text-green-600'>0.59</td>
                                <td className='text-green-600'>53.59</td>
                                <td>9,124.66</td>
                                <td>15:00</td>
                                <td>بازار اول فرابورس</td>
                            </tr>

                            <tr>
                                <td>10.840.56</td>
                                <td>10,888.84</td>
                                <td className='text-green-600'>0.51</td>
                                <td className='text-green-600'>55.13</td>
                                <td>10,888.84</td>
                                <td>15:00</td>
                                <td>بازار دوم فرابورس</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='grid '>
                    <p className='bg-gray-400 p-2 rounded-t-md text-right text-black'>بازار نقدی فرابورس در یک نگاه</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>بسته 14:14:47</td>
                                <td>وضعیت بازار</td>
                            </tr>

                            <tr>
                                <td><span className='text-green-600 px-1'>146.91</span>27,699.59</td>
                                <td>شاخص کل</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><span className='text-xs'>اول و دوم</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='grid col-span-2'>
                    <p className='bg-green-300 p-2 rounded-t-md text-right text-black'>نماد های پر تراکنش</p>
                </div>

                <div className='grid '>
                    <p className='bg-gray-600 p-2 rounded-t-md text-right'>تاثیر در شاخص</p>
                </div>
            </div>



        </div>
    </section>
  )
}

export default Medial