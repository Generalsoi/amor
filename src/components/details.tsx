import React, { FC } from "react";
import FineGirl from "../assets/amor2.jpg";
import TypewriterComponent from "typewriter-effect";

export const Details: FC = () => {
  return (
    <div className="px-4 md:px-20 py-6 font-ibmPlexMono">
      <h1 className="md:text-8xl text-5xl font-extrabold animate-swipeIn">
        Hey baby
      </h1>

      <p className="mt-8 md:text-5xl text-3xl px-4 transition-all animate-swipeInTwo delay-1000">
        It's valentine, and it's really sad that we don't get to see. Hence, i
        decided to build this for you.
      </p>

      <p className="mt-10">
        Meanwhile, just take a look at how pretty you look here:{" "}
      </p>

      <div className="flex items-center justify-center mt-8">
        <img
          src={FineGirl}
          alt="fine-girl"
          className="w-80 h-80 object-fill rounded-[50%]"
        />
      </div>

      <div className="mt-10 px-4">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter

              .typeString("I just want to tell you that I love you so much.  ")
              .typeString("No matter the distance, I will always love you.   ")
              .typeString(
                "Time and time again, I keep thanking God for bringing you my way in camp.  "
              )
              .typeString(
                " This is because if we were not in same platoon, I definitely wouldn't have known you.   "
              )
              .typeString("You are a blessing to me.  ")
              .typeString("And I love you so much.  ")
              .typeString("Like I always say, I am committed to you.  ")
              .typeString(
                "If I am ever making you uncomfortable in this relationship,  "
              )
              .typeString("please do not hesitate to let me know.  ")
              .typeString(
                "I am committed to helping you achieve your goals baby.  "
              )
              .typeString(
                "I am here for you whenever, supporting you all the way.  "
              )
              .typeString(
                "I am your biggest fan, your loudest cheer leader, your die hard stan.  "
              )
              .typeString("If you ever need to rant, just rant to me.  ")
              .typeString("I promise, I'll listen with rapt attention.  ")
              .typeString(
                "I miss you a lot baby. Don't worry, we got a lot more valentines to spend together "
              )
              .typeString("But for now, all I want to say is: ")
              .typeString("HAPPY VALENTINE MI AMOR!  ")

              .start();
          }}
        />
      </div>
    </div>
  );
};
