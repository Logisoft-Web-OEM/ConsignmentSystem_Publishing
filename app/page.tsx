// -----------------------------------------------
// logisoft WEB OEM
// 2023.12 ~ 2024.05
// publishing Guide Index
// 화면ID로 검색
// -----------------------------------------------

import Link from 'next/link';

export default function Page() {
  const datas = require('@/public/_dummy/guidelist.json');
  const date = new Date();
  const formatDate = (date: any) => {
    const d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    return [year, month, day].join('.');
  };
  const headerTitle = [
    'ID',
    'depth2',
    'depth3',
    'depth4',
    'depth5',
    'depth6',
    'path',
    'status',
    'create',
    'update',
    'log',
  ];

  return (
    <div className="bg-white">
      <h1 className="m-4 text-gray text-2xl font-bold">로지소프트 WEB OEM</h1>
      {/* component button */}
      <div className="flex items-center ml-4">
        <Link href="/component/" target="_blank">
          <button
            type="button"
            className="flex items-center justify-center px-3 py-1.5 mr-2 text-white text-sm rounded-md font-semibold border-0 bg-cyan-500 hover:bg-cyan-700"
          >
            컴포넌트
          </button>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center px-3 py-1.5 mr-2 text-white text-sm rounded-md font-semibold border-0 bg-cyan-500 hover:bg-cyan-700"
        >
          레이어팝업
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-3 py-1.5 mr-2 text-white text-sm rounded-md font-semibold border-0 bg-cyan-500 hover:bg-cyan-700"
        >
          기타
        </button>
      </div>
      {/* guide table */}
      <div className="relative m-4">
        {datas.map((data: any, index: any) => (
          <div className="mb-6" key={index} id={`section-${index}`}>
            <h2 className="m-0 p-2 pl-4 text-sm font-bold leading-5 color-white rounded-t-lg bg-gray-700">
              {data.depth1}
            </h2>
            <table className="border border-solid border-gray-200 text-sm w-full">
              <colgroup>
                <col width="100px" />
                <col width="100px" />
                <col width="100px" />
                <col width="100px" />
                <col width="100px" />
                <col width="100px" />
                <col />
                <col width="100px" />
                <col width="100px" />
                <col width="100px" />
                <col width="300px" />
              </colgroup>
              <thead>
                <tr className="text-xs font-bold border border-solid border-gray-200  bg-zinc-200">
                  {headerTitle.map((title, index: any) => (
                    <th
                      className="p-1.5 border border-solid border-gray-200"
                      key={index}
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.below &&
                  data.below.map((subdata: any, index: any) => (
                    <tr className="text-xs" key={index}>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.id}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.depth2}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.depth3}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.depth4}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.depth5}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.depth6}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        <Link href={subdata.path} target="_blank">
                          {subdata.path}
                        </Link>
                      </td>
                      <td className="p-1.5 text-center border border-solid border-gray-200 ">
                        <div className="text-white font-bold">
                          <span
                            className={`
                              p-1 rounded focus:outline-none
                            ${
                              subdata.status === '작업중'
                                ? 'bg-blue-600'
                                : subdata.status === '수정중'
                                  ? 'bg-red-500'
                                  : subdata.status === '작업완료'
                                    ? 'bg-gray-400'
                                    : ''
                            }
                            `}
                          >
                            {subdata.status}
                          </span>
                        </div>
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.create}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        {subdata.update}
                      </td>
                      <td className="p-1.5 border border-solid border-gray-200">
                        <ul>
                          {subdata.log.map((item: any, index: any) => {
                            return (
                              <li
                                className={`
                                ${
                                  formatDate(date) === item.date &&
                                  'text-red-600 font-bold'
                                }`}
                                key={index}
                              >
                                <span className="pr-1">[{item.date}]</span>
                                {item.text}
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
        <div className="fixed bottom-0 left-0 p-2 box-border bg-gray-600/40 w-full">
          {datas.map((data: any, index: any) => (
            <Link href={`#section-${index}`} key={index}>
              <button
                type="button"
                className="px-3 py-1.5 mr-2 text-sm font-semibold leading-6 text-white rounded-md bg-gray-600 hover:bg-gray-800"
              >
                {data.depth1}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
