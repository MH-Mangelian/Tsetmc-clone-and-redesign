import React from 'react'

const TableBiggestPriceReduction = () => {
  return (
    <table className="min-w-full text-center text-base font-light">
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" className="px-2 py-3">
          
        </th>
        <th scope="col" className="px-2 py-3">
          قیمت پایانی
        </th>
        <th scope="col" className="px-2 py-3">
          نماد
        </th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">
          4.08
        </td>
        <td className="whitespace-nowrap px-2 py-3">321,420</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">سصفها</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">3.04</td>
        <td className="whitespace-nowrap px-2 py-3">63,819</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">دامین</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">
          1.96
        </td>
        <td className="whitespace-nowrap px-2 py-3">35,730</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          فمراد
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">4.65</td>
        <td className="whitespace-nowrap px-2 py-3">93,138</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          گوهر
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">
          1.37
        </td>
        <td className="whitespace-nowrap px-2 py-3">88,620</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          کرماشا
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">1.26</td>
        <td className="whitespace-nowrap px-2 py-3">38,540</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">شنفت</td>
      </tr>
      <tr>
        <td className="text-red-600 whitespace-nowrap px-2 py-3">1.11</td>
        <td className="whitespace-nowrap px-2 py-3">28,680</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          شیراز
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default TableBiggestPriceReduction