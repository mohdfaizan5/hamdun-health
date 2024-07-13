"use client";

const question = ["Do you want to receive notifications?", "400+ bought in last month"];


import { toast } from "sonner";

const Notification = () => {
  setTimeout(() => {
    toast("Someone just ordered Majoon-e-Keemya ✅");
  }, 3000);
  return <div></div>;
};

export default Notification;
