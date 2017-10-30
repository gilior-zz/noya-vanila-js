Promise.prototype.then = (function (oldThen) {
    return function then(_successHandler, _rejectHandler) {
        /* your logic here;
        remember: both successHandler and rejectHandler can be non-functions */
        console.log('in new then');

        return oldThen.call(this, _successHandler, _rejectHandler);
    }
})(Promise.prototype.then);


