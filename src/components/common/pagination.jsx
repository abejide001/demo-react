import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
export default function pagination(props) {
const { itemCount, pageSize, onPageChange, currentPage } = props 
const pagesCount = Math.ceil(itemCount / pageSize);
const pages = _.range(1, pagesCount + 1);
if (pagesCount === 1) return null;
  return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
        {pages.map(page => (
            <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}><a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>          
        ))}
        </ul>
      </nav>
  )
}

pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}