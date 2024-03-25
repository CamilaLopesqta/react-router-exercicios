import React from "react";

export const goToHome = (navigate) => {
  navigate("/")
};

export const goToProfilePage = (navigate, name, id) => {
  navigate(`/profile/${name}/${id}`)
};
