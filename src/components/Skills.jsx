//  import React from "react";
//  import skills from "../data/skills";
//  import Title from "./Title";

//  function Skills() {
//      return (
//          <div className="flex flex-col md:flex-row justify-center my-20">
//              <div className="w-full md:w-7/12">
//                  <Title>Skills</Title>
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                      {skills.map((skill) => (
//                          <button className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900">
//                              <span className="font-medium">{skill.name}</span>
//                          </button>
//                      ))}
//                  </div>
//              </div>
//          </div>
//      );
//  }

//  export default Skills;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skills from "../data/skills.js";
import Title from "./Title";

function Skills() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center my-20">
                <div className="md:w-7/12">
            <Title>Skills</Title>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill) => (
                            <button className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900">
                                <span className="font-medium">
                                    {skill.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;