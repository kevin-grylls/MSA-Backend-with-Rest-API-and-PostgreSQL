const msg = require("../../modules/massage");
const TEXT = require("../../common/language.json").RESPONSE;
const createError = require("http-errors");

module.exports = app => {
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res
      .status(err.status || 500)
      .send(
        msg.write(
          err.message || err,
          err.status !== 404
            ? TEXT.GET.transactionError.string
            : TEXT.GET.pageNotFound.string,
          false
        )
      );
  });
};
