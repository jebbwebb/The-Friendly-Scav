import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Market() {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (currentPage) => {
    const data = fetch('https://api.tarkov.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
        items(limit: 10 offset:${
          (currentPage == null ? 0 : currentPage) * 10
        } ) {
          id
          name
          image512pxLink
          avg24hPrice
         wikiLink
        }
      }`,
      }),
    })
      .then((r) => r.json())
      .then((r) => setItems(r.data.items));
    console.log(items);
  };

  const handlePageClick = async (data) => {
    let itemsFromServer = await fetchData(data.selected);
    console.log(itemsFromServer);
    setItems(itemsFromServer.data.items);
  };

  const listedItems = items
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => {
      return (
        <>
          <div class="container w-100  ">
            <div class="row  text-center">
              <div id="item-image" class="col-1  border">
                <h2>item</h2>
                <div class="row">
                  <img class="w-100" src={item.image512pxLink}></img>
                </div>
              </div>
              <div class="col-4 col-lg-3  border">
                <h2>Title</h2>
                <div class="row">
                  <h6 id="item-name">{item.name}</h6>
                </div>
              </div>
              <div id="item-wiki" class="col-3 border">
                <h2>Wiki</h2>
                <div class="row w-100">
                  <a href={item.wikiLink}>
                    <h6>Click Here</h6>
                  </a>
                </div>
              </div>
              <div class="col-5  border  ">
                <h2>Avg price</h2>
                <div class="row    ">
                  <h6 class="text-center">{item.avg24hPrice}₽</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  return (
    <>
      <div class="row text-center  w-100 ">
        <div class="col   pt-3 ">
          <input
            class="w-50 text-center"
            className="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>

      {listedItems}

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={200}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination  justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      ></ReactPaginate>
    </>
  );
}
