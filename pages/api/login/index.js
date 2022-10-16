export default function handler(req, res) {
  const { body } = req;
  if (body.email === "admin@admin.com" && body.password === "123456") {
    const userData = {
      name: "Fakrul Islam Robin",
      phone: "01870800306",
      Address: "Badda",
      email: "admin@admin.com",
    };
    res.status(200).json({ status: true, userData });
  }
  res.status(500).json({ status: false, errorMsg: "Email/Password wrong" });
}