const Table = () => {
  const data = [
    {
      sino: 1,
      Links: "www.google.com",
      prefix: "prefixsample",
      tags: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
      ],
      selectedTags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    },
    {
      sino: 2,
      Links: "www.google.com",
      prefix: "prefixsample",
      tags: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
      ],
      selectedTags: ["Tag 1", "Tag 2"],
    },
    {
      sino: 3,
      Links: "www.google.com",
      prefix: "prefixsample",
      tags: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
      ],
      selectedTags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    },
    {
      sino: 4,
      Links: "www.google.com",
      prefix: "prefixsample",
      tags: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
      ],
      selectedTags: ["Tag 1"],
    },
    {
      sino: 5,
      Links: "www.google.com",
      prefix: "prefixsample",
      tags: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
      ],
      selectedTags: ["Tag 1", "Tag 2", "Tag 3"],
    },
  ];
  return (
    <div className="h-[464px] sm:h-[497px] mb-10 w-[312px] sm:w-max mx-auto overflow-scroll sm:overflow-hidden sm:p-4 bg-[#F5F5F5]  ">
      <h1 className="sm:text-xl sm:font-semibold font-semibold bg-[#FAFAFB]">
        Uploads
      </h1>
      <table className="bg-[#F5F5F5] border-spacing-y-3 border-separate sm:w-full  ">
        <thead className="p-4">
          <tr className="bg-[#F5F5F5]">
            <th className="sticky sm:static left-[-1px] pl-[16px] bg-[#F5F5F5]">
              SI No.
            </th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.sino} className="bg-white m-4">
              <td className="sticky sm:static sm:bg-white bg-[#F5F5F5] left-[-1px]  p-[16px]">
                {val.sino}
              </td>
              <td className="bg-whit p-4">
                <a href={val.Links} target="#blank">
                  {val.Links}
                </a>
              </td>
              <td className="bg-white p-4">{val.prefix}</td>
              <td className="bg-white  p-4">
                <select>
                  <option value="none" selected disabled hidden>
                    Select Tag
                  </option>
                  {val.tags.map((linkVal, index) => (
                    <option key={index}>{linkVal}</option>
                  ))}
                </select>
              </td>
              <td className="bg-white flex gap-1  p-4 ">
                {val.selectedTags.map((selTags) => (
                  <span className="bg-blue-500 flex items-center  text-white p-1 gap-1 text-sm rounded w-max">
                    {selTags}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
