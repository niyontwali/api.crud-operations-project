export default errorFunc = (res, messageContent, status) => {
  return {
    res.status(status).json({
      message: messageContent
    })
  }
};