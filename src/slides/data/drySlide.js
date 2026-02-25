export const drySlideData = {
  title: "DRY: Don't Repeat Yourself",
  subtitle: "The Goal: Avoid duplicating code. Instead, abstract it into a reusable function or component.",
  beforeTitle: "Before (Repetitive)",
  beforeCode: `function processUser(user) {
  // validation logic
  if (!user.name || !user.email) {
    console.error("Invalid user");
    return;
  }
  // processing logic
}

function processOrder(order) {
  // validation logic
  if (!order.id || !order.amount) {
    console.error("Invalid order");
    return;
  }
  // processing logic
}`,
  afterTitle: "After (DRY)",
  afterCode: `function validate(data, fields) {
  for (const field of fields) {
    if (!data[field]) {
      console.error(\`Invalid \${field}\`);
      return false;
    }
  }
  return true;
}

function processUser(user) {
  if (validate(user, ['name', 'email'])) {
    // processing logic
  }
}`
};