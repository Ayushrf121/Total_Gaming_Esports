export const checkIsActive = (pathname, linkPath, linkName) => {
  return pathname === linkPath || (linkName === "HOME" && pathname === "/");
};