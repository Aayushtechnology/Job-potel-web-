// make  a function to catch errors in async functions

const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            return res.status(500).json({
                error: err.message,
                massage: "Internal sever error"
            })
        })
    }
}
// export the function
module.exports = catchAsync;  