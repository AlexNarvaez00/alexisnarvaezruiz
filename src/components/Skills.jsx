import "./Skills.css";

import Html from "./icons/Html";
import Css from "./icons/Css";
import Js from "./icons/Js";
import Php from "./icons/Php";
import Java from "./icons/Java";
import Python from "./icons/Python";

import Bootstrap from "./icons/Bootstrap";
import Tailwind from "./icons/Tailwind";

import React from "./icons/React";
import Laravel from "./icons/Laravel";
import Ci from "./icons/Ci";
import Django from "./icons/Django";
import SpringBoot from "./icons/Spring";

const Skills = ({ ...props }) => {
  return (
    <ul className="w-full grid grid-cols-6 md:grid-cols-7 gap-3 md:gap-5 text-gray-800">
      <li className="">
        <Html className={`icon-skill`} />
      </li>
      <li className="">
        <Css className={`icon-skill`}/>
      </li>
      <li className="">
        <Js className={`icon-skill`}/>
      </li>
      <li className="">
        <Php className={`icon-skill`}/>
      </li>
      <li className="">
        <Java className={`icon-skill`}/>
      </li>
      <li className="">
        <Python className={`icon-skill`}/>
      </li>
      <li className="">
        <Bootstrap className={`icon-skill`}/>
      </li>
      <li className="">
        <Tailwind className={`icon-skill`}/>
      </li>
      <li className="">
        <React className={`icon-skill`}/>
      </li> 
      <li className="">
        <Laravel className={`icon-skill`}/>
      </li>
      <li className="">
        <Ci className={`icon-skill`}/>
      </li>
      <li className="">
        <Django className={`icon-skill`}/>
      </li>
      <li className="">
        <SpringBoot className={`icon-skill`}/>
      </li>
    </ul>
  );
};

export default Skills;
