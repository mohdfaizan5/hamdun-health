"use client";



import { toast } from "sonner";

const Notification = () => {
  setTimeout(() => {
    toast("Someone just ordered Majoon-e-Keemya ✅");
  }, 3000);
  return <div></div>;
};

export default Notification;
