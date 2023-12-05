import { Avatar, Paper, Typography } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase"

interface userDetails {
  displayName: string | null
  email: string | null
  photoURL: string | null
}
const About = () => {
  const aboutContent = [
    {
      id: 1,
      title: "Mission",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
    {
      id: 2,
      title: "Vision",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
    {
      id: 3,
      title: "Summary",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
  ];

  const [userDetails, setUserDetails] = useState<userDetails | null>(null)
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          
          // User is signed in.
          // Access the user's information here
          setUserDetails({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
            // Add any other user details you want to retrieve
          });
          console.log(userDetails);
          
        } else {
          // User is signed out.
          setUserDetails(null);
        }
      })
    }
    return () => unsubscribe()
  }, [])
  return (
    <div className="flex flex-col gap-3 py-3 md:py-[4rem] justify-around valid-height items-center w-full">
      {userDetails && userDetails.displayName ? userDetails.displayName : "None"}
      {userDetails && userDetails.photoURL ? <Avatar src={userDetails.photoURL}/> : "None"}
      {
        aboutContent.map((content) => (
      <Paper
        component="div"
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            md: "80%",
          },
          backgroundColor: "lightgray",
          padding: 3,
        }}
        key={content.id}
      >
        <h1 className="text-center font-bold text-3xl">{content.title}</h1>
        <Typography
        paragraph={true}
          component="p"
          sx={{
            width: "100%",
          }}
        >
          {content.body}
        </Typography>
      </Paper>
        ))
      }
    </div>
  );
};

export default About;
