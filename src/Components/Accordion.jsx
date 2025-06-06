import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { companies } from "../Data/companyData";

const AccordionSection = () => {
  return (
    <div className="sm:px-40 sm:py-10 px-4 py-4">
      {companies.map((company, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
         <Typography
  sx={{
    fontSize: {
      xs: '16px',   // for extra-small screens (0px+)
      sm: '20px',   // for small screens (600px+)
      md: '26px',   // for medium screens (900px+)
    },
    fontWeight: 500, // MUI expects numeric values
  }}
>
  {company.name}
</Typography>


          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-none pl-5 text-3xl ">
              {company.items.map((item, itemIndex) => (
                <li key={itemIndex} className="relative pl-6 mb-2">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionSection;