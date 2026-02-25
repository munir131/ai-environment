export const kissSlideData = {
  title: "KISS: Keep It Simple, Stupid",
  subtitle: "The Goal: Write straightforward code. Avoid unnecessary complexity.",
  beforeTitle: "Before (Complex)",
  beforeCode: `function getUserRole(user) {
  let role;
  if (user.isAdmin) {
    role = "admin";
  } else if (user.isEditor) {
    role = "editor";
  } else if (user.isViewer) {
    role = "viewer";
  } else {
    role = "guest";
  }
  return role;
}`,
  afterTitle: "After (Simple)",
  afterCode: `function getUserRole(user) {
  if (user.isAdmin) return "admin";
  if (user.isEditor) return "editor";
  if (user.isViewer) return "viewer";
  return "guest";
}`
};