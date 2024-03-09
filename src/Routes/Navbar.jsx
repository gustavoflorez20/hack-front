import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://hack-back-tpx5.onrender.com", {
        params: {
          page: 1,
          limit: 6,
          text: searchQuery,
        },
      });
      setPosts(response.data);
      console.log("Respuesta del backend:", response.data);

      //onSearch(searchQuery);
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 flex-col px-3">
      <img
        className="w-20 bg-white rounded-full"
        src="https://res.cloudinary.com/djkxqbsns/image/upload/v1709975475/nuclio_xyq8wl.png"
        alt="Logo"
      />

      <form onSubmit={handleSubmit} className="ml-8 flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Cual es tu duda pequeño Junior..."
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        >
          Consulta
        </button>
      </form>
      
      <div className="flex gap-5 ">

      
      {posts.map((post, id) => (
        <div key={id}>
          <br/>
          <div className="flex justify-center mt-4 flex-col ">
            <div className="bg-blue-400">
              <h2>{post.title}</h2>
            </div>
            <div className="bg-red-400">
              <h2>{post.author}</h2>
            </div>
            <div className="bg-orange-400">
              <h2>{post.text}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SearchBar;
