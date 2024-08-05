import React, { useEffect, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

const JobCandidates = ({ candidatesApplied }) => {
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsClient(true);

    if (candidatesApplied) {
      const formattedData = candidatesApplied.map((item) => ({
        title: item.job.title,
        id: item.user,
        resume: (
          <Link
            legacyBehavior
            href={`https://jobbee.s3.amazonaws.com/${item.resume}`}
          >
            <a
              className="text-success text-center ml-4"
              rel="noreferrer"
              target="_blank"
            >
              <b>
                <i aria-hidden className="fas fa-download"></i> View Resume
              </b>
            </a>
          </Link>
        ),
        appliedAt: item.appliedAt.substring(0, 10),
      }));

      setData(formattedData);
    }
  }, [candidatesApplied]);

  const columns = [
    {
      name: "Job Name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "User ID",
      sortable: true,
      selector: (row) => row.id,
    },
    {
      name: "Candidate Resume",
      sortable: true,
      selector: (row) => row.resume,
    },
    {
      name: "Applied At",
      sortable: true,
      selector: (row) => row.appliedAt,
    },
  ];

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5">
        <h4 className="my-5">
          {isClient &&
            candidatesApplied &&
            `${candidatesApplied.length} Candidates applied to this job`}
        </h4>
        {isClient && (
          <DataTable columns={columns} data={data} pagination responsive />
        )}
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default JobCandidates;

// import React from "react";

// import Link from "next/link";
// import DataTable from "react-data-table-component";

// const JobCandidates = ({ candidatesApplied }) => {
//   const columns = [
//     {
//       name: "Job Name",
//       sortable: true,
//       selector: (row) => row.title,
//     },
//     {
//       name: "User ID",
//       sortable: true,
//       selector: (row) => row.id,
//     },
//     {
//       name: "Candidate Resume",
//       sortable: true,
//       selector: (row) => row.resume,
//     },
//     {
//       name: "Applied At",
//       sortable: true,
//       selector: (row) => row.appliedAt,
//     },
//   ];

//   const data = [];

//   candidatesApplied &&
//     candidatesApplied.forEach((item) => {
//       console.log(item);
//       data.push({
//         title: item.job.title,
//         id: item.user,
//         salary: item.salary,
//         resume: (
//           <Link
//             legacyBehavior
//             href={`https://jobbee.s3.amazonaws.com/${item.resume}`}
//           >
//             <a
//               className="text-success text-center ml-4"
//               rel="noreferrer"
//               target="_blank"
//             >
//               <b>
//                 <i aria-hidden className="fas fa-download"></i> View Resume
//               </b>
//             </a>
//           </Link>
//         ),
//         appliedAt: item.appliedAt.substring(0, 10),
//       });
//     });

//   return (
//     <div className="row">
//       <div className="col-2"></div>
//       <div className="col-8 mt-5">
//         <h4 className="my-5">
//           {candidatesApplied &&
//             `${candidatesApplied.length} Candidates applied to this job`}
//         </h4>
//         <DataTable columns={columns} data={data} pagination responsive />
//       </div>
//       <div className="col-2"></div>
//     </div>
//   );
// };

// export default JobCandidates;
