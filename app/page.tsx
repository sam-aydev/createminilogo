"use client";
import Image from "next/image";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { HiAcademicCap } from "react-icons/hi2";

export default function Home() {
  const [color, setColor] = useState<string>("#000000");
  const [borderColor, setBorderColor] = useState<string>("#1AACE4");
  const [bgIcon, setBgIcon] = useState<string>("#000000");
  const [iconComp, setIconComp] = useState<boolean>(true);
  const [bgComp, setBgComp] = useState<boolean>(false);
  const [sizeValue, setSizeValue] = useState<number>(52);
  const [rotateValue, setRotateValue] = useState<number>(0);
  const [borderValue, setBorderValue] = useState<number>(0);
  const [fillOpacity, setFillOpacity] = useState<number>(100);
  const [rounded, setRounded] = useState<number>(20);
  const [padding, setPadding] = useState<number>(0);
  const [shadow, setShadow] = useState(0);

  const myShadow = ["sm", "md", "lg", "xl", "2xl", "black"];
  function handleIconComp() {
    setIconComp(true);
    setBgComp(false);
  }
  function handleBgComp() {
    setBgComp(true);
    setIconComp(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-4 font-semibold">
        <p>Logofast</p>
        <button className="bg-slate-200 rounded text-black py-2 px-6">
          Download
        </button>
      </div>
      <div className="flex  space-x-5 px-5 border-b-2 py-2">
        <button
          onClick={handleIconComp}
          className={
            iconComp
              ? "bg-slate-300 font-semibold text-black rounded py-3 px-6"
              : "font-semibold text-black rounded py-3 px-6"
          }
        >
          Icon
        </button>
        <button
          onClick={handleBgComp}
          className={
            bgComp
              ? "bg-slate-300 font-semibold text-black rounded py-3 px-6"
              : "font-semibold text-black rounded py-3 px-6"
          }
        >
          Background
        </button>
      </div>

      {iconComp && (
        <div>
          <div className="mt-5 px-5 ">
            <div>
              <div>
                <p>Icon</p>
                <HiAcademicCap className="bg-slate-100 size-20 p-2 rounded" />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <label htmlFor="size" className="font-medium">
                    Size
                  </label>
                  <p className="font-semibold text-sm">{`${sizeValue}px`}</p>
                </div>
                <input
                  type="range"
                  value={sizeValue}
                  max={250}
                  onChange={(e: any) => setSizeValue(e.target.value)}
                  name=""
                  id=""
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <label htmlFor="rotate" className="font-medium">
                    Rotate
                  </label>
                  <p className="font-semibold text-sm">{`${rotateValue}px`}</p>
                </div>{" "}
                <input
                  type="range"
                  value={rotateValue}
                  step={10}
                  max={360}
                  onChange={(e: any) => setRotateValue(e.target.value)}
                  name=""
                  id=""
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <label htmlFor="borderWidth" className="font-medium">
                    Border-width
                  </label>
                  <p className="font-semibold text-sm">{`${borderValue}px`}</p>
                </div>
                <input
                  type="range"
                  max={10}
                  value={borderValue}
                  onChange={(e: any) => {
                    setBorderValue(e.target.value);
                    console.log(borderValue);
                  }}
                  name=""
                  id=""
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="px-5 mt-5">
            <div>
              <p>Border-color</p>
              <ChromePicker
                color={borderColor}
                onChange={(color: any) => setBorderColor(color?.hex)}
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <label htmlFor="fillOpacity" className="font-medium">
                  Fill Opacity
                </label>
                <p className="font-semibold text-sm">{`${fillOpacity}%`}</p>
              </div>{" "}
              <input
                type="range"
                name="fill-opacity"
                max={100}
                value={fillOpacity}
                onChange={(e: any) => setFillOpacity(e.target.value)}
                id=""
                className=""
              />
            </div>
            <div className="mt-4">
              <p>Fill color</p>
              <ChromePicker
                color={bgIcon}
                onChange={(color: any) => setBgIcon(color?.hex)}
              />
            </div>
          </div>
        </div>
      )}

      {bgComp && (
        <div>
          <div className="mt-5 px-5 ">
            <div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="rounded" className="font-medium">
                    Rounded
                  </label>
                  <p className="font-semibold text-sm">{`${rounded}px`}</p>
                </div>{" "}
                <input
                  type="range"
                  value={rounded}
                  max={100}
                  onChange={(e: any) => setRounded(e.target.value)}
                  name=""
                  id=""
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <label htmlFor="padding" className="font-medium">
                    Padding
                  </label>
                  <p className="font-semibold text-sm">{`${padding}px`}</p>
                </div>{" "}
                <input
                  type="range"
                  name=""
                  id=""
                  value={padding}
                  max={40}
                  onChange={(e: any) => setPadding(e.target.value)}
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="shadow">Shadow</label>
                <input
                  type="range"
                  name=""
                  max={5}
                  onChange={(e: any) => setShadow(e.target.value)}
                  value={shadow}
                  id=""
                  className=""
                />
                <div className="flex justify-between ">
                  {myShadow.map((item) => (
                    <div className=" font-semibold text-sm">
                      <p>{item.toLocaleUpperCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 mt-5">
            <p>Background</p>
            <ChromePicker
              color={color}
              onChange={(color: any) => setColor(color?.hex)}
            />
          </div>
        </div>
      )}

      <div className="bg-slate-100 w-5/6 mx-auto py-20 mt-16">
        <div
          style={{ background: color }}
          className={` shadow-${myShadow[shadow]}   rounded-xl flex justify-center items-center  mx-auto size-60 `}
        >
          <HiAcademicCap
            style={{
              width: `${sizeValue}px`,
              height: `${sizeValue}px`,
              rotate: `${rotateValue}deg`,
              borderWidth: borderValue,
              borderColor: borderColor,
              fillOpacity: `${fillOpacity}%`,
              backgroundColor: bgIcon,
              fill: borderColor,
              borderRadius: `${rounded}px`,
              padding: `${padding}px`,
            }}
            className={`mx-auto  text-white`}
          />
        </div>
      </div>
    </div>
  );
}
