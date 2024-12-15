import React from "react";

function Pagenation() {
  return (
    <div class="pagination">
      <button class="pagination__arrow pagination__arrow--left">◀</button>
      <ul class="pagination__list">
        <li class="pagination__item pagination__item--active">1</li>
        <li class="pagination__item">2</li>
        <li class="pagination__item">3</li>
        <li class="pagination__item">4</li>
        <li class="pagination__item">5</li>
        <li class="pagination__item pagination__dots">...</li>
        <li class="pagination__item">20</li>
      </ul>
      <button class="pagination__arrow pagination__arrow--right">▶</button>
    </div>
  );
}

export default Pagenation;
