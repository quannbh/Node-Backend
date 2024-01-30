const getHomepage = (req, res) => {
    //process data gọi model ở đây
    res.send('Hello, world! This is website of quannbh and NLPDEV');
}
const getWelcomepage = (req, res) => {
    //process data gọi model ở đây
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getWelcomepage
}

