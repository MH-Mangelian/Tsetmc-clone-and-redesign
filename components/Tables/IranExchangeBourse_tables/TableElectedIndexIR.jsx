import React from "react";

const TableElectedIndexIR = () => {
  return (
    <table className="min-w-full text-right text-base font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-2 py-3">
            کمترین
          </th>
          <th scope="col" className="px-2 py-3">
            بیشترین
          </th>
          <th scope="col" className="px-2 py-3">
            درصد
          </th>
          <th scope="col" className="px-2 py-3">
            تغییر
          </th>
          <th scope="col" className="px-2 py-3">
            مقدار
          </th>
          <th scope="col" className="px-2 py-3">
            انتشار
          </th>
          <th scope="col" className="px-2 py-3">
            شاخص
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">27,405.52</td>
          <td className="whitespace-nowrap px-2 py-3">27,708.47</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.53</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">146.91</td>
          <td className="whitespace-nowrap px-2 py-3">27,699.59</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص کل فرابورس
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">7,065.61</td>
          <td className="whitespace-nowrap px-2 py-3">7,143.72</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.57</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">37.87</td>
          <td className="whitespace-nowrap px-2 py-3">7,141.43</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص قیمت فرابورس
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">119,304.36</td>
          <td className="whitespace-nowrap px-2 py-3">121,671.69</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.85</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">
            1020.83
          </td>
          <td className="whitespace-nowrap px-2 py-3">121,671.69</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص کل هم وزن فرابورس
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">38,870.29</td>
          <td className="whitespace-nowrap px-2 py-3">39,641.59</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.85</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">332.59</td>
          <td className="whitespace-nowrap px-2 py-3">39,641.59</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص قیمت هم وزن فرابورس
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">9,057.42</td>
          <td className="whitespace-nowrap px-2 py-3">9,133.71</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.59</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">53.59</td>
          <td className="whitespace-nowrap px-2 py-3">9,124.66</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            بازار اول فرابورس
          </td>
        </tr>

        <tr className="">
          <td className="whitespace-nowrap px-2 py-3">10.840.56</td>
          <td className="whitespace-nowrap px-2 py-3">10,888.84</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">0.51</td>
          <td className="text-green-600 whitespace-nowrap px-2 py-3">55.13</td>
          <td className="whitespace-nowrap px-2 py-3">10,888.84</td>
          <td className="whitespace-nowrap px-2 py-3">15:00</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            بازار دوم فرابورس
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableElectedIndexIR;
