const HyperError = require("../obj/hyper-error/hyper-error")
let handleRequest = async (req, res) => {
    console.log('Hyperhandle Request');
    try {
        console.log(req.path);
        console.log(req.method);
        const route = require(`.${req.path}`)[req.method]

        try {
            console.log("Routing")
            const result = await route(req) // We pass the request to the route function
            console.log('Result');
            console.log(result);
            res.json(result) // We just send to the client what we get returned from the route function
        } catch (err) {
            /*
            This will be entered, if an error occurs inside the route function.
            */
            if (err instanceof HyperError) {
                /*
                In case the error has already been handled, we just transform the error
                to our return object.
                */

                return res.status(err.status).send({
                    error: err.code,
                    message: err.message,
                })
            } else {
                console.error(err) // For debugging reasons

                // It would be an unhandled error, here we can just return our generic error object.
                return res.status(500).send({
                    error: 'GENERIC',
                    message: 'Hệ thống xử lý gặp lỗi. Thử lại hoặc liên hệ quản trị viên',
                })
            }
        }
    } catch (err) {
        /*
        This will be entered, if the require fails, meaning there is either
        no file with the name of the request path or no exported function
        with the given request method.
        */
        console.log(err)
        res.status(404).send({
            error: 'NOT_FOUND',
            message: 'Tài nguyên bạn tìm kiếm không tồn tại',
        })
    }
}

module.exports = handleRequest
