import React from 'react'

const TableBondsPriority = () => {
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
        <td className="text-green-600 whitespace-nowrap px-2 py-3">
          9.7
        </td>
        <td className="whitespace-nowrap px-2 py-3">69,582</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">نمرینوح</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">9.4</td>
        <td className="whitespace-nowrap px-2 py-3">42,410</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">حتوکاح</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">
          7.6
        </td>
        <td className="whitespace-nowrap px-2 py-3">19,060</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          پکویرح
        </td>
      </tr>
      <tr className="">
        <td className="text-green-600 whitespace-nowrap px-2 py-3">1.82</td>
        <td className="whitespace-nowrap px-2 py-3">7,858</td>
        <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
          تکنوح
        </td>
      </tr>
      
    </tbody>
  </table>
  )
}

export default TableBondsPriority