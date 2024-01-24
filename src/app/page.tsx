"use client"
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Book {
  Cover: string;
  Title: string;
  Description: string;
}

const Home = () => {
  const [authorData, setAuthorData] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "books");
        const querySnapshot = await getDocs(collectionRef);

        if (querySnapshot.empty) {
          console.log("No documents found in 'books' collection.");
        } else {
          const data: Book[] = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data() as Book);
          });
          console.log(data);
          setAuthorData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Author Data:</h1>
      <ul>
        {authorData.map((book, index) => (
          <li key={index}>
            <img src={book.Cover} alt={`Cover for ${book.Title}`} />
            <p><strong>Title:</strong> {book.Title}</p>
            <p><strong>Description:</strong> {book.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
