import React from "react";

const TableStockMarketGlanceIR = () => {
  return (
    <table className="min-w-full text-right text-base font-light">
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">بسته 14:14:47</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            وضعیت بازار
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">
            <span className="text-green-600 px-1">146.91</span>27,699.59
          </td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            شاخص کل
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">15,588,238.830 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            {" "}
            ارزش بازار <span className="text-[10px]">اول و دوم</span>
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">4,296,098.495 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            ارزش بازار <span className="text-[10px]">پایه</span>
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">17:37:38 02/01/20</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            اطلاعات قیمت
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">505,531</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            تعداد معاملات
          </td>
        </tr>

        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-2 py-3">555,360,431 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            ارزش معاملات
          </td>
        </tr>

        <tr className="">
          <td className="whitespace-nowrap px-2 py-3">10.021 B</td>
          <td className="whitespace-nowrap px-2 py-3 font-prop-bolder">
            حجم معاملات
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableStockMarketGlanceIR;
