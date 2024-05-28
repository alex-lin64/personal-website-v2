import React from "react";

import WorkUnit from "../../../components/workUnit/workUnit";
import workData from "../../../public/assets/work";

export default function WorkPage() {
  return (
    <div>
      {workData.map((work, index) => (
        <div key={index}>
          <WorkUnit
            startDate={work.startDate}
            endDate={work.endDate}
            title={work.title}
            company={work.company}
            companyLink={work.companyLink}
            description={work.description}
            skills={work.skills}
          />
        </div>
      ))}
    </div>
  );
}
