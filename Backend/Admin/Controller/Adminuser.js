const Adminuser = require('../../Model/Adminusermodel');  // Adjust path as needed


// Login function
exports.Login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const user = await Adminuser.findOne({ username: username });

        if (!user) {
            return res.status(401).json({ message: "Invalid username." });
        } else if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password." });
        } else {
            const crypto = require('crypto'); 

            const token = crypto
                .createHash('md5')
                .update(`${Date.now()}${Math.random() * 1000}`)
                .digest('hex')
                .slice(0, 30)
                .match(/.{1,6}/g)
                .join('-');

            const update = await Adminuser.findOneAndUpdate(
                { username: username },
                { token: token },
                { new: true } // Return the updated document
            );

            // Successful login
            return res.status(200).json({ message: "Login successful!" });
        }


    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
};


