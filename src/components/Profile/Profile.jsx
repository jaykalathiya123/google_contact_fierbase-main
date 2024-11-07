import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fierbase"; // Correct path to Firebase config

const Profile = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(contact);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, "Contact", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContact(docSnap.data());
        } else {
          setError("No such contact found!");
        }
      } catch (error) {
        setError("Error fetching contact.");
        console.error("Error fetching contact:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-5">
      <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
</svg>

      </div>
      <h1 className="text-4xl font-bold text-center mb-6">{`${contact.fname} ${contact.lname}`}</h1>
      <div className="mb-2">
        <h3 className="font-bold ">Email: <span className="font-normal"> {contact.email || "Not Enter"}</span></h3> 
      </div>
      <div className="mb-2">
      <h3 className="font-bold ">Phone: <span className="font-normal">  {contact.phone || "Not Enter"}</span></h3> 
        <strong></strong>
      </div>
      <div className= "mb-2">
      <h3 className="font-bold ">Birthday: <span className="font-normal">  {contact.bday}-{contact.bmonth}- {contact.byear}</span></h3> 
      </div>
      <div className="mb-2">
      <h3 className="font-bold ">Job: <span className="font-normal">  {contact.jobtitle || "Not Enter" }</span></h3> 
      <h3 className="font-bold ">Company: <span className="font-normal">  {contact.company || "Not Enter"}</span></h3> 
      </div>
      <div className="mb-2">
      <h3 className="font-bold ">Notes: <span className="font-normal">  {contact.notes || "Not Enter"}</span></h3> 
      </div>
    </div>
  );
};

export default Profile;
