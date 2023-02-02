import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

export default function Market() {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [query, setQuery] = useState('');
  useEffect(() => {
    fetch('https://api.tarkov.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          items(limit: 10 offset:10 ) {
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
  }, []);

  const handleSearch = () => {};
  console.log(items);
  const filterTest = items.filter((item) =>
    item.name.toLowerCase().includes('shot')
  );
  console.log(query);
  const listedItems = items
    .filter((item) => item.name.toLowerCase().includes(query))
    .map((item) => {
      return (
        <>
          <div class="row text-center bg-success">
            <div class="col"></div>
          </div>
          <div class="container">
            <div class="row bg-warning text-center">
              <div class="col-1  border">
                <h2>item</h2>
                <div class="row">
                  <img src={item.image512pxLink}></img>
                </div>
              </div>
              <div class="col-4 border">
                <h2>Title</h2>
                <div class="row">{item.name}</div>
              </div>
              <div class="col-1 border">
                <h2>Wiki</h2>
                <div class="row">
                  <a href={item.wikiLink}>Click Here</a>
                </div>
              </div>
              <div class="col border">
                <h2>Avg price</h2>
                <div class="row">{item.avg24hPrice}₽</div>
              </div>
              <div class="col border">
                <h2>Sell to trader</h2>
                <div class="row">15,942₽</div>
              </div>
            </div>
          </div>
        </>
      );
    });
  return (
    <>
      <div class="row text-center bg-success">
        <div class="col">
          <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
        </div>
      </div>

      {listedItems}
    </>
  );
}
