export type handlePageClickType = (event: { selected: number }) => void;

export interface PaginationProps {
  pageCount: number;
  handlePageClick: handlePageClickType;
}
