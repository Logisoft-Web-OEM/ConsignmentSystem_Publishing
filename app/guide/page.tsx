import Link from 'next/link';

export default function Page() {
  const datas = require('@/public/_dummy/gridlist.json');
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
      <h1 className="text-gray text-2xl font-bold m-4">로지소프트</h1>
      {/* guide table */}
      <div className="relative m-4">
        {datas.map((data: any, index: any) => (
          <div className="mb-6" key={index}>
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
                <col width="200px" />
              </colgroup>
              <thead>
                <tr className="text-xs font-bold border border-solid border-gray-200  bg-zinc-200">
                  {headerTitle.map((title: string) => (
                    <th className="p-1.5 border border-solid border-gray-200">
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
                            }`}
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
                                [{item.date}]{item.text}
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
          {datas.map((data: any) => (
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-1.5 mr-2 text-sm font-semibold leading-6 text-white"
            >
              {data.depth1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
