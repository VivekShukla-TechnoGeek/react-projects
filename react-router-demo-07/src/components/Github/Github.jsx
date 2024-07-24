import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/VivekShukla-TechnoGeek")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-neutral-500 text-yellow-50 p-4 text-3xl">
      <h2>Github user name: {data.login}</h2>
      <h4>Public repos: {data.public_repos}</h4>
      <img src="https://avatars.githubusercontent.com/u/162498113?v=4" alt="Git picture" width={300}/>
    </div>
  );
}

export default Github;

export  const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/VivekShukla-TechnoGeek')
    return response.json();
}
