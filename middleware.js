module.exports = (res, req, next) => {
    res.header('Content-Range', 'posts 0-22/22')
    next();
}