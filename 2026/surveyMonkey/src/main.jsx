import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const { useState, useEffect } = React;

const loadPhotos = async () => {
  // Task 1A
  // Load the data from:
  // GET https://picsum.photos/v2/list?limit=10
  // Display the photo and the author's name underneath
  const resp = await fetch("https://picsum.photos/v2/list?limit=10");
  const data = await resp.json();
  return data;

};

const SelectedPhotoCounter = ({ selected }) => {
  // Task 2B
  // Display a count of the number of selected images
  return (
    <div>Number of selected photos: {selected.length}</div>
  );
};

const SearchBar = ({ updateSearch }) => {
  // Task 3
  // Build a live search bar that filters the list of photos
  // by author name
  function handleSearch(value) {
    updateSearch(value)
  }
  return (
    <div><input type="text" placeholder='search...' onChange={(e) => { handleSearch(e.target.value) }} ></input></div>
  );
};

const GalleryItem = ({ photo, onPhotoClick, selected }) => {

  var isSelected = selected.indexOf(photo.id) !== -1;
  return (
    <div style={{ border: isSelected ? "2px solid green" : "none" }} className="gallery-item" onClick={() => onPhotoClick(photo.id)}>
      <img src={photo.download_url} style={{ width: 100 }} />
      <span>{photo.author}</span>
    </div>
  );
};

const Gallery = ({ photos, onPhotoClick, selected }) => {

  return (
    <div className="gallery">
      {photos.map((photo) => {
        return <GalleryItem key={photo.id} photo={photo} onPhotoClick={onPhotoClick} selected={selected} />
      })}
    </div>
  );
};

const App = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    loadPhotos().then((data) => setData(data));
  }, []);

  const photos = [
    { id: 1, author: 'Alice' },
    { id: 2, author: 'Bob' },
    { id: 3, author: 'Charlie' }
  ];

  const onPhotoClick = (id) => {
    // Task 2A
    // When a user clicks the image, add a green border to it
    // When they click it again, remove the green border
    var selectedDupe = [...selected];
    var index = selectedDupe.indexOf((id));
    if (index == -1) setSelected([...selectedDupe, id])
    else {
      setSelected([...selectedDupe.slice(0, index), ...selectedDupe.slice(index + 1)]);
    }
  };

  var filteredData = data.filter((user) => user.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <div id="app">
      <SearchBar updateSearch={setSearch} />
      <SelectedPhotoCounter selected={selected} />
      <Gallery photos={filteredData} onPhotoClick={onPhotoClick} selected={selected} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)