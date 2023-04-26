import React from "react";

const TableStockMarketGlance = () => {
  return (
    <table className="min-w-full text-center text-base font-light">
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3 font">بسته 14:14:27</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            وضعیت بازار{" "}
          </td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">
            2,212,642.97{" "}
            <span className="text-xs text-green-600">11256.51</span>
          </td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص کل
          </td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">
            687,897.91 <span className="text-xs text-green-600">11352.43</span>
          </td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            (هم وزن)شاخص کل
          </td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">81,951,635.223 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            ارزش بازار
          </td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">14:22:35 02/01/20</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            اطلاعات قیمت
          </td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">1.101 M</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            تعداد معاملات
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap px-2 py-3">138,202,493 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            ارزش معاملات
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableStockMarketGlance;
