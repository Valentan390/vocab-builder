import { useMemo } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Icon from "../Icon/Icon";
import { useAppSelector } from "../../hooks/useReduxHooks";

import {
  selectAllWords,
  selectUserWords,
} from "../../redux/word/wordSelectors";
import { ICreateNewWord } from "../../helpers/interfeceData";

import ProgressBar from "../ProgressBar/ProgressBar";
import ActionsBtn from "../Button/ActionsBtn/ActionsBtn";
import {
  StyledWordsTable,
  StyledWordsTableTd,
  StyledWordsTableTh,
  StyledWordsTableThead,
  StyledWordsTableTr,
  StyledWordsTableWrapper,
} from "./WordsTable.styled";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import AddDictionaryBtn from "../Button/AddDictionary/AddDictionaryBtn";

const columnHelper = createColumnHelper<ICreateNewWord>();

const WordsTable = () => {
  const { pathname } = useLocation();
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });

  const columns = useMemo(
    () => [
      columnHelper.accessor("en", {
        header: () => (
          <div
            style={{
              display: "flex",
              // gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Word
            {!isMobail ? (
              <Icon iconName="icon-united-kingdom" width="28" height="28" />
            ) : null}
          </div>
        ),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.ua, {
        id: "ua",
        cell: (info) => info.getValue(),
        header: () => (
          <div
            style={{
              display: "flex",
              // gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Translation
            {!isMobail && (
              <Icon iconName="icon-ukraine" width="28" height="28" />
            )}
          </div>
        ),
      }),
      ...(pathname === "/recommend" || !isMobail
        ? [
            columnHelper.accessor("category", {
              header: () => "Category",
              cell: (info) => info.renderValue(),
            }),
          ]
        : []),
      ...(pathname === "/recommend"
        ? []
        : [
            columnHelper.accessor("progress", {
              header: () => "Progress",
              cell: (info) => (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {!isMobail ? `${info.getValue()}%` : null}
                  <ProgressBar value={info.getValue()} />
                </div>
              ),
            }),
          ]),

      columnHelper.accessor("_id", {
        header: "",
        cell: (info) =>
          pathname === "/dictionary" ? (
            <ActionsBtn id_Word={info.getValue()} />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "2px",
                fontSize: "14px",
                fontWeight: "var(--medium)",
                lineHeight: "normal",
              }}
            >
              {!isMobail && "Add to dictionary"}
              <AddDictionaryBtn id_Word={info.getValue()} />
            </div>
          ),
      }),
    ],

    [isMobail, pathname]
  );

  const data = useAppSelector(
    pathname === "/dictionary" ? selectUserWords : selectAllWords
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <StyledWordsTableWrapper>
      <StyledWordsTable>
        <StyledWordsTableThead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledWordsTableTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledWordsTableTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </StyledWordsTableTh>
              ))}
            </StyledWordsTableTr>
          ))}
        </StyledWordsTableThead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledWordsTableTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledWordsTableTd>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledWordsTable>
    </StyledWordsTableWrapper>
  );
};

export default WordsTable;
