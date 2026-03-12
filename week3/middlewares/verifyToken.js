import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "Please login" });
    }
    try {
        // Using 'abcdef' as secret - ensure this matches your .env or sign() method
        const decodedToken = jwt.verify(token, 'abcdef');
        req.user = decodedToken; 
        next();
    } catch (err) {
        res.status(401).json({ message: "Session expired. Please relogin" });
    }
}