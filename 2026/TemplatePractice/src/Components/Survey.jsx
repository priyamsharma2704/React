import React from 'react'

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


const SelectedPhotoCounter = ({ selectedImg }) => {
    // Task 2B
    // Display a count of the number of selected images
    return (
        <div>Number of selected photos: {selectedImg.size}</div>
    );
};

const SearchBar = ({ setSearchTerm }) => {
    // Task 3
    // Build a live search bar that filters the list of photos
    // by author name
    function handleSearch(value) {
        setSearchTerm(value);
    }
    return (
        <div><input type='text' placeholder='search...' onChange={(e) => handleSearch(e.target.value)}></input></div >
    );
};

const GalleryItem = ({ photo, setSelectedImg, selectedImg }) => {
    const isSelected = selectedImg.has(photo.id);
    const onPhotoClick = (id) => {
        // Task 2A
        // When a user clicks the image, add a green border to it
        // When they click it again, remove the green border
        setSelectedImg(id);
    };

    return (
        <div style={{ border: isSelected ? '1px solid green' : 'none' }} className="gallery-item" onClick={() => onPhotoClick(photo.id)}>
            <img src={photo.download_url} style={{ width: 100 }} />
            <span>{photo.author}</span>
        </div>
    );
};

const Gallery = ({ photos, setSelectedImg, selectedImg }) => {
    return (
        <div className="gallery">
            {photos.map((photo) => {
                return <GalleryItem key={photo.id} photo={photo} setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
            })}
        </div>
    );
};

export default function Survey() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImg, setSelectedImg] = useState(new Set());

    useEffect(() => {
        loadPhotos().then((resp) => setData(resp))
    }, []);

    var filteredItems = data.filter((item) => {
        return item.author.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function setSelectedImg2(id) {
        var selectedImgCopy = new Set([...selectedImg]);
        if (selectedImgCopy.has(id)) {
            selectedImgCopy.delete(id);
        }
        else
            selectedImgCopy.add(id);
        setSelectedImg(selectedImgCopy);
    }

    return (
        <div id="app">
            <SearchBar setSearchTerm={setSearchTerm} />
            <SelectedPhotoCounter selectedImg={selectedImg} />
            <Gallery photos={filteredItems} setSelectedImg={setSelectedImg2} selectedImg={selectedImg} />
        </div>
    );
};
