import React from 'react'

const TableMajorDeals = () => {
  return (
    <table className="min-w-full text-center text-base font-light">
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" className="px-2 py-3">
          تاثیر
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
        <td className="text-green-600 whitespace-nowrap px-2 py-3">
          4008.57
        </td>
        <td className="whitespace-nowrap px-2 py-3">6,920</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">کگل</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-red-600 whitespace-nowrap px-2 py-3">3964.04</td>
        <td className="whitespace-nowrap px-2 py-3">13,410</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">فارس</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">
          1360.49
        </td>
        <td className="whitespace-nowrap px-2 py-3">16,060</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          رمپنا
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">1140</td>
        <td className="whitespace-nowrap px-2 py-3">3,858</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          خودرو
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">
          1028.37
        </td>
        <td className="whitespace-nowrap px-2 py-3">14,670</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          حکشتی
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">994.26</td>
        <td className="whitespace-nowrap px-2 py-3">38,540</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">مبین</td>
      </tr>
      <tr>
        <td className="text-red-600 whitespace-nowrap px-2 py-3">2110.14</td>
        <td className="whitespace-nowrap px-2 py-3">20,680</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          تاپیکو
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default TableMajorDeals