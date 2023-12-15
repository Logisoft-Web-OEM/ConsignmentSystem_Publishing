"use client";

import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import Accordion from "./accordion";
import Tab from "./tab";
import CheckBox from "./checkBox";
import Radio from "./radio";
import Posts from "./post";
import Table from "./table";
import Modal from "./modal";
import Button from "./button";
import Switch from "./switch";
import Select from "./select";
import TabButton from "./tabButton";

const headers = [
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Version",
    value: "version",
  },
  {
    text: "Launch Date",
    value: "launch",
  },
];
const items = [
  {
    name: "React",
    version: "18.2.0",
    launch: "2013-05-29",
  },
  {
    name: "Vue",
    version: "3.2.45",
    launch: "2014-02",
  },
  {
    name: "jQuery",
    version: "3.3",
    disabled: true,
    launch: "2006-08-26",
  },
  {
    name: "Svelte",
    version: "3.53.1",
    launch: "2016-11-26",
  },
];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  const [selection, setSelection] = useState([]);
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const [toggle, setToggle] = useState(false);

  const options = [
    { label: "oprion01", value: "oprion01" },
    { label: "oprion02", value: "oprion02" },
    { label: "oprion03", value: "oprion03" },
  ];

  const [value, setValue] = useState("fruit");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const [openTab, setOenTab] = useState(1);

  return (
    <div className="pt-13 px-8">
      <h1 className="text-4xl font-bold mb-10">Components</h1>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Text Field
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Button
        </h2>
        <Button className="button btn-blue">button</Button>
        <Button className="button btn-blue disabled:bg-#d4d4d4" disabled>
          button
        </Button>
        <Button className="button btn-line-blue">button</Button>
        <Button
          className="button btn-line-blue disabled:bg-#e8e8e8 disabled:border-#d4d4d4 disabled:color-#d4d4d4"
          disabled
        >
          button
        </Button>
        <Button className="button btn-blue btn-icon before:content-[''] before:bg-[url(/ic-add-white.svg)]">
          <span className="pl-5">button</span>
        </Button>
        <Button className="button btn-line-blue btn-icon before:content-[''] before:bg-[url(/ic-add-blue.svg)] hover:before:bg-[url(/ic-add-white.svg)]">
          <span className="pl-5">button</span>
        </Button>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Button Group
        </h2>
        <ul className="flex item-ceter">
          <li className="flex-1 min-w-0">
            <Button className="button btn-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 ml-2">
            <Button className="button btn-line-blue w-full">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter justify-start mt-3">
          <li>
            <Button className="button btn-blue">button</Button>
          </li>
          <li className="ml-2">
            <Button className="button btn-line-blue">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter justify-end mt-3">
          <li>
            <Button className="button btn-blue">button</Button>
          </li>
          <li className="ml-2">
            <Button className="button btn-line-blue">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter justify-center mt-3">
          <li>
            <Button className="button btn-blue">button</Button>
          </li>
          <li className="ml-2">
            <Button className="button btn-line-blue">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter flex-col mt-3">
          <li className="flex-1 min-w-0">
            <Button className="button btn-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 mt-2">
            <Button className="button btn-line-blue w-full">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter mt-3">
          <li className="flex-1 min-w-0">
            <Button className="button btn-line-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 ml-2">
            <Button className="button btn-line-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 ml-2">
            <Button className="button btn-line-blue w-full">button</Button>
          </li>
        </ul>

        <ul className="flex item-ceter mt-3">
          <li className="flex-1 min-w-0">
            <Button className="button btn-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 ml-2">
            <Button className="button btn-blue w-full">button</Button>
          </li>
          <li className="flex-1 min-w-0 ml-2">
            <Button className="button btn-blue w-full">button</Button>
          </li>
        </ul>

        <div className="flex item-ceter mt-3">
          <Button className="button btn-line-blue w-full btn-list">
            button
          </Button>
          <Button className="button btn-line-blue w-full btn-list border-x-0">
            button
          </Button>
          <Button className="button btn-line-blue w-full btn-list">
            button
          </Button>
        </div>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Split
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Select
        </h2>
        <Select options={options} value={value} onChange={handleChange} />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Check Box
        </h2>
        <CheckBox id="check01" text="check01" className="checkbox" />
        <CheckBox id="check02" text="check02" className="checkbox" checked />
        <CheckBox id="check03" text="check03" className="checkbox" />
        <CheckBox
          id="check04"
          text="check04"
          className="checkbox disabled:bg-gray"
          disabled
        />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Radio
        </h2>
        <Radio id="radio01" text="radio01" className="radiobox" />
        <Radio id="radio02" text="radio02" className="radiobox" checked />
        <Radio id="radio03" text="radio03" className="radiobox" />
        <Radio
          id="radio04"
          text="radio04"
          className="radiobox disabled:bg-gray"
          disabled
        />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Switch
        </h2>
        <div className="flex items-center">
          <Switch
            isOn={toggle}
            onColor="#41C2D1"
            handleToggle={() => setToggle(!toggle)}
            text="label"
          />
        </div>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Toggle Button
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Slider
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Tooltip
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Alert
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Avatar
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Badge
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Speed Dial
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Stepper
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Tab
        </h2>
        <Tab />

        <TabButton />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Dialog
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Accordion
        </h2>
        <ul>
          <li>
            <Accordion
              title="아코디언 1"
              content="
                지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다. 라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.
                <br/>
                봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃 책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과 이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.
                <br/>
                마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운 거외다.01
              "
            />
          </li>
          <li className="mt-1">
            <Accordion
              title="아코디언 2"
              content="
                지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다. 라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.
                <br/>
                봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃 책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과 이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.
                <br/>
                마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운 거외다.02
              "
            />
          </li>
        </ul>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Table
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Breadcrumbs
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Date Picker
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Time Picker
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Date Time Picker
        </h2>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">
          Menu
        </h2>
      </section>

      {/* <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">Dropdown</h2>
        <Dropdown selected={selected} setSelected={setSelected}/>
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">Search</h2>
        <Posts />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">Table</h2>
        <Table 
          headers={headers} 
          items={items} 
          selectable={true} 
          updateSelection={setSelection}
        />
      </section>

      <section className="pt-13">
        <h2 className="text-lg font-bold mb-5 pb-2.5 border-b-2 border-color-#888">Modal</h2>

        <div>
          <button onClick={showModal} className="text-2xl">click</button>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </div>
      </section> */}
    </div>
  );
}
