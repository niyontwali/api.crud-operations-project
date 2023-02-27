import jwt from 'jsonwebtoken';

const restrictDelete = (req, res, next) => {
  // Check if the request has an authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Authorization header missing'
    });
  }

  // Extract the token from the authorization header
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token and extract the user ID from it
    const { userId } = jwt.verify(token, 'hhhhhh');
    console.log(userId)

    // Check if the user ID matches the ID of the blog author
    if (req.body.authorId !== userId) {
      return res.status(403).json({
        message: 'You are not authorized to delete this blog'
      });
    }

    // If the user ID matches the ID of the blog author, call the next middleware
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
};

export default restrictDelete;
