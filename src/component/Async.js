import React, { useEffect, useState } from 'react';
import axios from 'axios';

const controller = new AbortController();
const signal = controller.signal;

const fetchData = () => {
  const url = 'https://randomuser.me/api/?results=20';
  return axios
    .get(url, { signal })
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      return results;
    })
    .catch((err) => console.log(err));
};

const Population = () => {
  const [people, setPeople] = useState([]);
  const [location, setLocation] = useState([]);

  const flatnnedLocation = (el) => {
    const firstLocation = el[0];
    return Object.keys(...firstLocation);
  };

  const Location = (el) => {
    for (const item of el) {
      const strng = Object.values(item);
      console.log(strng);
    }
  };

  useEffect(() => {
    fetchData().then((el) => {
      setPeople(el);

      // setLocation used 'flatnnedLocation' function for setting the 'loaction' state.
      setLocation(flatnnedLocation(el.map((el) => [el.location])));
      Location(el.map((el) => el.location));
    });
    //Clean up function
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Population</h1>

      <table>
        <thead>
          <tr>
            {location.map((el, i) => (
              <td key={i}>{el}</td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Population;
