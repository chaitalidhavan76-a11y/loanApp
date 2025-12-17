import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  try {
    const msg = new Contact(req.body);
    await msg.save();

    res.json({ message: "Message sent!", msg });
  } catch (err) {
    res.status(500).json(err);
  }
};
