import axios from "axios";

const url = "";

export const getUserSkills = async () => {
  const res = await axios.get(
    "https://torreapi.azurewebsites.net/api/User/GetUsersBySkill/5B509BB8-42FE-4D5B-A957-3CB92F7E55CE"
  );
  // return res.data;
  return [
    {
      proficiency: "Master",
      skillNames: ["Software Development", "Web Development"]
    },
    { proficiency: "Novice", skillNames: ["Team Management"] }
  ];
};

//master, novice, expert, proficient, NoExperience
