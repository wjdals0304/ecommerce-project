// src/components/Pagination.tsx
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 25px 0 50px 0;
`;

const PageButton = styled.button<{isActive?: boolean}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({isActive}) => (isActive ? '#001C30' : '#B6BBC4')};
  background-color: ${({isActive}) => (isActive ? '#D7D7D7' : '#F5F7F8')};
  color: ${({isActive}) => (isActive ? '#001C30' : '#8E96A4')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &:hover {
    background-color: ${({isActive}) => !isActive && '#f5f5f5'};
  }
`;

const PrevButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #8e96a4;
  background-color: #8e96a4;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const NextButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #001c30;
  background-color: #001c30;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Dots = styled.span`
  color: #8e96a4;
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getPageList = (
  perPage: number,
  currentPage: number,
  totalPages: number,
): number[] => {
  const pages: number[] = [];

  for (let i = 0; i < perPage; i++) {
    const page = currentPage + i;
    if (page > 1 && page < totalPages) {
      pages.push(page);
    }
  }

  return pages;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const perPage = 4;
  const pageList = getPageList(perPage, currentPage, totalPages);

  return (
    <PaginationContainer>
      <PrevButton
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </PrevButton>
      <PageButton isActive={currentPage === 1} onClick={() => onPageChange(1)}>
        1
      </PageButton>
      {currentPage >= perPage && <Dots>...</Dots>}

      {pageList.map(page => (
        <PageButton
          key={page}
          isActive={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {currentPage < totalPages - 2 && <Dots>...</Dots>}

      {totalPages > 1 && (
        <PageButton
          isActive={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </PageButton>
      )}
      <NextButton
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </NextButton>
    </PaginationContainer>
  );
}
