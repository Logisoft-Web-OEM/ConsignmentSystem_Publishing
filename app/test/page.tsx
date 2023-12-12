"use client"
// `app/test/page.tsx` is the UI for the `/test` URL
import { useEffect, useState } from "react";
import Dropdown from "../component/dropdown";
import Accordion from "../component/accordion";
import Tab from "../component/tab";
import CheckBox from "../component/checkBox";
import Radio from "../component/radio";
import Posts from "../component/post";
import Table from "../component/table";

const headers = [
  {
    text: 'Name',
    value: 'name'
  },
  {
    text: 'Version',
    value: 'version'
  },
  {
    text: 'Launch Date',
    value: 'launch'
  }
];
const items = [
  {
    name: 'React',
    version: '18.2.0',
    launch: '2013-05-29'
  },
  {
    name: 'Vue',
    version: '3.2.45',
    launch: '2014-02'
  },
  {
    name: 'jQuery',
    version: '3.3',
    disabled: true,
    launch: '2006-08-26'
  },
  {
    name: 'Svelte',
    version: '3.53.1',
    launch: '2016-11-26'
  },
];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  const [selection, setSelection] = useState([]);
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className="pa-5">
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Dropdown</h2>
        <Dropdown selected={selected} setSelected={setSelected}/>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Accordion</h2>
        <ul>
          <li>
            <Accordion 
              title="아코디언 1" 
              content="
                지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다. 라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.
                <br/>
                봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃 책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과 이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.
                <br/>
                마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운 거외다.
              "
              />
          </li>
          <li>
            <Accordion 
              title="아코디언 2" 
              content="
                지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다. 라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.
                <br/>
                봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃 책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과 이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.
                <br/>
                마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운 거외다.
              "
              />
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Tab</h2>
        <Tab />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Check</h2>
        <CheckBox />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Radio</h2>
        <Radio />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Search</h2>
        <Posts />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Table</h2>
        <Table 
          headers={headers} 
          items={items} 
          selectable={true} 
          updateSelection={setSelection}
        />
      </section>
    </div>
  );
}