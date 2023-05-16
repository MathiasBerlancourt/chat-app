import React, { useState, useEffect } from "react";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URI}/contacts`
        );
        setIsLoading(false);
        setContacts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="bg-white shadow-md rounded-t-lg p-4 max-w-md w-full h-[57rem]">
        {contacts.map((contact) => (
          <div key={contact._id} className="mb-4">
            <div className="font-bold text-gray-600">{contact.username}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default Contacts;
