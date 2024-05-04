const logout = (req, res) => {
    try {
        res.clearCookie("userRegistered", {
            // Set the same options used when setting the cookie
            path: "/", // Ensure the correct path is specified
            httpOnly: false,
            secure: true, // Set to true if your server is hosted over HTTPS
            sameSite: "None", // Ensure SameSite attribute matches the original cookie
        });
        return res.json({
            status: "success",
            message: "Logout Successful ! ",
        });
    } catch (err) {
        return res.json({
            status: "error",
            message: "Logout error ! ",
        });
    }
};
module.exports = logout;
