//get first & lastname from fullname
const separateFullName = (fullName) => {
  const nameParts = fullName.trim().split(" ");

  if (nameParts.length === 1) {
    if (nameParts[0] === "") return;
    return {
      firstName: nameParts[0],
      lastName: "",
    };
  } else if (nameParts.length === 2) {
    return {
      firstName: nameParts[0],
      lastName: nameParts[1],
    };
  } else {
    return {
      firstName: nameParts.slice(0, 2).join(" "),
      lastName: nameParts.slice(2).join(" "),
    };
  }
};

export { separateFullName };
