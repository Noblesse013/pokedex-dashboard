import React from "react";
import PokeCard from "../components/PokeCard";
import QuizReminder from "../components/QuizReminder";
import ClassSchedule from "../components/ClassSchedule";
import WaterReminder from "@/components/WaterReminder";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div style={{ padding: "20px", background: "red" }}>
            <Sidebar />
      <PokeCard />
      <QuizReminder />
      <ClassSchedule />
      <WaterReminder/>
    </div>
  );
};

export default Home;
