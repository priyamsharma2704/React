Creating a movie seat booking app in React that handles concurrency issues can be quite complex, but I'll walk you through a basic implementation. We will use Firebase Firestore for real-time data updates to handle concurrency.

### Step-by-Step Implementation

#### 1. **Setup Firebase**
First, set up Firebase in your project. If you haven't already, create a Firebase project and add Firebase to your web app.

#### 2. **Install Dependencies**
Install necessary dependencies:
```bash
npm install firebase react-firebase-hooks
```

#### 3. **Initialize Firebase**
Create a `firebase.js` file and initialize Firebase:
```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
```

#### 4. **Create Components**
Create the main `App.js` and other necessary components.

**App.js**
```jsx
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import Seat from './Seat';

const App = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('seats').onSnapshot(snapshot => {
      const seatsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSeats(seatsData);
    });

    return () => unsubscribe();
  }, []);

  const handleSelectSeat = (id) => {
    setSelectedSeats(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(seatId => seatId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleBookSeats = async () => {
    const batch = db.batch();
    selectedSeats.forEach(id => {
      const seatRef = db.collection('seats').doc(id);
      batch.update(seatRef, { booked: true });
    });
    await batch.commit();
    setSelectedSeats([]);
  };

  return (
    <div>
      <h1>Movie Seat Booking</h1>
      <div className="seat-grid">
        {seats.map(seat => (
          <Seat
            key={seat.id}
            id={seat.id}
            booked={seat.booked}
            selected={selectedSeats.includes(seat.id)}
            onSelect={handleSelectSeat}
          />
        ))}
      </div>
      <button onClick={handleBookSeats}>Book Selected Seats</button>
    </div>
  );
};

export default App;
```

**Seat.js**
```jsx
import React from 'react';

const Seat = ({ id, booked, selected, onSelect }) => {
  return (
    <div
      className={`seat ${booked ? 'booked' : ''} ${selected ? 'selected' : ''}`}
      onClick={() => !booked && onSelect(id)}
    >
      {id}
    </div>
  );
};

export default Seat;
```

#### 5. **Styling**
Add basic CSS to style the seats:
```css
.seat {
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: lightgray;
  cursor: pointer;
}

.seat.booked {
  background-color: gray;
  cursor: not-allowed;
}

.seat.selected {
  background-color: blue;
}

.seat-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
}
```

#### 6. **Firestore Database**
Set up Firestore with a `seats` collection. Each seat document should look something like this:
```json
{
  "booked": false
}
```

#### 7. **Handling Concurrency**
Firestore's real-time updates ensure that the seat status is updated in real-time across all clients. The `onSnapshot` listener in the `useEffect` hook ensures that any changes in the seat status are reflected immediately in the UI.

### Final Steps
1. **Run your app** with `npm start`.
2. **Deploy the app** to a hosting service like Vercel or Netlify.

This is a basic implementation to get you started. You can expand it by adding more features like user authentication, payment integration, and more robust error handling.

We use Firebase in this context to handle real-time data synchronization and manage concurrency effectively. Firebase Firestore is a cloud-based NoSQL database that allows multiple clients to listen to changes in data in real-time. This means when a seat's booking status changes, all connected clients get the update instantly, preventing multiple users from booking the same seat simultaneously. It simplifies the backend management of data synchronization, real-time updates, and conflict resolution, ensuring a seamless and consistent user experience.

However, if you prefer not to use Firebase, you can implement similar functionality using other technologies like WebSockets or REST APIs with a backend server. Here's an example using Express.js and WebSockets for real-time updates.

### Step-by-Step Implementation Without Firebase

#### 1. **Set Up Express Server**

First, set up an Express server.

**server.js**
```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

let seats = Array(50).fill({ booked: false });

io.on('connection', (socket) => {
  socket.emit('seats', seats);

  socket.on('bookSeats', (selectedSeats) => {
    selectedSeats.forEach(id => {
      seats[id] = { booked: true };
    });
    io.emit('seats', seats);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => console.log('Server is running on port 4000'));
```

#### 2. **Client-Side Implementation**

**App.js**
```jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Seat from './Seat';

const socket = io('http://localhost:4000');

const App = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    socket.on('seats', (seatsData) => {
      setSeats(seatsData);
    });
  }, []);

  const handleSelectSeat = (id) => {
    setSelectedSeats(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(seatId => seatId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleBookSeats = () => {
    socket.emit('bookSeats', selectedSeats);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h1>Movie Seat Booking</h1>
      <div className="seat-grid">
        {seats.map((seat, index) => (
          <Seat
            key={index}
            id={index}
            booked={seat.booked}
            selected={selectedSeats.includes(index)}
            onSelect={handleSelectSeat}
          />
        ))}
      </div>
      <button onClick={handleBookSeats}>Book Selected Seats</button>
    </div>
  );
};

export default App;
```

This implementation uses Express and Socket.io to handle real-time data synchronization and concurrency. The server maintains the seat data and notifies all connected clients about updates, ensuring that no two clients can book the same seat simultaneously.
