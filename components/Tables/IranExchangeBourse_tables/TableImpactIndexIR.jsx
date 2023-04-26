import React from "react";

const TableImpactIndexIR = () => {
  return (
    <table className="min-w-full text-right text-base font-light">
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
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="text-green-600 whitespace-nowrap px-2 py-3">126.53</td>
          <td className="whitespace-nowrap px-2 py-3">206,750</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            مارون
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="text-green-600 whitespace-nowrap px-2 py-3">37.91</td>
          <td className="whitespace-nowrap px-2 py-3">4,466</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">خاور</td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="text-green-600 whitespace-nowrap px-2 py-3">15.11</td>
          <td className="whitespace-nowrap px-2 py-3">30,500</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            انتخاب
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="text-red-600 whitespace-nowrap px-2 py-3">13.72</td>
          <td className="whitespace-nowrap px-2 py-3">4,246</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">صبا</td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="text-red-600 whitespace-nowrap px-2 py-3">13.44</td>
          <td className="whitespace-nowrap px-2 py-3">113,250</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">آریا</td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="text-red-600 whitespace-nowrap px-2 py-3">13.06</td>
          <td className="whitespace-nowrap px-2 py-3">9,960</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">هرمز</td>
        </tr>

        <tr>
          <td className="text-red-600 whitespace-nowrap px-2 py-3">11.2</td>
          <td className="whitespace-nowrap px-2 py-3">8,550</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            فغدیر
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableImpactIndexIR;
