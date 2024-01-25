import { createContext, useState } from "react";
export const DataContext = createContext();
export function RowDataProvider({ children }) {
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
  const [rowData, setNewRowData] = useState(data);
  function addNewRowData() {
    setNewRowData([
      ...rowData,
      {
        sino: 6,
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
    ]);
  }
  return (
    <DataContext.Provider value={(rowData, addNewRowData)}>
      {children}
    </DataContext.Provider>
  );
}
