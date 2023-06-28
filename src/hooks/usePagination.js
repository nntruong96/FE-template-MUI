import { useState } from 'react';

const usePagination = () => {
  const [pagination, setPagination] = useState({
    page_size: 10,
    page_number: 0,
    total: 0,
  });

  const onPageChange = ({ selected }) => {
    setPagination((prev) => ({ ...prev, page_number: selected }));
  };

  const getDataSlice = (showData) => {
    return showData?.slice(
      pagination.page_number * pagination.page_size,
      pagination.page_number * pagination.page_size + pagination.page_size
    );
  };

  return [pagination, setPagination, onPageChange, getDataSlice];
};

export default usePagination;
