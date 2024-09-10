import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if(!btn) return;

      const goToPage = +btn.dataset.goto
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    // start page 1 + pages
    if (currentPage === 1 && numPages > 1)
      return `
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
    // start page 1 + no pages
    if (currentPage === 1 && numPages === 1) return '';
    // start last page
    if (numPages === currentPage)
      return `
            <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
        `;
    // other pages
    return `
        <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
  }

  //   _generatePaginationPrev() {
  //     return `
  //         <button class="btn--inline pagination__btn--prev">
  //             <svg class="search__icon">
  //                 <use href="${icons}#icon-arrow-left"></use>
  //             </svg>
  //             <span>Page ${currentPage - 1}</span>
  //         </button>
  //     `;
  //   }

  //   _generatePaginationNext() {
  //     return `
  //         <button class="btn--inline pagination__btn--next">
  //             <span>Page ${currentPage + 1}</span>
  //             <svg class="search__icon">
  //                 <use href="${icons}#icon-arrow-right"></use>
  //             </svg>
  //         </button>
  //     `;
  //   }
}

export default new PaginationView();
