import React from 'react'

const TableMajorDeals = () => {
  return (
    <table className="min-w-full text-center text-base font-light">
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" className="px-2 py-3">
          ارزش
        </th>
        <th scope="col" className="px-2 py-3">
          قیمت
        </th>
        <th scope="col" className="px-2 py-3">
          نماد
        </th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-3">
          206.417 B
        </td>
        <td className="whitespace-nowrap px-2 py-3">26,320</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">4افران</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-3">4,071.200 B</td>
        <td className="whitespace-nowrap px-2 py-3">13,410</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">کمند4</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-3">
          285.687 B
        </td>
        <td className="whitespace-nowrap px-2 py-3">17,760</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          سپر4
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className=" whitespace-nowrap px-2 py-3">1,486.523 B</td>
        <td className="whitespace-nowrap px-2 py-3">83,858</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          کیان4
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-3">
          172,028 B
        </td>
        <td className="whitespace-nowrap px-2 py-3">94,670</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          افلاک4
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-2 py-3">94.26 B</td>
        <td className="whitespace-nowrap px-2 py-3">8,540</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">مرید4</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-2 py-3">211,147 B</td>
        <td className="whitespace-nowrap px-2 py-3">98,880</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          زمر4
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default TableMajorDeals